const {printAllRooms,creteRoom,joinCreatedRoom,isRoomTaken,makeAMove, cleanRoom, leaveRoom, printRoom } = require("./roomFuntions");


creteRoom("4","Victor")
joinCreatedRoom("4","Tony")
makeAMove("4","Victor","S")
makeAMove("4","Tony","R")
// console.log(isRoomTaken("4"), "\nTONY GANA\n\n")
printRoom("4")

cleanRoom("4")
makeAMove("4","Tony","P")
makeAMove("4","Victor","S")
// console.log(isRoomTaken("4"), "\nVICTOR GANA\n\n")
printRoom("4")

cleanRoom("4")
makeAMove("4","Tony","P")
makeAMove("4","Victor","S")
// console.log(isRoomTaken("4"), "\nVICTOR GANA\n\n")
printRoom("4")


creteRoom("1","Jorge")
joinCreatedRoom("1","Rafa")
makeAMove("1","Jorge","S")
makeAMove("1","Rafa","R")
printRoom("1")


cleanRoom("1")
makeAMove("1","Jorge","S")
makeAMove("1","Rafa","P")
printRoom("4")


cleanRoom("4")
makeAMove("4","Tony","P")
makeAMove("4","Victor","S")
// console.log(isRoomTaken("4"), "\nVICTOR GANA\n\n")
printRoom("4")

leaveRoom("4","Tony")
leaveRoom("4","Victor")
printAllRooms()

// console.log(isRoomTaken("4"), "\nTONY LEAVE\n\n")
