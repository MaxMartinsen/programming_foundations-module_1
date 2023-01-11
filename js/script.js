/* Create two number variables, 
one with an integer value and one
with a decimal value.*/

var integer = 8;
var decimal = 6.9;

console.log("integer: ",integer);
console.log("decimal: ",decimal);

/*Declare and initialise a variable with all the working days of the week separated by hyphens -.*/

var workingDays = "Monday-Tuesday-Wednesday-Thursday-Friday";
console.log("workingDays: ",workingDays);

/* Create four variables that demonstrate the following operations: */

//addition

var addition = 5 + 5;
console.log("addition 5 + 5 = ",addition);

//subtraction

var subtraction = 10 - 5;
console.log("subtraction 10 - 5 = ",subtraction);

//multiplication

var multiplication = 10 * 5;
console.log("multiplication 10 * 5 = ",multiplication);

//division

var division = 50 / 5;
console.log("division 50 / 5 =",division);

/* Declare a boolean variable with an initial value of false. */

// var isLoggedIn = false;

console.log("isLoggedIn: ",isLoggedIn);

/* Convet the following variable names to camelCase:*/
// var time_elapsed;
// var totalprice;

var timeElapsed;
var totalPrice;

console.log(timeElapsed);
console.log(totalPrice);

/* Convert the following string values to number values: */
// var number1 = "53";
// var number2 = "44.6";

var number1 = "53";
var number2 = "44.6";

var number1 = parseInt(number1);
var number2 = parseFloat(number2);

console.log("Convert:",number1);
console.log("Convert:",number2);

/* Check the type of the following variables and log the results: */

var pet = "donkey";
var age = 89;
var discountApplied = true;
var timeLeft;

var typeOfPet = typeof pet;
console.log("typeOfPet:",typeOfPet);

var typeOfAge = typeof age;
console.log("typeOfAge:",typeOfAge);

var typeOfDiscountApplied = discountApplied;
console.log("typeOfDiscountApplied:",discountApplied);

var typeOfTimeLeft = timeLeft;
console.log("typeOfTimeLeft:",timeLeft);

// One more example results:

console.log("typeOfPet:",typeof pet);
console.log("typeOfAge:",typeof age);
console.log("typeOfDiscountApplied:",typeof discountApplied);
console.log("typeOfTimeLeft:",typeof timeLeft);

/* Declare and initialise a variable with the value "Updating heading".
Select the h1 element on the page and set it's inner HTML value to be the variable created above. */

// Declare a variable with a string value

//var heading = "Updating heading";

// Select the h1 element on the page

//var h1Element = document.querySelector("h1");

// Set the inner HTML value of the h1 element to be the value of the heading variable

/* h1Element.innerHTML = heading; */

// One more example results:

var h1 = "Programming Foundations Module 1 Lesson Task 2";

var h1Element = document.querySelector("#h1");

h1Element.innerHTML = "Updating heading";

console.log("h1Element:",h1Element.innerHTML);

/* Select the body element on the page and change its background colour to lightskyblue. */

var body = document.querySelector("body");
body.style.backgroundColor = "lightskyblue";

/* Or whether a user has entered valid data into an input field in a form: */

 var isLoggedIn = false;

 if (isLoggedIn === true) {
    console.log("Logged in"); 
 }
 else {
    console.log("NOT Logged in");
 }

 /* Or whether the user has total value valid data in an input field on a form: */

 var total = 60;

 if (total >= 60) {
    console.log("Very expensive");
 }
 else {
    console.log("Cheap");
 }

/* Check */

var answer = 8;

var guestNumber = 10;

if(guestNumber >= answer) {
    console.log("Correct guest");
}
else {
    console.log("Incorrect guest");
}

/* else if */


var grade = 7;
var letterGrade;

if(grade === 10) {
    letterGrade = "A";
}
else if (grade === 9) {
    letterGrade = "A";
}
else if (grade === 8) {
    letterGrade = "B";
}
else if (grade === 7) {
    letterGrade = "C";
}
else {
    letterGrade = "Unknown";
}
console.log(letterGrade);

/* Case */

var grade = 11;
var letterGrade;

