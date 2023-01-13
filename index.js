function palindromeDetect(word){
    let detectionWord = (word.split('').reverse()).join('')
    if(detectionWord == word){
        return true;
    }else{
        return false;
    }
}

module.exports = {palindromeDetect}
