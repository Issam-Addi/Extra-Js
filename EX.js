//// Q1: Evaluate each of the following Javascript expressions and show the value
// console.log( -9 * 3);
// console.log( "value " + 50);
// console.log( 17%5);
// console.log( 5%17);
// console.log( 5/10);
// console.log( 4==4);
// console.log( 4!=5);
// console.log( 7<=8);
// console.log(Math.ceil(x)- Math.floor(x));

//// Q2 : Read a number (using prompt) and display it using alert
// let Num1 = prompt("Enter number :");
// alert(Num1);


//// Q3 : Read in two numbers and display them in ascending order.
// let Num1 =parseInt(prompt("Enter number1 :"));
// let Num2 =parseInt(prompt("Enter number2 :"));
// if (Num1 > Num2){
//     console.log(Num2 + " " + Num1)
// }
//     else {
//     console.log(Num1 + " " + Num2)
// }

///// Q4: Read in two numbers and display the larger
// let Num1 =parseInt(prompt("Enter number1 :"));
// let Num2 =parseInt(prompt("Enter number2 :"));
// if (Num1 > Num2){
//     console.log(Num1 + ": is larger !")
// }
//     else {
//     console.log(Num2 + ": is larger !")
// }

//// Q5: Read two numbers and display their sum.  What problem did you encounter?
// let Num1 = parseInt(prompt("Enter number1 :"));
// let Num2 = parseInt(prompt("Enter number2 :"));
// let sum = Num1 + Num2;
// console.log("The sumation is: " + sum);


//// Q6: If you have a “num” variable,  Your task is to print:

// let num =parseInt(prompt("Enter number1 :"));
// if (num == 1){
//     console.log("ONE")
// } else if (num == 2){
//     console.log("TWO")
// } else if (num == 3){
//     console.log("THREE")
// } else if (num == 4){
//     console.log("FOUR")
// } else if (num == 5){
//     console.log("FIVE")
// } else if (num == 6){
//     console.log("SIX")
// } else if (num == 7){
//     console.log("SEVEN")
// } else if (num == 8){
//     console.log("EIGHT")
// } else if (num == 9){
//     console.log("NINE")
// } else {
//     console.log("PLEASE TRY AGAIN")
// }


//// Q7: Use a loop to display the numbers 0 through 5, each in a separate alert window.

// for (let i = 0 ; i < 6 ; i++) {
//     alert(`number is: ${i}`);
// }


//// Q8: Use a loop to display the numbers 0 through 5 in a single alert window

// let arr = []
// for (let i = 0 ; i < 6 ; i++) {
//     arr.push(i);
// }
// alert(`numbers is: ${arr}`);


//// Q9: Use a loop to display the numbers in the range 0…20 that are multiples of 3.

// let arr = []
// for (let i = 0 ; i < 21 ; i+=3) {
//     arr.push(i);
// }-1
// alert(`numbers is: ${arr}`);


//// Q10: Prompt the user for a number in the range 0…100. If the number is out of range, display an error message and prompt again until a valid number is entered.  Assume the user enters a number each time

// let number = parseInt(prompt("enter numder between (0-100):"));
// while (number < 0 || number >100) {
//     number = parseInt(prompt("enter numder between (0-100) again:"));
// }


//// Q11: Repeat previous exercise, but this time allow for the possibility that the user enters something that is not a number.  Hint: the built in function isNaN(x) returns true if x is not a number.  It returns false if x is a number.  Sort of backwards, but that's what's available.


//// Q12: Prompt for an integer, then display the sum of the integers from 0 through the number entered.  For example, if you enter 10, then display 55 which is the sum of   0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

// let number = parseInt(prompt("enter number: "));
// let number1 = 0;
// for (let index = 0; index <= number; index++) {
//     number1 += index;
//     if (index == number) {
//         alert(`the sum is:  ${number1}`);
//     }
// }


//// Q13: Prompt for an integer, then display the average of the integers from 0 through the number entered.  For example, if you enter 10, then display 5 which is the average of   (0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)/11.

// let number = parseInt(prompt("enter number: "));
// let number1 = 0;
// for (let index = 0; index <= number; index++) {
//     number1 += index;
//     if (index == number) {
//         alert(`the sum is:  ${number1}`);
//         number1/=(index+1);
//         alert(`the avg is:  ${number1}`);
//     }
// }
