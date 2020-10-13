//!  Overall great job! Not a lot of feedback on this one as it is pretty straight forward. Formatting looks good, I think it seems like you have a good grasp conceptually of all the topics we covered on the first day, let me know if there is anything that you find confusing. So far so good keep up the good work!

console.log('Hello World!');

console.warn('This is a warning!');

console.error('Error! System critical!');

var var1;

var1 = 'Marquita';

console.log(var1);

console.log('\n'); //! nice job look below for an alternative way to do the same thing, I prefer the way you accomplished it with \n
// console.log('');

var2 = 7;

console.log(var1 + var2); //Marquita7 //! Correct, good job

/* String = Strings are literal text
Number = Numbers, in the console, are blue and should be written without quotes
Boolean = True or False
Undefined/Null/NaN = "Undefined" means a variable has been declared, but not assigned, "Null" is the absence of a value, and "NaN" stands for "Not a Number" //! Nice definitions!! 
Object = Objects are variables, but can contain many values
Typeof = Finds the type of a variable //! Just to reiterate null and NaN are NOT data types, I'm glad you included them in this list w/ definitions though!
 */

typeof 'Marquita'; //String //! Though that is correct, this was supposed to console.logged. Also since you've already stored the string "Marquita" in the variable var1 lets just use that instead of writing out the string again.
console.log(typeof var1); // returns string

var var3 = 'text';

console.log(var3);

var3 = true;

console.log(var3);

var1 = 5;

var2 = '5';

var2 = parseInt('5');

console.log(var2 + var1);

/**
 * We can actually solve this problem in just one line like this.
 *      console.log(var1 + parseInt(var2));
 * In general as long as we aren't sacrificing readability less code is always better. However something else to critical to understand
 * if the solution provides the desired result its good, just adding some considerations for revisions.
 */