switch (grade) {
    case 10:
    case 9:
        letterGrade = "A";
        break;
    case 8:
        letterGrade = "B";
        break;
    case 7:
        letterGrade = "C";
        break;
    default:
        letterGrade = "Unknown"
        break;
}
console.log(letterGrade);

/* Lesson Task 3 Questions
Question 1
Given these two variables

var firstNumber = 34;
var secondNumber = 89;
write an if statement that checks whether firstNumber is smaller than secondNumber. If it is, log the message "The first number is smaller than the second". */

var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
    console.log("The first number is smaller than the second");
}


/* Question 2
Given these two variables

var age = 11;
var minimumAge = "13";
write code that checks whether age meets the minimumAge requirement. Log a message if it passes the test and use an else block to log a message if it doesn't. */

var age = 11;
var minimumAge = "13";

minimumAge = parseInt(minimumAge);

if (age < minimumAge){
    minimumAge = "Age does not meet minimum age requirement";
}
else {
    minimumAge = "Age meets minimum age requirement";
}
console.log(minimumAge);

/* Question 3
Given these two variables

var income = "11.050";
var maximumIncome = "13.075";
write code that checks whether income meets the maximumIncome requirement. Log a message if it passes the test and use an else block to log a message if it doesn't. */

var income = "11.050";
var maximumIncome = "13.075";

income = parseFloat(income);
maximumIncome = parseFloat(maximumIncome);

if (maximumIncome >= income) {
    maximumIncome = "Passed to the test";
}
else{
    maximumIncome = "Doesn't passesd to the test";
}
console.log(maximumIncome);

/* Question 4
Fix this code:

var colour = "blue";

if ((colour = "orange")) {
    console.log("This colour is a bit rubbish");
} */

var colour = "blue";

if (colour === "orange") {
    console.log("This colour is a bit rubbish");
}

/* Question 5
Given the following variable

var invoicePaid = false;
write code that logs the message "Not paid" if the invoice has not been paid. */

var invoicePaid = false;

if (invoicePaid === false) {
    invoicePaid = "Not paid";
}
console.log(invoicePaid);

var invoicePaid = false;

if (!invoicePaid) {
    invoicePaid = "Not paid";
}
console.log(invoicePaid);

/* Question 6
Given these two variables

var selectedNumber = 11;
var winningNumber = "15";
write code that checks if the winning number hasn't been selected. If it hasn't, log the message "You lose again". Use the strict inequality operator. */

var selectedNumber = 11;
var winningNumber = "15";

winningNumber = parseInt(winningNumber);

if (winningNumber !== selectedNumber) {
    winningNumber = "You lose again";
}
console.log(winningNumber);

/* Question 7
Given this variable

var dayOfTheWeek = 2;
write a switch statement that log the weekday name depending on the value of dayOfTheWeek. If dayOfTheWeek is 1, log "Monday", if it is 2 log "Tuesday".

If the dayOfTheWeek is not a number between 1 and 7, log the message "Invalid day number". */

var dayOfTheWeek = 2;

switch (dayOfTheWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number")
        break;
}

//Programming Foundations - Module 1
// for loop

for (var i = 1; i <= 5; i++) {
    console.log(i);  
}
for (let count = 1; count <= 6; count++) {
    console.log(count);
}

var i = "red";

for (var i = 1; i <= 5; i++) {
    console.log("red");
    
}

/* Lesson Task 4 Questions
Question 1
Write a loop that logs the numbers 0 to 7. */

for (i = 0 ; i <= 7; i++) {
    console.log(i);
}

/* Question 2
Write a loop that logs the numbers 10 to 1. Count down from 10 to 1. */

for (var i = 10; i >= 0; i-- ) {
    console.log(i);
}

for (let i = 10; i >= 0; i = i - 1) {
    console.log(i);
}
/* Question 3
Write a loop that counts from 10 to 20, and log only the odd numbers. 11, 13, 15, etc */


