function Letter(val) {
    this.letter = val
    this.isGuessed = false;
    this.value = function(){
        if(this.isGuessed){
            return this.letter
        }
        return "_ "
    }
    this.guessLetter = function(guess){
        if(guess === this.letter){
            this.isGuessed = true;
        }
    }
}

module.exports = Letter;