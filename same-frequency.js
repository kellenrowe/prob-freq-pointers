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

  let intFreqCount1 = createFreqCounter(stringInt1);
  let intFreqCount2 = createFreqCounter(stringInt2);

  for (let key in intFreqCount1) {
    console.log('value at int2FreqCount: ', intFreqCount2[key]);
    if (!(key in intFreqCount2)) {
      console.log('returning at key/value check')
      return false;
    } else if (intFreqCount2[key] !== intFreqCount1[key]) {
      console.log('returning at value check')
      return false;
    }
  }
  return true;
}
