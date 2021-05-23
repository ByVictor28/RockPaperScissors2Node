const app = require('express')();
const cors = require("cors");
const {didIWin,getIntegerForm} = require("./game")
const {getMoves,cleanRoom,creteRoom,getPlayersCount,findRoom} =  require("./roomFuntions")

app.use(cors());
const server = require('http').createServer(app);

const io = require('socket.io')(server,{
    cors: {
        origin: '*',
      }    
});


server.listen(3000);
io.on('connection', (socket) => { 
    console.log("new Client: ",socket.id)
    
    socket.on("joinRoom",(data) => {
        console.log(`${data.name} wants to join room: ${data.room}`)

        // TEST GET PLAYERS
        // getPlayersCount("1")
        
        // TEST FIND ROOM
        // findRoom("2")
        
        //join group
        const checkRoomCreated = findRoom(data.room)
        
        if(checkRoomCreated){
            socket.join(data.room);

            //Send to other player in the group
            io.to(data.room).emit("joinRoom",{name:data.name,room:data.room});

            //add the room with a basic data
            creteRoom(data.room)
        }else{
            
        }

 
        
    })

    socket.on("newMove",(data)=>{
        console.log(`${data.name} picked: ${data.option} for room: ${data.room}`)
    
        //get the data from the room
        const roomDetails = getMoves(data.room,data.name,data.option)

        //send the data to the client
        io.to(data.room).emit("newMove",{roomDetails});
    })

    socket.on("cleanRoom",(data)=>{
        console.log("CLEAN ROOM",data.room)
        
        //clean the player1, player2 and moves from the room
        const newRoomClean = cleanRoom(data.room)
        

        // console.log(newRoomClean)

        //send the clean room to the client so it can restart the board
        io.to(data.room).emit("cleanRoom",{newRoomClean});
    })
    
    socket.on('disconnect', () => {
            console.log("Adios")
    });      
 });