for (var i = 10; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

for (var i = 10 ; i <= 20 ; i++) {
    if (i % 2 !== 0) {
     console.log(i);   
    }   
}
/* String properties and methods, multiple if conditions and nested if statements */

var firstName = "Mari";

var lengthOfName = firstName.length;

console.log(lengthOfName);

var toLowerCase = firstName.toLowerCase();

console.log(toLowerCase);

var toUpperCase = firstName.toUpperCase();

console.log(toUpperCase);


//Letter case matters in JavaScript

if ("H" === "h") {
    console.log("The letters are equal");
  } else {
    console.log("The letters are not equal");
  }

  if ("Harry" === "harry") {
    console.log("The names match");
  } else {
    console.log("The names do not match");
  }

var firstLetter = "G";
var secondLetter = "g";

if (firstLetter.toLocaleLowerCase() === secondLetter.toLocaleLowerCase()) {
    console.log("The letter match");
}
 else {
    console.log("The letter NOT match");
 }

 //The logical AND (&&) operator

 var selectedNumber = 25;
 var lowerLimit = 30;
 var upperLimmit = 50;

 if ((selectedNumber >= lowerLimit) && (selectedNumber <= upperLimmit) ) {
    console.log("The selected number is within range");
 }
else {
    if (selectedNumber < lowerLimit) {
        console.log("Number is too low");
    }
    if (selectedNumber > upperLimmit) {
        console.log("Number is too high");
    }
}

// Nested if statements

var petType = "Cat";
var age = 2;
var isFrendly = true;

if (petType.toLowerCase() === "cat" && age <= 2 && isFrendly === true) {
    console.log("Pet accepted");
}
else {
    console.log("Pet NOT accepted");
}

/* Programming Foundations - Module 2
Lesson Task 1 Questions
 */

/* Question 1
Use a JavaScript string method to determine whether these strings are equal regardless of letter case.

var requiredName = "Gertrude";
var suppliedName = "GERTRUDE"; */

var requiredName = "Gertrude";
var suppliedName = "GERTRUDE";

if (requiredName.toLowerCase() === suppliedName.toLowerCase()) {
    console.log("The strings are equal");
}

/* Question 2
Write an if statement to check if the variable below has a minimum character count of 4 and a maximum of 10.

var username = "myusername";
If both tests pass log a message saying "Acceptable username".

If either test fails use nested if statements to indicate which test failed, e.g. if the character count is too low, log the message "Too few characters". If the character count is too high, log the message "Too many characters".

Change the variable's value to test your code. */

var username = "myusername";

if ((username.length >= 4) && (username.length <= 10)) {
    console.log("Acceptable username");
}
else {
    if (username.length < 4) {
        console.log("Too few characters");
    }
    if (username.length > 10) {
        console.log("Too many characters");
    }
}

/* Question 3
The following criteria need to be met before an order can be considered complete:

The invoice must be paid
The product must have been dispatched
The customer must have signed for the delivery
Using the variables below write an if/else statement that determines whether the order is complete:

var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;
If the order is complete log the message "Order complete". If not, use nested if statements to indicate why the order is incomplete.

Use the logical AND (&&) operator to complete this task.

Change the variables' values to test your code. */

var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

if ((invoicePaid === true) && (productDispatched === true) && (customerHasSigned === true)) {
    console.log("The order is complete");
}
else {
    console.log("The order is NOT complete");

    if (invoicePaid === false) {
        console.log("The invoice must be paid");
    }
    if (productDispatched === false) {
        console.log("The product must have been dispatched");
    }
    if (customerHasSigned === false) {
        console.log("The customer must have signed for the delivery");
    }
}

//or

if (invoicePaid && productDispatched && customerHasSigned) {
    console.log("The order is complete");
  } else {
    console.log("The order is NOT complete");

    if (!invoicePaid) {
      console.log("The invoice must be paid");
    }
    if (!productDispatched) {
      console.log("The product must have been dispatched");
    }
    if (!customerHasSigned) {
      console.log("The customer must have signed for the delivery");
    }
  }

/* Question 4
Re-write your code from the question above using the logical OR (||) operator. */

var invoicePaid = true;
var productDispatched = false;
var customerHasSigned = false;

if ((invoicePaid !== true) || (productDispatched !== true) || (customerHasSigned !== true)) {
    console.log("The order is NOT complete");
    if (invoicePaid === false) {
        console.log("The invoice must be paid");
    }
    if (productDispatched === false) {
        console.log("The product must have been dispatched");
    }
    if (customerHasSigned === false) {
        console.log("The customer must have signed for the delivery");
    }
}
else  {
        console.log("The order is complete");
}


//Arrays --- Counting items in an array using length

var shoppingList = ["red","yellow","blue"];

console.log(shoppingList);

// number of items in array

console.log("leight: ",shoppingList.length);

// add item to array - push()

shoppingList.push("rat poison");

console.log(shoppingList);

console.log("leight: ", shoppingList.length);

// sort array - sort()
// console.log(shoppingList.sort());

var sortedList = shoppingList.sort();
console.log(sortedList);

// Adding items to the end of an array using Array.push()

var myArray = [];

console.log(myArray.length);

myArray.push(4);

console.log(myArray.length);

myArray.push(5);

console.log(myArray.length);

//Adding items to the beginning of an array using Array.unshift()

var posts = ["I travelled to...", "Dear diary...", "My favourite sport is..."];

var newPost = "Today I wrote a blog post";

posts.unshift(newPost);

console.log(posts);

// posts === ['Today I wrote a blog post', 'I travelled to...', 'Dear diary...', 'My favourite sport is...'];

//Removing items from an array using Array.pop()

var example = [1, 2, 3, 4];

var lastItem = example.pop();

console.log(example);

// lastItem === 4
// example = [1, 2, 3]

//Removing items from an array using Array.shift()

var example = [1, 2, 3, 4];

var fistItem = example.shift();

console.log(example);

// fistItem === 1
// example = [2, 3, 4]

//Accessing items in arrays

var colours = ["red", "pink", "yellow"];

var firstItem = colours[0];
// red

var thirdItem = colours[2];
// yellow

var colours = ["red", "pink", "yellow"];

for (var i = 0; i < colours.length; i++) {
  var col = colours[i];
  console.log(col);
}
// red
// pink

// shoping list

var list = ["bananas", "a few frogs" , "some rats", "rat poison"];


// var len = list.lenght;

// console.log(len);

for (var i = 0; i < list.length; i++) {

    console.log(i);

    var item = list[i];

    console.log(item);
}

//Level 2 Content

//Array.forEach()

var colours = ["red", "pink", "yellow"];

colours.forEach(function (colour, index) {
  console.log(colour, index);
});

//This is the same as the example above, using a for loop:

var colours = ["red", "pink", "yellow"];

for (var index = 0; index < colours.length; index++) {
  var colour = colours[index];
  console.log(colour, index);
}

//Array.find()

var colours = ["red", "pink", "yellow"];

var result = colours.find(function (colour) {
  return colour === "pink";
});

console.log(result);
// "pink"

//This is the same as the example above, using a for loop:

var colours = ["red", "pink", "yellow"];
var result;

for (var i = 0; i < colours.length; i++) {
  var colour = colours[i];
  if (colour === "pink") {
    result = colour;
    break;
  }
}

console.log(result);

//Array.sort()

var colours = ["red", "pink", "yellow"];

var result = colours.sort();

console.log(result);

// ["pink", "red", "yellow"]

//When sorting numbers, this will create unexpected results:

var numbers = [1, 2, 3, 4, 10];

var result = numbers.sort();

console.log(result);

// [1, 10, 2, 3, 4]

/* This is clearly not the correct order, so in order to sort these values correctly we must be a bit more specific about the outcome we desire: */

var numbers = [1, 2, 3, 4, 10];

var result = numbers.sort(function (numberA, numberB) {
  return numberA < numberB;
});

console.log(result);
// [1, 2, 3, 4, 10]

//This is the same as the example above, using a for loop:

var numbers = [1, 2, 3, 4, 10];

for (var i = 1; i < numbers.length; i++) {
  for (var j = 0; j < i; j++) {
    if (numbers[i] < numbers[j]) {
      var x = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = x;
    }
  }
}

console.log(numbers);
// [1, 2, 3, 4, 10]

/* Programming Foundations - Module 2
Lesson Task 2 Questions */

/* Question 1
Console log the 3rd item in this array. */

var winningNumbers = [1, 76, 2, 78, 16, 7];

console.log(winningNumbers[2]);

//or 

var thirdItem = winningNumbers[2];
console.log(thirdItem);

/* Question 2
Add a new item to this array using the push method and console log the new amount of items. */

var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];

