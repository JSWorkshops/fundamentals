# New shinny in ES6

# Me
* I work for Mozilla
* I'm part of the DOM team
* I work on designing new features for the Web
* Working for Mozilla, get to use ES6 on projects
* I'm going to cover that I've found useful

# Follow along
* DONT EVERYONE START DOWNLOADING!
* If you have Nightly or Chrome Canary, you can follow along
* Remember, for Chrome “Experimental JavaScript Features” in chrome://flags
* open up your console.
* Going to try to keep code really concise.
* I'll let you know on each slide if it works in Chrome or Firefox

## So much awesome
* There is so much awesome, can't possibly cover it all
* Can only scratch the surface.
* This talk is mostly focused on developers building on Browsers.
* You can apply this stuff to Node, of course. But it's not a 1:1.

# Bad news
* Most of the stuff I'm going to show doesn't work cross browser
* I'll display logos for where it works/doesn't
* I also lied. Wont be covering:
	* Modules or classes
  * Will probably be like 2 years before you can use em.

# New syntax and operators

 * `const`, `let`, `for ... of`, and the spread
 * parameter defaults
 * fat arrow
 * rest paramenters
 * destructuring
 * method definitions

====
## Problem


===

## Problem of variable scope

* the problem in ECMAScript is that scope
* You are constantly leaking varibles
* this is great for closures, but it sucks because other code can
	* trash your variables
	* makes things difficult to debug (information overload)

## Variable scoping


var outterVar = "I'm a var!"
let outterLet = "I'm a let!"

(function(){

	//prints "I'm a var!", undefined
	console.log(outterVar, outterLet)

}());

## Variable Scoping advances



(function(){
    //only in this scope
    let x, y, z;

    //to all shared scopes
    var a, b, c;

    function internalFunction(){
        //has access to only a, b, c!
    }

}());


## Block example
* what if you only want to declare a varible in it's own scope?
* ES has you covered - no need for a function
* only works in Firefox

var fruit = "apple",
	juice = "";

let(veg = "carrot"){
    juice = veg + " " + fruit;
}
veg; //error, not defined!


## Using let in a Loop

* for when you loop over multiple arrays
* it's easy to screw up and use the wrong variable
* Wouldn't it be great if we could use `i` always for iterators

var fruits = ["apple", "orange", "banana"];
var meats = ["beef", "bacon", "beef", "bacon"];
var deserts = ["cake", "ice cream"];

for(var i = 0; i < fruits.length; i++ ){
	for(var j = 0; j < meats.length; j++ ){
		for(var k = 0; k < deserts.length; k++ ){
		   console.log(i, j, k)
		}
	}
}


var fruits = ["apple", "orange", "banana"];
var meats = ["beef", "bacon", "beef", "bacon"];
var deserts = ["cake", "ice cream"];

for(let i = 0; i < fruits.length; i++ ){
	var fruit = fruits[i]
	for(let i = 0; i < meats.length; i++ ){
		var meat = meats[i];
		for(let i = 0; i < deserts.length; i++ ){
		   let desert = deserts[i];
		   console.log(fruit, meat, desert)
		}
	}
}


## Let

* let allows you to declare a varible in a block scope

```
function(){
   var adjective = ["pretty", "ugly"]

}

```

===

## Problem: iteration


## for...of
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of





# Problem: destructuring assignment

* sometimes you have to process an object that has more info than you need.






## rest paremeters
[rest paremeters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)


```
function(a, b, ...args) {

}
```

## Problem: working with string


## template strings

* help overcome a bunch of annoyances in Javascript
	* no multi line support - you have to repeat variables over and over
	* string concatination is annoying




## Meet the backtick "`"

* backtick is your new best friend.
* backticks allow you declate a template string

## Fat arrow

Sick of funcktions!

*


## Gotchas?



## Destructuring


## Method definitions

http://ariya.ofilabs.com/2013/03/es6-and-method-definitions.html

```

```

====
# Sets

* sets allow you create collections whose items are guarranteed to be unique.
*

## WeakSet

*

====
# Maps


## WeakMap
* weak reference


=========
# Promises

 🔜

## Use case

"Deferred asynchronous operations"


* "I would like a coffee"
Barista: "sure, comming right up!"

<time passes>

* "Here you go!"

<Barrista problems>

  * "oh crap! we are out of milk!"
  * "oh crap! we are out of coffee!"
  * "oh crap! the machine is not working!"
  * "oh crap! I hate this guy. I simply refuse."

So:

<del>"Deferred asynchronous operations"</del>
<ins>One and done!</ins>

## States
* pending
* fulfilled
* rejected

# One and done!

# One of us!

<img width="300" src="http://www.nairaland.com/attachments/1573355_the-illuminati_jpeg890495712403ec5fef85b53b0a65a1ab">

# Let's make a promise

```
var barista = {
  skills: new Set(['Americano', 'mocha', 'latte']),
  make(type = 'Americano') {
    return new Promise((resolve, reject)=>{
      if (!this.skills.has(type)){
       let msg = `Don't know how to make a ${type}`;
       return reject(msg);
      }
      setTimeout(()=>{
        (Math.round(Math.random())) ?
          resolve(`Here's your ${type}`) :
          reject(`I'n not making YOU a ${type}`);
      }, 1000 * Math.random());
    });
  }
}

barista.make().then(
 (msg) => console.log(msg,"thanks!"),
 (err) => console.log(err, "well! thanks for nothing!")
);



## Ordering for friends

* imagine you had gone to the cafe with your friends
* You want to place and order for 4 coffees
*


## Coping with exceptional circumstances
* What happens if our barista suddenly rage quits?
* I.e., what happens in "exceptional" circustances.
* Normally, we deal with these situations with try catch blocks*
* But promises swallow


## Promise.resolve()

## Promise.reject()

## Promise.all(iterable)



    Language primitives including sets, maps, and iterators
    Generators – what they are, when you might use them
    Promises – escape callback hell
    Classes and modules – restructure how you think about coding JS

## When do you use them?

* Don't go "promising" eveything.
*
"One and done"

