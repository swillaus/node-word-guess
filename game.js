var Word = require('./word');
var rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function Game(word) {
    this.word = new Word(word);
    this.guesses = 10;
    this.activeGame = true;

    this.guessLetter = function (guess) {
        this.word.guessLetter(guess)
        this.word.toString()
        this.guess--
        if (this.word.isComplete() || this.guess === 0) {
            console.log("Here")
            this.activeGame = false;
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
}

var myGame = new Game('kazoo');
myGame.start()
