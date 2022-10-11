"use strict";

let sum = (arr) => arr.reduce((acc, item) => acc + item, 0);
let multiply = (arr) => arr.reduce((a, b) => a * b, 1);
let reverse = (str) => [...str].reverse().join("");
let filterLongWords = (words, i) => words.filter(word => word.length > i);
