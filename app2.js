window.prompt("Enter a number");

var num1 = prompt("Enter a number");

window.prompt("Enter another number");

var num2 = prompt("Enter another number");

window.alert(Math.pow(num1, num2));

var num3 = Math.pow(num1, num2);

console.log(num3);

console.log(Math.floor(Math.random() * 3) + 1); 

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f'];

alphabet.pop('f');

alphabet.splice(5, 0, 'g');

alphabet.splice(0, 1);

alphabet.splice(0, 0, 1);

console.log(alphabet);

alphabet.splice(2, 3, ["cat", "dog", "rabbit"]);

console.log(alphabet);

var copied = alphabet.slice(0, 3);

console.log(copied);

console.log(copied[2][1]);

