"use strict";

/**
 * Write a function called isSubsequence 
 * which takes in two strings and 
 * checks whether the characters in the first string 
 * form a subsequence of the characters in the second string. 
 * In other words, the function should check whether 
 * the characters in the first string 
 * appear somewhere in the second string, 
 * without their order changing. 
 * */


function isSubsequence(string1, string2) {
  let checker1 = 0;
  let checker2 = 0;
  if(string1.length === 0) return true;
  while (checker2 < string2.length) {
    if(string2[checker2] === string1[checker1]) {
      checker1++;
    } 
    if(checker1 === string1.length) {
      return true;
    }
    checker2++;
  }
  return false;
}
