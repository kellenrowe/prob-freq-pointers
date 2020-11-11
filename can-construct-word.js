'use strict';
/* accepts two strings and returns whether or not the first string
can be formed from the second: with frequency as a contigent. */ 
function canConstructWord(word, letters) {
    if (word.length > letters.length) return false;
    let letterFreq = createFreqCounter(letters);

    for (let letter of word) {
        if (!letterFreq[letter] || letterFreq[letter] === 0) {
            return false;
        } else {
            letterFreq[letter]--;
        }
    }
    return true
}

/* accepts a string and returns a frequency counter */
function createFreqCounter(letterString) {
    let letterFreq = {};
    for (let letter of letterString) {
        if (!letterFreq[letter]) {
            letterFreq[letter] = 1;
        } else {
            letterFreq[letter]++;
        }
    }
    return letterFreq;
}
