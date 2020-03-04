/*
<<<<<<< HEAD
 * Using what you just learned about conditional statements and loops, write a program that uses console.log() to print all the numbers from 1 to 100, with two exceptions.
 * For numbers divisible by 3, print Fizz instead of the number, and for numbers divisible by 5 (and not 3), print Buzz instead.
 * When you have that working, modify your program to print FizzBuzz, for numbers that are divisible by both 3 and 5 (and still print Fizz or Buzz for numbers divisible by only one of those).
*/

var myFizzBuzz = {
    i: 1, // Iterator.
    iterations: 100, // Number of total iterations.
    outputString: '',
    fizzBuzz: function () {
        // Loop based on iterations.
        while ( this.i <= this.iterations ) {
            if ( this.shouldIFizzBuzz( this.i ) ) {
                this.outputString += this.i;
                this.outputString += ': ';
                this.outputString += 'FizzBuzz!';
            } else if ( this.shouldIBuzz( this.i ) ) {
                this.outputString += this.i;
                this.outputString += ': ';
                this.outputString += 'Buzz!';
            } else if ( this.shouldIFizz( this.i ) ) {
                this.outputString += this.i;
                this.outputString += ': ';
                this.outputString += 'Fizz!';
            } else {
                this.outputString += this.i;
                this.outputString += ': ';
                this.outputString += this.i; // Plus one, so that only values between "1 and 100" will show.
            }
            // Newline.
            this.outputString += '\r\n';
            // Iterate.
            this.i++;
        }
        // Output result when loop is complete.
        return console.log( this.outputString );
    },
    // Checks if we should fizz!
    shouldIFizz: function ( num ) {
        // If divisible by 3... (no remainders.)
        if ( ( num % 3 ) === 0 ) {
            return true; // It is fizz time!
        }
        // Else, it is not fizz time :(
        return false;
    },
    // Checks if we should buzz!
    shouldIBuzz: function ( num ) {
        // If it is NOT divisible by 3... (remainders present.)
        if ( ( num % 3 ) !== 0 ) {
            // And if it IS divisible by 5... (no remainders.)
            if ( ( num % 5 ) === 0 ) {
                return true; // It is buzz time!
            }
        }
        // Else, it is not buzz time :(
        return false;
    },
    // Checks if we should fizzbuzz!
    shouldIFizzBuzz: function ( num ) {
        // If it is divisible by 3... (remainders present.)
        if ( ( num % 3 ) === 0 ) {
            // And if it is divisible by 5... (no remainders.)
            if ( ( num % 5 ) === 0 ) {
                return true; // It is fizzbuzz time!
            }
        }
        // Else, it is not fizzbuzz time :(
        return false;
    }
=======
 This comment can be:
 many lines!
 */

// Camel-casing is common for JavaScript!
var myInteger = 34; 

// We can output to our console via the console.log method.
console.log( myInteger * 3 ); 

// Let's practice an if-chain...
if ( ( myInteger === 7 ) || ( myInteger === 34 )  ) {
    console.log( 'Number is... 7 OR 34!?' );
} else if ( ( myInteger === 6 ) && ( myInteger > 5 ) ) {
    console.log( 'Number is 6!!!' );
} else if ( myInteger > 5 ) {
    console.log( 'Number is greater than 5.' );
} else if ( myInteger < 5 ) {
    console.log( 'Number is less than 5.' );
} else {
    console.log( 'Number is 5!?' );
}

// Datatypes:
var myString = 'Hello world!'; // "List" of characters!
myInteger = 64; // Already declared, so no var!
var myFloat = 12.768; // Decimal number.
var myBoolean = true; // True or false.
var uhOh = undefined; // No value is yet assigned.
var myNull = null; // The value/variable doesn't exist!
var myArray = [myString, myInteger, myFloat, uhOh, myNull]; // Array!

// Let's try a loop! Remember: i++ is the same as:
//                             i = i + 1;
for ( var i = 0; i < 5; i++ ) {
    console.log( 'Value of position '+i+', in myArray, is: '+myArray[i] );
}

// A basic function!
function myFunction () {
    var testerNum = 36; // Careful! We can't use this outside of the function... this is locally scoped!
    console.log( 'My function has run.' );
}

// console.log( 'TesterNum is: '+testerNum ); // What is defined in local scope, will not be available globally...

// We have to call upon it, in order to run it, don't forget!
// myFunction();

/**
 * Let's convert C# exercise 4 to a JavaScript program!
 * @link https://github.com/TECHCareers-by-Manpower/csharp-exercise-4/blob/master/Program.cs 
 */

// Main program.
function smileyFunction()
{
    var input = getInput();
    input = addSmileyToEnd( input );
    input = addSmileyToBeginning( input );
    writeName( input );
}

// Retrieve input.
function getInput()
{
    return prompt( 'Enter your name.' );
}

// Add a "smiley" string to the end.
function addSmileyToEnd( input )
{
    input = input+":)";
    return input;
}

// Add a (sad) "smiley" string to the beginning.
function addSmileyToBeginning( input )
{
    input = ":("+input;
    return input;
>>>>>>> 8912b513047c661f359614dd9ffdbc72650261d9
}

// Let's execute our program:
// myFizzBuzz.fizzBuzz();
// © 2020 GitHub, Inc.
// Terms
// Privacy
// Security
// Status
// Help
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About

// Hotel


var myHotel = {
    name:'The Quay',
    totalRooms: 40,
    bookedRooms: 25,
    types: [
        'twin',
        'double',
        'suite'
    ],

    checkAvailability: function(){
        console.log('Remaining available rooms: ' + (this.totalRooms - this.bookedRooms ));
    }
}

<<<<<<< HEAD
myHotel.bookedRooms += 5; // Increase to 30.
=======
/* TRUTHY and FALSY
 * true === true
 * 'hello' == true
 * 1 == true
 * -58 == true
 * false === false
 * 0 == false
 * undefined == false
 * null == false
 * NaN == false
 * '' == false
 */

// If statement...
var a = 3;
var b = 5;
if ( a === b ) {
    console.log( 'a is identical to b.' );
} else {
    console.log( 'a and b are not identical.' );
}

// Converting the above to ternary...
/*
 * Syntax is:
 * (condition) ? (logic for TRUE) : (logic for FALSE);
 * Note that it RETURNS the outcome, so it can be used for assignment.
 */
( a === b ) ? console.log( 'a is identical to b.' ) : console.log( 'a and b are not identical.' );

// A while loop takes a condition.
var i = 0;
while ( i < 6 ) {
    console.log( 'While loop: '+i );
    i++; // Make sure the condition will eventually be FALSE, or the loop will go on FOREVER! :(
}

// Foreach!? It is a method of the array datatype!
myArray.forEach( function( arrayItem ) {
    // Woah! We're in a "closure", or, an "anonymous function" now! We didn't declare and name it, so won't be able to call it again... it is useful here to process our array items though!
    console.log( 'Array item is: '+arrayItem );
} );

/*
 * Let's give objects a shot!
 */

 var myObject = {
     name:    'Bob',
     age:     32,
     hobbies: [
        'sports',
        'movies',
        'hiking'
     ],
     sayHi: function() {
        console.log(
            'Hello! My name is '
            +this.name
            +'. I am '
            +this.age
            +' years old, and one of my hobbies is: \r\n' // Newline character!
            +this.hobbies[1]
            +'.' );
     },
     birthday: function() {
        this.age++;
        return this.age;
     }
 }

 myObject.birthday(); // Increment object's "age" property.
 myObject.hobbies[1] = 'programming'; // Update array value in position "1".

 // Let Bob speak!
 // myObject.sayHi();

 /*
  * myObject.age
  * is equivalent to...
  * myObject['age']
  */

console.log( 'Looping through myObject:' );
 // We can loop through properties in an object:
 for ( var prop in myObject ) {
    console.log( myObject[prop] );
 }
>>>>>>> 8912b513047c661f359614dd9ffdbc72650261d9

myHotel.checkAvailability();
