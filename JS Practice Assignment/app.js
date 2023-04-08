// Question 1
// let Num1 = +prompt("Enter your First Number");
// let Num2 = +prompt("Enter your Second Number");

// if (Num1 > Num2){
//     console.log("The greatest Number is " + Num1);
// }
// else{
//     console.log("The greatest Number is " + Num2);
// }

// Question 2
// let Num = +prompt("Enter Number");

// if (Num > 0 ){
//     console.log("The sign is +")
// }
// else{
//     console.log("The sign is -")
// }

// Question 3
// let Num1 = +prompt("Enter your First Number");
// let Num2 = +prompt("Enter your Second Number");
// let Num3 = +prompt("Enter your Third Number");
// let Num4 = +prompt("Enter your Fourth Number");
// let Num5 = +prompt("Enter your Fifth Number");

// if (Num1 > Num2 && Num1 > Num3 && Num1 > Num4 && Num1 > Num5){
//     console.log("The greatest Number is " + Num1);
// }
// else if(Num2 > Num1 && Num2 > Num3 && Num2 > Num4 && Num2 > Num5){
//     console.log("The greatest Number is " + Num2);
// }
// else if(Num3 > Num1 && Num3 > Num2 && Num3 > Num4 && Num3 > Num5){
//     console.log("The greatest Number is " + Num3);
// }
// else if(Num2 > Num1 && Num4 > Num2 && Num4 > Num3 && Num4 > Num5){
//     console.log("The greatest Number is " + Num4);
// }
// else{
//     console.log("The greatest Number is " + Num5);
// }

// Question 4
// for(let i=0 ; i<=15 ; i++){
//     if( i % 2 == 0 ){
//         console.log(i + " is even")
//     }
//     else if( i % 2 !== 0 ){
//         console.log(i + " is odd")
//     }
// }

// Question 5

// let Num1 = +prompt("Enter your First Number");
// let Num2 = +prompt("Enter your Second Number");
// let Num3 = +prompt("Enter your Third Number");

// let grade = (Num1 + Num2 + Num3) / 3 ;

// if ( grade < 100 && grade > 90 ) {
//     console.log("Your Grade is A");
// }
// else if ( grade < 90 && grade > 80 ) {
//     console.log("Your Grade is B");
// }
// else if ( grade < 80 && grade > 70 ) {
//     console.log("Your Grade is C");
// }
// else if ( grade < 70 && grade > 60 ) {
//     console.log("Your Grade is D");
// }
// else if ( grade < 60 ) {
//     console.log("Your Grade is F");
// }

// Question 6

// for(let i=1 ; i<=100 ; i++){
//     if( i % 3 == 0 ){
//         console.log(" Fizz")
//     }
//     else if( i % 5 == 0 ){
//         console.log(" Buzz")
//     }
//     else{
//         console.log(i)
//     }
// }

// Question 7
var i,j,chr;
for(let i = 1 ; i<=6 ; i++){
    for( let j = 1 ; j < i ; j++){
        chr=chr+("*");
    }
    console.log(chr);
    chr=''; 
}