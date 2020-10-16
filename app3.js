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

if(bot1 === "rock" && bot2 === "scissors") {
    game.win === 1;
} else if(bot1 === "rock" && bot2 ==="paper") {
    game.loss === 1;
} else {
    ;
}

if(bot1 === "paper" && bot2 === "scissors") {
    game.loss= 1;
} else if(bot1 === "paper" && bot2 === "rock") {
    game.win = 1;
} else {
    ;
}

if(bot1 === "scissors" && bot2 === "rock") {
    game.loss = 1;
} else if(bot1 === "scissors" && bot2 === "paper") {
    game.win = 1;
} else {
    ;
}

var results = "";

if(game.win > 0) {
    results += bot1, results += "beats", results += bot2;
} else if(game.loss > 0) {
    results += bot2, results += "beats", results += bot1;
} else {
    results += "Tie Game";
}

console.log(results);