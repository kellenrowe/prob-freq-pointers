"use strict";
// Write a function called sameFrequency. 
// Given two positive integers, 
// find out if the two numbers have the same frequency of digits.

/** Takes in a string and returns 
 * a frequency counter of unique characters
 */
function createFreqCounter(numberString) {
  let freqCounter = {};
  for (let char of numberString) {
    let charCount = freqCounter[char] || 0;
    freqCounter[char] = charCount++;
  }
  return freqCounter;
}

/** Takes in two positive integers,
 * returns Boolean of whether or not they contain the same 
 * characters with the same frequency
*/

function sameFrequency(positiveInt1, positiveInt2) {
  let stringInt1 = positiveInt1.toString();
  let stringInt2 = positiveInt2.toString();
  if (stringInt1.length !== stringInt2.length) return false;

  let int1FreqCount = createFreqCounter(stringInt1);
  let int2FreqCount = createFreqCounter(stringInt2);

  for (let key in int1FreqCount) {
    console.log('value at int2FreqCount: ', int2FreqCount[key]);
    if (!(key in int2FreqCount)) {
      console.log('returning at key/value check')
      return false;
    } else if (int2FreqCount[key] !== int1FreqCount[key]) {
      console.log('returning at value check')
      return false;
    }
  }
  return true;
}
