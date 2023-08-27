console.log('Hello World')
name='Sumanth CR'
console.log(name)
//variables
sentence='How are you doing today,nice to see you,Have a great day!'
console.log(sentence)

//Operators
food=20
tipPersentence=0.2
tipAmount=food*tipPersentence
console.log(tipAmount)

//Prompt() is a built in javaScript functionality that helps you get inputs from a user through the browser
//1st Approch
 // fruit=prompt('What is your favorite fruit?')
 //console.log(fruit)

 //Another Ways
//food=prompt('How much was the food?')
//tipPersentence=0.3
//tipAmount=food*tipPersentence
//console.log(tipAmount)

//Another Approch Prompt()
food=Number(prompt('How much was the food?'))  //this is means the user given input is String not number example 100
tipPersentence=Number(prompt('tip % ?')/100)   //20
tipAmount=food*tipPersentence          //20
console.log(tipAmount)                //20
total=food + tipAmount   //10020
console.log(total)       //10020

//alert() is like prompt() ,but it is only for output

//javaScript variable can hold different data types :numbers,Strings,Objects and More
//Number("100") converts the String 100 to number 100 , that means wrap whole this inside this Number()