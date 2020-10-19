//! Overall great work! There was a few areas of improvement I made note of them in the feedback below
var game = {
    win: 0,
    loss: 0, 
};

var choices = ["rock", "paper", "scissors"];

var random1 = Math.floor(Math.random() * 3); 

var random2 = Math.floor(Math.random() * 3); 

console.log(random1);

console.log(random2);

var bot1 = choices[random1];

var bot2 = choices[random2];

//! There was a problem w/ unnecessary else stmts and misuse of a comparison operator, === vs = Additionally I added an example that increments game.win or game.loss by 1 each time. 
if(bot1 === "rock" && bot2 === "scissors") {
    // game.win === 1; //? Remember that === is equality comparison that results in a boolean. = is assignment, in this case we want to use assignment like this: game.win = 1;
    game.win++; //? Add one to whatever the previous value of win was. In our case game.win was 0, so it is now 1, ya know pending this code block is executed. 
} else if(bot1 === "rock" && bot2 ==="paper") {
    // game.loss === 1; //? Same here we would want game.loss = 1; 
    game.loss++;
} // else {
//     ;
// } //? You have an empty else statement here. If you don't need to run any code in the block of the else statement you can simply exclude it. I went ahead and commented them all out

if(bot1 === "paper" && bot2 === "scissors") {
    // game.loss= 1;
    game.loss++;
} else if(bot1 === "paper" && bot2 === "rock") {
    // game.win = 1;
    game.win++;
} // else {
//     ;
// }


if(bot1 === "scissors" && bot2 === "rock") {
    // game.loss = 1;
    game.loss++;
} else if(bot1 === "scissors" && bot2 === "paper") {
    // game.win = 1;
    game.win++;
} // else {
//     ;
// }

var results = "";

if(game.win > 0) {
    // results += bot1, results += "beats", results += bot2; //? Few notes, your missing the spaces, also this format works, actually didn't know if it would so you've taught me something! However this is typically how I would keep it all on one line
    results += bot1 + ' beats ' + bot2;
} else if(game.loss > 0) {
    // results += bot2, results += "beats", results += bot1;
    results += bot2 + ' beats ' + bot1;
} else {
    results += "Tie Game";
}

console.log(results);