var Word = require('./word');
var rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function Game(word) {
    this.word = new Word(word);
    this.activeGame = true;
    var numberofguesses = 10;
    this.guessLetter = function (guess) {
        this.word.guessLetter(guess)
        this.word.toString()
        this.guess--
        
        if (this.word.isComplete()) {
            console.log("Congrats you guessed correctly!!")
            this.activeGame = false;
        } else if (numberofguesses === 0) {
            console.log("Game over!! You have run out of guesses")
            this.activeGame = false;
        } else {
            numberofguesses --
            console.log(numberofguesses)
            console.log("You have used one of your guesses")
        }
    }

    this.firstgame = function () {
        if (firstgame = true) {
            console.log("Welcome to the Word Guess game. You have 10 guesses to try to figure out the mystery word. Start by typing a working on your keyboard")
            firstgame = false
            myGame.start()
        }
    }

    this.start = function () {
        var thisObj = this;
        if (this.activeGame) {
            rl.question("Guess a letter: ", function (guess) {
                thisObj.guessLetter(guess);
                thisObj.start()
            })

        } else {
            rl.close()
        }
    }

    this.replay = function () {
    }

}

var myGame = new Game('kazoo');
myGame.firstgame()
