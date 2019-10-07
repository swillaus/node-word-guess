var Letter = require('./letter');

function Word(val){
    this.letters = [];
    this.wordGuessed = false;

    for(var i = 0; i < val.length; i++){
        var newletter = new Letter(val[i])
        this.letters.push(newletter)
    }

    this.toString = function(){
        var newString = [];
        for(var i = 0; i < this.letters.length; i++){
            newString.push(this.letters[i].value())
        }
        console.log(newString.join(" "))
    }
    this.guessLetter = function(guess){
        for(var i = 0; i < this.letters.length; i++){
            this.letters[i].guessLetter(guess)
        }
    }
    this.isComplete = function(){
        for(var i = 0; i < this.letters.length; i++){
            if(!this.letters[i].isGuessed){
                return false
            }
        }
        return true;
    }
 };

module.exports = Word;