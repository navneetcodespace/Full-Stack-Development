let arr = [4,8,2,11,6,7,10]

function maxnum(arr){
    let max = 0;
    for(let i = 0; i<= arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

console.log(`Maximum Number : ${maxnum(arr)}`);


let Sumofelelement = function(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element    
    });
    return sum;
}

console.log(`Sum of all elements : ${Sumofelelement(arr)}`);


let countOdd = (arr) => {
    let count = 0
    arr.forEach(element => {
        if(element % 2 !== 0){
            count++
        }
    });
    return count;
}

console.log(`Count of odd numbers : ${countOdd(arr)}`);