var addItem = vegetables.push("tomat");

console.log(vegetables);

console.log("lenght: ", vegetables.length);

/* Question 3
Console log each item in this array using a for loop.

var randomThings = ["pumpkin", false, 23, true, "tomato"]; */

var randomThings = ["pumpkin", false, 23, true, "tomato"]

for (var i = 0; i < randomThings.length; i++) {
    console.log(randomThings[i]);
  }

  //or

  var itemCount = randomThings.length;

  for (var i = 0; i < itemCount; i++) {
      var item = randomThings[i];
      console.log(item);
  }  

/* Question 4
Loop through this array but only log the item if it is a number value.

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19]; */

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (var i = 0; i < moreThings.length; i++) {
    if (typeof moreThings[i] === "number") {
        console.log(moreThings[i]);
    }
}

//or

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];

for (var i = 0; i < moreThings.length; i++) {

    // use the typeof operator to determine the value type
    var typeOfItem = typeof moreThings[i];
    // or 
    // var typeOfItem = typeof(moreThings[i]);

    if (typeOfItem === "number") {
        console.log(moreThings[i]);
    }

}

/* Question 5
Order this array alphabetically and then loop through it and log each item.

var ingredients = ["water", "flour", "toothpaste", "fish lips"]; */

var ingredients = ["water", "flour", "toothpaste", "fish lips"];

