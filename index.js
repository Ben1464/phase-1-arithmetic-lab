
//Multiplication
let num1=31;
let num2=2;
let multiply= num1*num2;
console.log(multiply);
// Math.random
let random = (1,100);
function getRandomInt(min,max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}
let randomInt=getRandomInt(1,100);
console.log(randomInt);
// Remainder
let num3 =22;
let num4 =6;
let mod = num3%num4;
console.log (mod);
//Max
let max=20;
console.log(Math.max(2,3,15,20));