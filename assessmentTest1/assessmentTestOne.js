



// Level 1

//Exercise 1.1
/* Create examples of all the primitive values in JS as a variable */

let n = 42; // number
let word = 'hello'; // string
let alright = true; // boolean
let dontKnow = undefined; // undefined
let zero = null; // null 
let bigNumber = 900832131224232581n; //bigInt
let weird = Symbol(); // symbol 




// Exercise 1.2
/* Provide a short explanation of truthy and falsy-ness
- and list the falsy values in JS */

/* The explanation:
The shortest explanation I can provide is the following:
Everything that is not defined as falsy in a Boolean context, are truthy. 
Truthy values evaluate to the boleean value of true: the value might not
itself be equal to true, but the value is coerced to true when evaluated
in a boolean context. */


/* The falsy values in JS:
false
0       (or +0)
-0
0n      (BigInt)
''          -empty string
null
undefined
NaN         */







// Exercise 1.3
/* Function is not working quite right - figure it out.

The example provided: 

function getSecondWord(stringOfWords) {
    var words = stringOfWords.split(' ');
    return words[2];
  }
  
  getSecondWord('hello my good friend');         */

/*  The explanation:
  We were simply returning the word at the wrong index (split returns the words as elements in an array).
  JS arrays are zero-indexed, meaning the first element of an array
  is at index 0. Therefore, the second word (or second element in the array words),
  is access at index 1.  
 */


// The working solution: 

function getSecondWord(stringOfWords) {
    let words = stringOfWords.split(' ');
    return words[1];
}

getSecondWord('hello my good friend'); // will log 'my' if logged to the console







// Exercise 1.4 
/* Program is not working quite right - figure it out.

The example provided: 

function addNumbers() {
  var a = prompt('First number');
  var b = prompt('Second number');
  var result = a + b;
  console.log(result);
}

addNumbers();       */


/* The explanation:
Our variable result "worked", because we had told it to add
the strings a and b, and it did; but it added them as strings.
We wanted the piece of code to add a and b as numbers, and therefore
we could either convert the typeof a and b to an integer like I've done
below, or we could put prompt('string') inside of parseInt() for example.
Optionally; one could have just put a '+' before a and b in line 92 above,
and that would also turn the strings a and b, to numbers. */


// The working solution:

function addNumbers() {
    let a = prompt('First number');
    let aAsNumber = parseInt(a);
    let b = prompt('Second number');
    let bAsNumber = parseInt(b);
    let result = aAsNumber + bAsNumber;
    console.log(result);
}

addNumbers();







// Exercise 1.5 
/* Create a program / function that does the following:
Asks the user what their favorite word is
Asks the user how many times they want to repeat it
Output the result to the user */

function userRepeatWord() {

    let str = prompt('What is your favorite word?');
    let n = parseInt(prompt('How many times do you want me to repeat it?'));

    let newStr = '';
    for (let i = 0; i < n; i++) {
        if (i === n - 1) {
            newStr += str + '!';
        } else {
            newStr += str + ', ';
        }
    }

    alert(newStr);
}

userRepeatWord();






// Exercise 1.6
/* Create a function printRange(n, m) that prints the range of 
numbers from n to m repeatedly as many times as the length 
of the range being provided. */

function printRange(n, m) {

    let list = [];
    for (let i = n; i <= m; i++) {
        list.push(i);
    }

    // list.length gives us the length of the range 

    for (let i = 1; i <= list.length; i++) {

        for (let j = n; j <= m; j++) {
            console.log(j);
        }
    }


}

printRange(1, 3);






// Exercise 1.7
/* Create a function extendString(str) that based on the length 
of the input string str extends it using the following rules:
-When the length is less than 5 it gives you the same string back
-When the length is 5 or more, but less than 10 it adds '!!!!' 
to the string
-When the length is 10 or more it adds '????' to the string */



function extendString(str) {


    if (str.length >= 10) {
        return str + '????';
    } else if (str.length >= 5 && str.length < 10) {
        return str + '!!!!';
    } else if (str.length < 5) {
        return str;
    }

}

let output = extendString('hellohell');
console.log(output);







// Exercise 1.8
/* Create a function padString(str, pad, len) that returns 
the input string str padded len times with the padding pad. */


function padString(str, pad, len) {

    let newStr = '';
    if (len === 0 || typeof len !== 'number') {
        return str;
    } else {
        for (let i = 0; i < len; i++) {
            newStr += pad;
        }
        return newStr + str;
    }


}

let paddedString = padString('Cars, guitars and flames', 'A', 2);
console.log(paddedString);







// Exercise 1.9 
/* What is the difference between == and === in JavaScript? 
Provide a short explanation. */

/* The explanation:
The shortest explanation I can provide is the following:
The == operator is a comparison operator that converts the types
on each sides to see if it can get a match before it compares values.
The === is a strict equality operator, meaning it compares both the
type and the data types of the operands (elements on each side). */



// Exercise 1.10 - See HTML file called 'assessmentTestOne.html'



//Level 2