var sortedIngredients = ingredients.sort();

for (var i = 0; i < sortedIngredients.length; i++) {
    console.log(sortedIngredients[i]);
}

/* Question 6
Loop through this array and log every second item.

var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"]; */

var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (var i = 1; i < characters.length; i = i + 2) {
    var everySecondItem = characters[i];
    console.log(everySecondItem);
}

//or 

for (var i = 1; i < characters.length; i += 2) {
    console.log(characters[i]);
  }

  var characters = ["Gob", "Michael", "George Michael", "Lindsay", "Buster", "Maeby", "Tobias", "Lucille"];

for (var i = 0; i < characters.length; i++) {

    // use the % operator to get the remainder of i divided by 2
    // because we start at 0, every second number will have a remainder of 1

    if (i % 2 === 1) {
        console.log(characters[i]);
    }
}

/* Programming Foundations - Module 2
Lesson Task 3 Questions*/
//Question 1
//Console log the price property from the object below:

var product = {
	name: "Chicken feet",
	price: 149.99,
};

console.log(product.price);

//or

var productPrice = product.price;
console.log(product.price);

/* Question 2
Loop through the array below and console log each colour property.*/

var animals = [
	{
		type: "cat",
		colour: "black",
	},
	{
		type: "elephant",
		colour: "grey",
	},
	{
		type: "dog",
		colour: "brown",
	},
	{
		type: "zebra",
		colour: "black and white",
	},
]; 

for (var i = 0; i < animals.length; i++) {
    var animal = animals[i];
    var aninimalsColour = animal.colour;
    console.log(aninimalsColour);
    
}

//or
for (var i = 0; i < animals.length; i++) {
    console.log(animals[i].colour);
}

// or

// assign the length of the array to a variable and then use the variable in the for loop
var animalCount = animals.length;

for (var i = 0; i < animalCount; i++) {
    // assign the property to a variable before logging it
    var animalColour = animals[i].colour;
    console.log(animalColour);
}

/* Question 3
Loop through the array below and console log each name property only if it is on special.*/

var dinnerOptions = [
	{ name: "Fish and Dips", price: 11.95, onSpecial: true },
	{ name: "Bacon and Frogs", price: 12.99, onSpecial: false },
	{ name: "Mince Flies", price: 19.0, onSpecial: true },
];

for (var i = 0; i < dinnerOptions.length; i++) {
    special = dinnerOptions[i];
    if (special.onSpecial) {
        console.log(special.name);
    }
}
/* Question 4
Loop through the array below and log each person's name and surname if they are between the ages of 20 and 50 (including 20 and 50):*/

