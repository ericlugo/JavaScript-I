/* === Challenge 1: ===
- Create a variable named `name`
- Assign it's value to your first and last name 
- Does this variable need to be a constant? It depends completely on you! It should be a const variable IF you intend to never change your name.
*/ // code for `name` goes here
const name = `Eric SarragaLugo`;


/* === Challenge 2: ===
- Create a variable called `age`
- UNLESS you've descovered a very important secret in life, you should  probably allow for `mutability` here.
*/ // code for `age` goes here
let age = 29;


/* === Challenge 3: ===
- Create a variable called `myLocation`
- Base the value on where you're currently sitting. Consider if this is something that could change eventually.
*/ // code for `myLocation` goes here
let myLocation = `Altoona`;

/* === Challenge 4: ===
- Create a variable called `faveBook` 
- Consider if this is some data about yourself that could change.
*/ // code for `faveBook` goes here
let faveBook = `Wizard's First Rule`;

/* === Challenge 5: ===
- Create a variable called `faveBand` 
- Consider if this is some data about yourself that could change.
*/ // code for `faveBand` goes here
let faveBand = `Rend Collective`;

/* === Challenge 6: ===
- Problem create a variable called `faveFood` 
- Consider if this is some data about yourself that could change.
*/ // code for `faveFood` goes here
let faveFood = `Buttermilk Fried Chicken w Cajun-spiced Mac n' Cheese`;

/* === Challenge 7: ===
- Look at the function declaration named `example` below
- Comment `block scope` where you see block scope
- Comment `function scope` where you see function scope
*/ // global scope
function example() {
  //function scope and block scope
  if(true){
    // block scope
    console.log( 
      `Hi! My name is ${name}.\nI'm ${age} years old.\nI live in the sleepy town named ${myLocation}.\nMy favorite book is ${faveBook}.\nMy favorite band is ${faveBand}.\nOh, and my favorite food is ${faveFood}.\nNice to meet you!`
    );
  }
}

// Check your work against some potential solutions when you're finished: https://codepen.io/lambdaschool/pen/ejbEGN?editors=0012

example();