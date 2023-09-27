import {sectionHeader} from '../utils.js';

/*
 * JavaScript Patterns Lesson
 * File: patterns.js
 */

// 1. Pyramid Pattern Creation
sectionHeader('1. Pyramid Pattern Creation');

const pyramidHeight = 5;
let pyramid = '';
for (let l = 0; l <= pyramidHeight; l++) {
  for (let space = 0; space < pyramidHeight - l; space++) {
    pyramid += ' ';
  }
  for (let star = 0; star < 2 * l + 1; star++) {
    pyramid += '*';
  }
  pyramid += '\n';
}
console.log(pyramid);
