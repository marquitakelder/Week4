//! Great work! This looked great, not crazy about the formatting, could use a little work on that but overall everything looked good. Added in some additional approaches and quality of life changes below. Check them out let me know if you have any questions.

// var i;

// for (i=0; i <= 100; i++) {
//     // console.log(i);
//     if(i%3 === 0 && i%5 === 0) {
//     console.log("fizzbuzz");
// }   else if(i%3 === 0) {
//     console.log("fizz");
// }   else if(i%5 === 0) {
//     console.log("buzz");
// }   else {
//     console.log(i);
// }
// }

//! This is your code just w/ some small refactors I made notes of all the changes.

for (var i = 0; i <= 100; i++) {
	//? We don't have to initialize a variable i like you did on line 1. We can handle that inside of our for loop as shown above.
	//? Instead of writing out i % 3 === 0 and i % 5 === 0 lets just store them in variables to make it easier on ourselves.
	var fizz = ((i % 3) === 0); //? These both result in booleans and our just a quality of life deal, they are NOT necessary to do this way.
	var buzz = ((i % 5) === 0);
	if (i === 0) {
		continue; //? Before we where logging 0 for fizzbuzz since technically 0/3 & 0/5 both have a remainder of 0. Here to deal w/ this I have an explicit check for 0 and then we use the continue keyword to jump to the next iteration.
	} else if (fizz && buzz) {
		//! Great job! we need to check this one first, if we place it last the if logic will short circuit.
		console.log(i + ' fizzbuzz'); //? Just makes it easier to grade w/ the number and then fizz/buzz/fizzbuzz. This was not part of the instructions
	} else if (fizz) {
		console.log(i + ' fizz');
	} else if (buzz) {
		console.log(i + ' buzz');
	}
	//! We don't really need an else stmt as I don't need to do anything if it isn't divisible by either both 5 & 3, 3 or 5.
}
