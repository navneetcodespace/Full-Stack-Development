let num1 = 153;


//sum of digits
let temp1 = num1
let digit = 0
while(temp1 > 0){
    digit += temp1%10;
    temp1 = Math.floor(temp1/10)
}
console.log(`Sum of the digits of number ${temp1} is ${digit}`);

// Find the sum of first n numbers where n is a variable.

let temp2 = num1
let sumofn = 0;
for(let i=0; i<=temp2; i++){
    sumofn += i
}
console.log(`sum of first n numbers are ${sumofn}`);

//print the table.
let temp3 = num1
product = 0
console.log(`Table of ${temp3}`)
for(let i=1; i<=10; i++){
    product = num1*i;
   console.log(`${temp3}*${i} = ${product}`)
}

// Check if it is a prime number
let temp4 = num1
let count = 0

for(let i=1; i<=temp4; i++){
    if(temp4%i == 0){
        count++;
    }
}

if(count == 2){
    console.log(`${temp4} is a prime number`)
}else{
    console.log(`${temp4} is a prime number`)
}

//Print all its factors
let temp5 = num1
console.log(`factors of ${temp5} are : `)
for(let i=1; i<=temp5; i++){
    
    if(temp5%i === 0){      
        console.log(i)
    }
}

// Check if it is an Armstrong number
let temp6 = num1
let sum2 = 0

while(temp6>0){
    let digiit = temp6%10;
    sum2 += digiit*digiit*digiit;
    temp6 = Math.floor(temp6/10);
}

if(sum2 === num1){
    console.log("Armstrong number")
}else{
    console.log("Not an Armstrong")
}

