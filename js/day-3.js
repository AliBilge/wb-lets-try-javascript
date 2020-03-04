/**
 *  Objects again!
 */

 var myObject = {
     firstName: 'Warren',
     lastName: 'Uhrich',
     sayHello: function(){
         // Creating a new paragraph...
         var newP=document.createElement('p');
         newP.textContent='Hey there!'; // Populate paragraph..
         document.body.appendChild(newP); // Add paragraph to body!
         // WOAH! innerHTML allows us to use HTML directly in a string :D
         document.body.innerHTML += `
           <dl><!-- A data-list! -->
                <dt>first Name:</dt><!-- Daalist title..-->
                <dd>`+this.firstName+`</dd><!-- is always followed by Datalist data! -->
                <dt>Last Name:</dt>
                <dd>`+this.lastName+`</dd>
           </dl>
           `;
     }
 }
