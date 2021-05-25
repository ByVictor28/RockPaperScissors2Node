const {didIWin,getIntegerForm} = require("./game")
const rooms = [
    // {
    //     room:"1",
    //     name:"11",
    //     players:[
    //         {name:"Player11"},
    //         {name:"11Player"}
    //     ]
    // },
    // {
    //     room:"2",
    //     name:"22",
    //     players:[
    //         {name:"Player22"},
    //     ]
    // },
    // {
    //     room:"3",
    //     name:"33",
    //     players:[
    //         {name:"Player33"},
    //         {name:"33Player"}
    //     ]
    // }
]


exports.printAllRooms = () =>{
    rooms.forEach(room => {
        console.log("\nROOM")
        console.log(room)
        console.log("\nEND ROOM")
    })    
}

exports.creteRoom = (room,playerName) => {
    const newRoom = {
        room:room,
        moves:0,
        player1won:false,
        players:[
            {player:1,name:playerName,option:"",score:0},
            {player:2,name:"",option:"",score:0}
        ]
    }
    
    console.log("\n[[Room function]] Room created",newRoom,"\n")
    rooms.push(newRoom)
}

exports.joinCreatedRoom = (room,playerName) =>{
    rooms.forEach(elementRoom => {
        if(elementRoom.room === room){
            const secondPlayer = {player:2,name:playerName,option:"",score:0}
            elementRoom.players[1] = secondPlayer
            console.log("\n[[Room function]] Has enter",elementRoom,"\n")
        }
    })
}

exports.isRoomTaken = (room) =>{
    const foundRoom = rooms.find(element => element.room === room);    
    if(!foundRoom) {return false}

    console.log("\n[[Room function]] Find room:",foundRoom, " \n")
    return true    
}


exports.makeAMove = (room,name,option) =>{
    return rooms.find(element => {
        if(element.room===room){
            element.moves = element.moves+1;
            if(element.players[0].name===name){
                const playerInfo = element.players[0]
                element.players[0] = {...playerInfo, option}
                element.waiting=1
            }else{                
                const playerInfo = element.players[1]
                element.players[1] = {...playerInfo, option}
                element.waiting=2
            }
            if(element.moves===3){
                element.moves=1
            }

            // CHECKS IF PLAYER 1 WON
            if(element.players[0].option!=="" && element.players[1].option!==""){
                const player1ElectionInt = getIntegerForm(element.players[0].option)
                const player2ElectionInt = getIntegerForm(element.players[1].option)
                const player1won = didIWin(player1ElectionInt,player2ElectionInt)
                winner="IT IS A TIE"
                if(player1won===1){
                    element.players[0].score = element.players[0].score+1 
                    element.winner = element.players[0].name + " WINS"
                }else if(player1won===-1){
                    element.players[1].score = element.players[1].score+1     
                    element.winner = element.players[1].name+ " WINS"
                }
                element.waiting = 0
            }
            
            return element
        }
    });
}
exports.cleanRoom = (room) =>{
    return rooms.find(element => {
        if(element.room===room){
            console.log(element)
            element.moves = 0
            element.players[0].option =""
            element.players[1].option =""
            return element
        }
    });
}


//COUNTS NUMBERS OF PLAYERS IN A ROOM
const getPlayersCount = (room) =>{
    const roomDetails = rooms.find(element => element.room === room);
    console.log(`\n[[Room function]] get players count: ${roomDetails.players.length}\n`)
    return roomDetails.players
}