var people = [
	{
		firstName: "Burt",
		lastName: "Smacharach",
		age: 35,
	},
	{
		firstName: "Elvis",
		lastName: "Deadly",
		age: 55,
	},
	{
		firstName: "Susan",
		lastName: "Sarongson",
		age: 42,
	},
	{
		firstName: "Big",
		lastName: "Gabe",
		age: 20,
	},
];

for (let i = 0; i < people.length; i++) {
    
    var person = people[i];
    
    if ((person.age >=20) && (person.age <= 50)) {
        
        console.log(person.firstName + " " + person.lastName);
    }
}

/* Question 5
Select the ul element in the HTML file, loop through the array below and create a li element containing the product name and price properties.

var products = [
	{
		name: "Elephant eggs",
		price: 45.0,
	},
	{
		name: "Bucket of water",
		price: 459.99,
	},
	{
		name: "4 cabbages",
		price: 500.95,
	},
];
Your final HTML should look like this:

<ul>
	<li>Elephant eggs - 45.00</li>
	<li>Bucket of water - 459.99</li>
	<li>4 cabbages - 500.95</li>
</ul> */


var products = [
	{
		name: "Elephant eggs",
		price: 45.0,
	},
	{
		name: "Bucket of water",
		price: 459.99,
	},
	{
		name: "4 cabbages",
		price: 500.95,
	},
];

var ul = document.querySelector("ul");

for (var i = 0; i < products.length; i++) {
    
    var product = products[i];

    var li = document.createElement("li");

    li.textContent = product.name + " " + product.price;
    
    ul.appendChild(li);

}

// Question 5
var products = [
    {
        name: "Elephant eggs",
        price: 45.0,
    },
    {
        name: "Bucket of water",
        price: 459.99,
    },
    {
        name: "4 cabbages",
        price: 500.95,
    },
];

// select the ul element
var productContainer = document.querySelector("ul");

for (var i = 0; i < products.length; i++) {
    productContainer.innerHTML += "<li>" + products[i].name + " - " + products[i].price + "</li>";
}


// or
// (this second example will cause the new li items to be double)
for (var i = 0; i < products.length; i++) {
    var details = products[i].name + " - " + products[i].price;
    productContainer.innerHTML = productContainer.innerHTML + "<li>" + details + "</li>";
}

/* Our first function */

var heading = document.querySelector("h3");
var button = document.querySelector("button");
var buttonColours = document.querySelector(".colours");
var changeColours = document.querySelector("body");

// console.dir(button);

function changeHeading() {
    heading.innerHTML = "updated heading";
}

button.onclick = changeHeading;

function changeColors() {
    body.style.backgroundColor = "orange";
    heading.style.color = "green";
}

buttonColours.onclick = changeColors;


/* Programming Foundations - Module 2
Lesson Task 4 Questions */

//Question 1
//Declare and call a function that logs the string "What the func is this nonsense?"

function logWorg() {
    console.log("What the func is this nonsense?");
}

logWorg();

/* Question 2
Create and call a function with two arguments, firstName and lastName.

The function should log both the argument values with a space between them. */

function fullName(firstName, lastName) {
    console.log(`${firstName} ${lastName}`);
}
fullName("firstName", "lastName");

/* Question 3
Create a function with two arguments, firstNumber and secondNumber.

Inside the function, check the type of the arguments.

If they are numbers, multiply them and return the result.

If either of them are not numbers return the message: "Please supply number values".

Call the function, assign the return value to a variable called result and log the variable. */

function twoArguments(firstNumber, secondNumber) {
    if (typeof firstNumber === "number" && typeof secondNumber === "number") {
        return firstName * secondNumber;
    } else {
        return "Please supply number values"
    }
}

var result = twoArguments(6, 7);
console.log(result);

/* Question 4
Create a function with three arguments.

Try and convert each argument to a number.

If any of the arguments cannot be converted to a number, return the message: "Invalid argument types".

If all arguments are numbers or can be converted to numbers, add them all and return the result.

Select the p element on the page and assign the result of the function call to be its innerHTML value. */


console.log()