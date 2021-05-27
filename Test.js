const {printAllRooms,creteRoom,joinCreatedRoom,isRoomTaken,makeAMove, cleanRoom, leaveRoom } = require("./roomFuntions");


creteRoom("4","Victor")
joinCreatedRoom("4","Tony")
makeAMove("4","Victor","S")
makeAMove("4","Tony","R")
console.log(isRoomTaken("4"), "\nTONY GANA\n\n")

cleanRoom("4")
makeAMove("4","Tony","P")
makeAMove("4","Victor","S")
console.log(isRoomTaken("4"), "\nVICTOR GANA\n\n")

cleanRoom("4")
makeAMove("4","Tony","P")
makeAMove("4","Victor","S")
console.log(isRoomTaken("4"), "\nVICTOR GANA\n\n")

cleanRoom("4")
makeAMove("4","Tony","P")
makeAMove("4","Victor","S")
console.log(isRoomTaken("4"), "\nVICTOR GANA\n\n")

console.log(`\n\n\n\n ${leaveRoom("4","Tony")}\n\n\n\n`)
console.log(isRoomTaken("4"), "\nVICTOR GANA\n\n")


// console.log(isRoomTaken("4"))
// printAllRooms()
// console.log(isRoomTaken("4"))


console.log("Hola mundo")