// Exercise 2.1 
/* Create the following abstraction of a counter as a class:
-The constructor takes a min and max value that the counter 
cannot exceed
-The counter is initialized with the min value
-(bonus) The min and max value can be provided in any order
 (the lowest will be treated as min and highest treated as max) */


 class Counter {

    constructor(min, max) {
        if (min > max) {
            this.min = max;
        } else {
            this.min = min;
        }

        if (max < min) {
            this.max = min;
        } else {
            this.max = max;
        }

        this.count = this.min;
    }

    getValue() {
        return this.count;
    }

    increment() {
    
        if (this.count < this.max) {
            this.count++
        } else {
            console.log('Cannot increment above max');
        }
    }

    decrement() {

        if (this.count > this.min) {
            this.count--
        } else {
            console.log('Cannot decrement below min');
        }
    }

}

let counter = new Counter(2, 4);
console.log(counter.getValue());
counter.increment();
counter.increment();
console.log(counter.getValue());
counter.increment();
console.log(counter.getValue());
counter.decrement();
counter.decrement();
counter.decrement();
console.log(counter.getValue());

let differentCounter = new Counter(1, 3);
console.log(differentCounter.getValue());
differentCounter.increment();
differentCounter.increment();
console.log(differentCounter.getValue());
differentCounter.increment();
console.log(differentCounter.getValue());





// Exercise 2.2
/* Create the same abstraction of a counter as a factory 
function (closures): */

function createCounter(min, max) {

    let maximum = max;
    let minimum = min;
    let count = min;

    if (min > max) {
        maximum = min;
        minimum = max;
        count = max;
    }

    return {
        increment: function () {
            if (count < maximum) {
                count++;
            } else {
                console.log('Cannot increment above max');
            }
        },
        decrement: function () {
            if (count > minimum) {
                count--;
            } else {
                console.log('Cannot decrement below minimum');
            }
        },
        getValue: function () {
            return count;
        }
    }
}

let otherCounter = createCounter(2, 4);
otherCounter.decrement();
console.log(otherCounter.getValue());
otherCounter.increment();
otherCounter.increment();
console.log(otherCounter.getValue());
otherCounter.decrement();
otherCounter.decrement();
otherCounter.decrement();
console.log(otherCounter.getValue());

let anotherCounter = createCounter(1, 3);
console.log(anotherCounter.getValue());
anotherCounter.decrement();
console.log(anotherCounter.getValue());
anotherCounter.increment();
anotherCounter.increment();
console.log(anotherCounter.getValue());
anotherCounter.increment();
console.log(anotherCounter.getValue());
anotherCounter.decrement();
anotherCounter.decrement();
console.log(anotherCounter.getValue());
anotherCounter.decrement();





// Exercise 2.3 
/* Given the following data:    */

const families = [
    {
        father: 'John',
        mother: 'Mary',
        children: ['Frank']
    },
    {
        father: 'Mark',
        mother: 'Linda',
        children: ['Billy', 'Nina']
    },
    {
        father: 'Chris',
        mother: 'Lisa',
        children: ['Dolly', 'Richard', 'Eva']
    }
];


// Find the names of all the mothers

let motherArr = families.map(function (family) {
    return family.mother;
});
console.log(motherArr);  // logs: ['Mary', 'Linda', 'Lisa']


// Find the names of all the couples in the following format

let parents = families.map(function (family) {
    return family.father + ' and ' + family.mother;
});
console.log(parents); // logs: ['John and Mary', 'Mark and Linda', 'Chris and Lisa']


// Find the names of all the children

let childrenArr = families.map(function (family) {
    return family.children;
});


let children = childrenArr.reduce(function (acc, curr) {
    return acc.concat(curr);
}, []);

console.log(children); // logs: ['Frank', 'Billy', 'Nina', 'Dolly', 'Richard', 'Eva']


// Find all the children from families with more than 2 children and uppercase them

let childrenUpperCase = families
.map(function (family) {
    return family.children;
})
.filter(function (childrens) {
    if (childrens.length > 2 ) {
        return childrens;
    }
})
.reduce(function (acc, curr) {
    return acc.concat(curr);
})
.map(function (child) {
    return child.toUpperCase();
})
console.log(childrenUpperCase); // logs: ['DOLLY', 'RICHARD', 'EVA']







// Exercise 2.4 
/* Create a function getPropertyPairs(o) that returns the property 
and value pairs of an object o as an array of arrays. */


let obj = {
    a: 10,
    b: 20,
    c: 30
}

function getPropertyPairs(o) {

    return Object.entries(o);
}

console.log(getPropertyPairs(obj));





// Exercise 2.5 
/*We are trying to get the life story of a person, 
but for some reason it's not working as expected - 
can you spot the error(s)? Explain why the current solution
 does not work, and provide a working solution. */

/* The example provided: 


 var person = {
    name: "Rick",
    occupation: "crazy scientist",
    hobby: "make a mess",
    getLifeStory: function () {
      return name + " is a " + occupation + " and likes to " + hobby;
    }
  };
  
  console.log(person.getLifeStory()); */

/* The explanation: 
My explanation, according to my understanding, is as follows:
Within the 'scope' of the property 'hobby' (which performs an action: is a function), 'name', 'occupation' and 'hobby',
cannot be accessed (though they are declared as properties with values in the object). Therfore
they are read as undefined. However, once we add the 'this' keyword, we point to
the object itself. So when we then add person before 'getLifeStory()', this points 
to the person object first, and then finds the different properties of that object;
where it then can access name, occupation and hobby. 

*/


// The solution:

var person = {
    name: "Rick",
    occupation: "crazy scientist",
    hobby: "make a mess",
    getLifeStory: function () {
        return this.name + " is a " + this.occupation + " and likes to " + this.hobby;
    }
};

console.log(person.getLifeStory());






