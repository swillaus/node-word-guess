var Word = require('./word');
var rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function Game(word){
    this.word = new Word(word);
    this.guesses = 10;
    this.activeGame = true;

    this.guessLetter = function(guess){
        this.word.guessLetter(guess)
        this.guess--
        if(this.Word.isComplete() || this.guess === 0){
            this.activeGame = false;
        }
    }

    this.start = function(){
        while(this.activeGame = true){
            rl.question("Guess a letter: ", function(guess){
                this.guessLetter(guess);
                rl.close()
            })
        }
    }
}

var myGame = new Game('kazoo');
myGame.start()

