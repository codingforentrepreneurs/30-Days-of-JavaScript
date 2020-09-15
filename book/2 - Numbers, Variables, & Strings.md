# Day 2 - Numbers, Variables, & Strings

Computers are great at doing math... or, ahem, computation. So that's where we'll start.

> ~Fun~ Nerd fact: computers was originally a term for a human computer or "one who computes" performing mathematical calculations prior to electronic computers ever existing.  Katherine Johnson, a famous mathematician, who did difficult math problems on paper to help safely launch John Glenn into orbit during the space race. Katherine is probably now the most famous human computer ever that's to the fantastic movie (and book) called *Hidden Figures*. 

## 0. Optional Package configuration
For each chapter, I'll be creating a brand new package -- this is to make each chapter's code as self-contained as possible. You do not have to do this.

A quick reminder on how this is done:

```shell
% cd local/path/to/30daysofjs
% mkdir "Day 2"
% cd "Day 2"
% npm init # accept the defaults
% ls
package.json
```

## 1. Numbers
Create a new file called `someMath.js` and enter in the following:

```javascript
console.log(4 + 1)
```
Save that file, open up terminal (either in VSCode or on your system) and run:

```shell
node someMath
```
What do you see? It's my hope that the result did not surprise you in the least bit. So let's try some multiplication:

Now add in:
```javascript
console.log(500 x 12)
```
You should see `SyntaxError: missing ) after argument list`. This is because we used the letter `x` instead of the correct operator for multiplying in JavaScript (and many other languages as well).

Let's fix that:

```javascript
console.log(500 * 12)
```
Now, after running `node someMath` again, the result should read:
```shell
5
6000
```

Here's the reference for performing some math:

### Adding (`+`)
```javascript
5 + 10
```

### Subtracting (`-`)
```javascript
9 - 3
```

### Multiplying (`*`)
```javascript
3 * 10
```

### Dividing (`/`)
```javascript
5 / 10
```

### Order of Operations

```javascript
5 - (5 * -2)
```

### Exponents (x `**` n)
```javascript
5 ** 2
```

### Root (x `**` (1/n))
```javascript
25 ** (1/2)
```

Neat huh? 

There's also a few built-in features to JavaScript for math.

### Modulo (x `%` y)
Modulo `%` is  a remainder operator which means it finds the left over bits of a division.

```javascript
5 % 4
```
4 goes into 5 1 time with 1 leftover.

or 

```javascript
11 % 3
```
3 goes into 11, 3 times with 2 left over.

```javascript
100 % 100
```
5 goes into 100 20 times with 0 left over.

```javascript
98 % 99
```
98 goes into 99 0 times with 98 left over.

Modulo gives us the remainder from dividing two numbers. 

### `Math.ceil` 
This rounds up decimal number to the nearest whole number.
```javascript
console.log(Math.ceil(12.12312))
```

### `Math.floor` 
This rounds down a decimal number to the nearest whole number.
```javascript
console.log(Math.floor(23.99))
```

Here's my final code for `someMath.js`:

```javascript
console.log(4 + 1)

console.log(500 * 12)

console.log("Adding", 5 + 10)

console.log("Subtracting", 9 - 3)

console.log("Multiplying", 3 * 30)

console.log("Dividing", 5 / 10)

console.log("Order of Operations", 5 - (5 * -2))

console.log("Exponents", 5 ** 2)

console.log("Root", 25.0 ** (1/2))

console.log("Modulo", (5 % 4))

console.log("Modulo", (11 % 3))

console.log("Modulo", (100 % 5))

console.log("Modulo", (98 % 99))

console.log("Math.ceil", Math.ceil(12.12312))

console.log("Math.floor", Math.floor(23.99))

```

> Notice that `Math` just works. That's because it's built into JavaScript much like `*` is built-in to JavaScript for multiplying. We'll look at built-ins a lot more going forward but the ones above are pretty common.


## 2. Variables

Variables allow us to move values around much more easily; this makes doing our math problems that much easier as well.

There's 3 ways to create a variable in JavaScript; we call it `declare` a variable:

- `const`
- `let`
- `var`

Each one of these has their own benefit but we'll stick with the longest known convention to date for now: `var`.

You simply write `var` then some string of characters like `var myDog` or `var notAHotDog` or `var arentYouGladThisIsntLinearAlegebra`

So let's see a more practical example. Create a new file called `someVars.js` and add the following:

```javascript
var productPrice = 29.99
var taxRate = 0.25
var shippingRate = 2.99
var total = (productPrice * taxRate) + shippingRate
console.log(total)
```

Run this with:
```shell
node someVars
```

What did you get? I got `10.4875`. If we were using dollars, we'd probably want to adjust our total:

```javascript
var totalRounded = Math.ceil(total)
```
Hang on, that rounds up to `11`. Remember how I said `Math.ceil` round up to the nearest whole number?

`Math.round` will round to the nearest whole number (in general) so we can multiply our decimal number by 100, run `Math.round` on it, and then divide by 100 to get our desired 2 digit decimal places.
```javascript
var totalRounded = Math.round(total * 100) / 100
```
> As you can see, the doing math in JavaScript can get a bit wonky from time to time because of the nature of multiplying decimal numbers and what our intuition might want the answer to be (ie I'm calculating costs in dollars so I should only get 2 decimal places back right??)


The purpose of this section was not to solve all the math challenges you might face dealing with JavaScript apps but rather introduce to a powerful feature of programming: variables.

Variables make it easy to temporarily store data and move that data around to do other things with. Variables can be nearly any data type such as:

- Strings
- Arrays
- Dictionaries
- Functions
- JavaScript Objects

So how about that `let` and `const` I mentioned above? 

In many programming languages, including JavaScript, you can change the value of any given variable. For example:

```javascript
var x = 10
x = 32
x = 1
console.log(x)
```
What is the value of `x`?  Hopefully you answered `32`... kidding `1` is the correct answer.

`let` is almost identical to `var` being that it can be re-assigned

```javascript
let y = 10
y  = 32
y  = 1
console.log( y )
```

`const` is cannot be reassigned. Once it has a value, that's the value.

```javascript
const z = 323
z = 99
console.log(z)
```
In this, `z` runs the error `TypeError: Assignment to constant variable.` - this means that this operation simply cannot be done.  Let's modify it for our code:

```javascript
const z = 323
// z = 99
console.log(z)
```
> Do you see the `//` before `z = 99` this is how you turn any line of code into a comment. just add `//` before the code and it will not be run.


`const` cannot be reassigned but it can be re-used. This becomes more clear as we learn more about JavaScript but go ahead and copy and paste the following code:

```javascript
const xyz = 10
console.log('const xyz', xyz)
function myFunc() {
    const xyz = 3
    console.log('const xyz', xyz ** 2)
}
myFunc()
```

As you see, `const xyz` is declared twice (once within a function) but it's never actually reassigned a value. 


## 3. Strings

Let's create a new file called `someStrings.js`

Coming soon...