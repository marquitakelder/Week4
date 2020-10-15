//! Everything looks great! I added in a few different ways to accomplish the same things just for perspective. Formatting and everything else looks great, only feedback I have is on the number of prompts, it seems to be you where just testing how things work which is absolutely fine, however if there is any confusion please let me know and I'd be happy to clear it up. Great work so far keep up the good work! Pull request also looked good

// window.prompt("Enter a number"); //! I see you are experimenting w/ the window object, very good! I'm just commenting this out because we don't need 2 prompts. Same deal w/ the other below

var num1 = prompt("Enter a number");

// window.prompt("Enter another number");

var num2 = prompt("Enter another number");

// window.alert(Math.pow(num1, num2)); //! Just demoing another way to do the same thing below
alert(num1 ** num2);

// var num3 = Math.pow(num1, num2);

// console.log(num3);

console.log(Math.floor(Math.random() * 3) + 1); //! Nice work!

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];

alphabet.pop('f');

//! Color me impressed doing all of this w/ just splice! Below I showed some other methods that accomplish the same thing!
// alphabet.splice(5, 0, 'g');
alphabet.push('g');

// alphabet.splice(0, 1);
alphabet.shift();

// alphabet.splice(0, 0, 1);
alphabet.unshift(1)

console.log(alphabet);

alphabet.splice(2, 3, ["cat", "dog", "rabbit"]); //! Perfect!

console.log(alphabet);

var copied = alphabet.slice(0, 3);

console.log(copied);

console.log(copied[2][1]);