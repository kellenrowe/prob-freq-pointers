'use strict';

/** accepts two arrays and returns object with keys being the 
 * elements of the first array and values the elements of the second.
 */
function twoArrayObject(keysArr, valsArr) {
  let twoArrayObject = {};
  for (let i = 0; i < keysArr.length; i++) {
      twoArrayObject[keysArr[i]] = (valsArr[i] || null);
  }
  return twoArrayObject;
}    