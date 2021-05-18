const didIWin = (user,pc) =>{
    var matrix = [
                        //["rock","paper","scissors","lizard","spock"]
        /* rock */      [     0,     -1,         1,       1,     -1],
        /* paper */     [     1,      0,        -1,      -1,      1],
        /* scissors */  [    -1,      1,         0,       1,     -1],
        /* lizard */    [    -1,      1,        -1,       0,      1],
        /* spock */     [     1,     -1,         1,      -1,      0],
    ]
    
    return matrix[user][pc];
}
const getIntegerForm = (option)=>{
    switch (option) {
        case "P":
            return 1;
        case "S":
            return 2;
        case "L":
            return 3;
        case "X":
            return 4;
        default:
            return 0;
    }
}

exports.didIWin = didIWin
exports.getIntegerForm=getIntegerForm
