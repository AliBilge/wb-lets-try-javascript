/* day-2.js */

var myNumber='54'; //String :0

/* converting string to number*/

console.log(myNumber + 6);

myNumber=parseInt(myNumber); // Now it is an "int"

console.log(myNumber+6); // addition occurs

myNumber=parseFloat(myNumber); // its a float now

console.log(myNumber+6); // addition ocurs

myNumber=Number(myNumber); // Now its a 64-bit floating point numric! the ACTUAL type of number in JavaScript!

console.log(myNumber+6); //Addition occurs


/* converting numbers to strings*/

myNumber=myNumber.toString(); // the toString() method will turn a number into a string

console.log(myNumber+6); // concatenation once more!


/** Watch out! Aout-conversion can be intresting! Always check your bases: */





var myString='hellow World';
console.log('Test 1:' );
console.log('Type is: '+(typeof myString));
console.log(myString);

myString=5;
console.log('Test 2:' );
console.log('Type is: '+(typeof myString));
console.log(myString);

myString=myString*3;
console.log('Test 3:' );
console.log('Type is: '+(typeof myString));
console.log(myString);

myString= 'Update string.';
console.log('Test 4:' );
console.log('Type is: '+(typeof myString));
console.log(myString); // 'Updated string.'

myString={"another" : "string test!?" };
console.log('Test 5:' );
console.log(myString);
console.log('Type is: '+(typeof myString)); // { another: 'string test!?'}

/**
 * Switch (CASE) Statements
 */

 var mathOperation='add';

 switch (mathOperation) {

    case "subtract":
        console.log(5-5);
      break;
     case "add":
         console.log(5+5);
       break;  //Switchs  execute starting at a first MATCHing value.
               //However, they only STOP EXECUTING when they hit a break.
               //No break,
    
    case "divide":
        console.log(5/5);
       break;
    case "multiply":
        console.log(5*5);
     break;
    default:
        console.log('No operator provided.' );
     break; 
 }
 /**
  * Lets manupilate things in the DOM!
  */

  var myParagraph= document.getElementById('my-paragraph'); //Target and store an element!
  console.log(myParagraph);

  myParagraph.textContent='Hello world! ';
  myParagraph.textContent +=' Also, hey how are ya\'?';  //\' is an escape. It says "don't close my string, just store an actual apostraphe here!"

  // Creats a BRAND NEW element. It won't show up yet, but we can start manuplating it before we inject it into our webpage!
  var newParagraph = document.createElement( 'p' );
  newParagraph.textContent = 'This paragraph was created completely in Javascript! Wowie! zounds! Gadzooks!'; // Populate your element
  //Add your element to the document body!
  document.body.appendChild( newParagraph );

  var otherNewParagraph = document.createElement( 'p' );
  otherNewParagraph.textContent = 'Second paragtaph'; 
  
  // Please never actually do inline styles like this. Apply aclass or ID and use your CSS file  to apply styles instead!
  otherNewParagraph.style.color='darkgray';

  var myFirstLink = document.createElement('A'); // An anchor (link).
  myFirstLink.textContent = 'Click Here!';
  myFirstLink.href = ' ./index.html ';
  myFirstLink.title = 'return to the home page.';
  myFirstLink.style.color = 'red';

  otherNewParagraph.appendChild(myFirstLink);


// now, our paragraph with TEXT and a LINK both, will be added to the body!
document.body.appendChild(otherNewParagraph);

var targetLink = document.querySelector('.my-link');
// targetLink.textContent = 'Go Back Home';


/**
 *  FORMS!
 */

 var calculatorForm=document.getElementById('calculator');

 calculatorForm.addEventListener('submit', function(event){
   // STOP the submission (event!)
   event.preventDefault(); 

   // Collect the form fiels (DOM objects.)
  var num1Input=document.getElementById('num1');
  var num2Input=document.getElementById('num2');

  // Retrieve the values from the form fields

  var operatorValue=operatorInput.value;
  var num1Value=num1Input.value;
  var num2Value=num2Input.value;

 });

//  var operatorInput=document.getElementById('operator');
//  var num1Input=document.getElementById('num1');
//  var num2Input=document.getElementById('num2');

var result=0;

 switch (operatorValue) {

    case "subtract":
        result=num1Value-num2Value;
      break;
     case "add":
      result=num1Value+num2Value;
       break;  //Switchs  execute starting at a first MATCHing value.
               //However, they only STOP EXECUTING when they hit a break.
               //No break,
    
    case "divide":
      result=num1Value/num2Value;
       break;
    case "multiply":
      result=num1Value*num2Value;
     break;
 } //end of switch

 var resultElement=document.getElementById('result');
 resultElement.textContent=result; // Show the result in our element

} ); // End of event