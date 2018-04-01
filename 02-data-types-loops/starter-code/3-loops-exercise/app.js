/*
Write code that creates a for loop that calculates 2 to a given power, and console.logs each step of the calculation. For instance, when calculating 2 to the 10th power (2^10), the for loop should console.log the result of 2^1, then the result of 2^2, etc., until it gets to 2^10.

Start by creating a variable to store the power of 2 you want to calculate. (In the above example, the value of this variable would be 10.)

Then create a for loop to calculate each step of this process and log it to the console.

BONUS 1: Rewrite your code to allow a user to enter the exponent value, rather than hard-coding it into your program. (Hint: Read up on the window.prompt method at https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt.)

BONUS 2: Rewrite your code to use a while loop rather than a for loop. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

BONUS 3: Rewrite your code to use a do/while loop rather than a for loop or while loop. (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
*/

/*
let power = 10;
let value = 1;
for(let i =0; i<power; i++ ){
    value=value*2;
    console.log('for i = ' + i + ' value is: '+value);
}
*/

/*
let power = window.prompt('enter the power: ');
let value = 1;
for(let i =0; i<power; i++ ){
    value=value*2;
    let j=i+1;
    console.log('for counter i = ' + i + ', 2^' + j + ', is: '+value);
}
*/

let power = window.prompt('enter the power: ');
let value;
let i=0;
do{
    value = Math.pow(2, i);
    
    //console.log('for counter i = ' + i + ', 2^' + j + ', is: '+value);
    console.log('for counter i = ' + i + ', 2^' + i + ', is: '+value);
    i++;
    
} while(i<= power);
