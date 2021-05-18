const app = require('express')();
const cors = require("cors");
const {didIWin,getIntegerForm} = require("./game")
app.use(cors());
const server = require('http').createServer(app);

const io = require('socket.io')(server,{
    cors: {
        origin: '*',
      }    
});


const rooms = [
    
]

const getMoves = (room,name,option) =>{
    return rooms.find(element => {
        if(element.room===room){
            element.moves = element.moves+1;
            if(element.moves===1){
                element.player1={name,option}
            }else{
                element.player2={name,option}
                const player1ElectionInt = getIntegerForm(element.player1.option)
                const player2ElectionInt = getIntegerForm(element.player2.option)

                const player1won = didIWin(player1ElectionInt,player2ElectionInt)
                // console.log(`${player1}, ${player2}: ${player1won}`)
                element.winner = player1won
            }
            if(element.moves===3){
                element.moves=1
                
            }
            return element
        }
    });
}
const cleanRoom = (room) =>{
    return rooms.find(element => {
        if(element.room==room){
            element.moves = 0;
            element.player1 = {}
            element.player2 = {}
            return element
        }
    });
}

server.listen(3000);
io.on('connection', (socket) => { 
    console.log("new Client: ",socket.id)
    
    socket.on("joinRoom",(clientInfo) => {
        console.log(`${clientInfo.name} wants to join room: ${clientInfo.room}`)

        socket.join(clientInfo.room);
        io.to(clientInfo.room).emit("joinRoom",{name:clientInfo.name,room:clientInfo.room});
        rooms.push({room:clientInfo.room,moves:0,player1:{name:"",option:""},player2:{name:"",option:""},player1won:false})
    })

    socket.on("newMove",(data)=>{
        console.log(`${data.name} picked: ${data.option} for room: ${data.room}`)
    
        const roomDetails = getMoves(data.room,data.name,data.option)
        
        // rooms.forEach(element => {
        //     console.log(element)
        // });
        // console.log(roomDetails)
        io.to(data.room).emit("newMove",{roomDetails});
    })

    socket.on("cleanRoom",(data)=>{
        const newRoomClean = cleanRoom(data.room)
        console.log("CLEAN ROOM",data.room)
        
        // rooms.forEach(element => {
        //     console.log(element)
        // });
        console.log(newRoomClean)
        io.to(data.room).emit("cleanRoom",{newRoomClean});
    })
    
    socket.on('disconnect', () => {
            console.log("Adios")
    });      
 });
