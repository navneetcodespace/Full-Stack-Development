let pattern = ""
for(let i=1; i<=5; i++){
    // for spaces
    // for(let j = i; j < 5; j++){
    //     pattern += " "
    // }
    for(let k=1; k <= (2*i - 1); k++){
        pattern += "*"
    }
    pattern += "\n"
}

// for(let i=4; i>=1; i--){
//     for(let j=5; j>i; j--){
//         pattern += " "
//     }
//     for(let k=1; k<=(2*i-1); k++){
//         pattern += "*"
//     }
//     pattern += "\n"
// }
console.log(pattern)