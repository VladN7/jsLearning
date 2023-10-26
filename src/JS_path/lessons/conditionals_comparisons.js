import {sectionLog} from '../utils.js';

/*
 * JavaScript Conditionals & Comparisons Lesson
 * File: conditionals_comparisons.js
 */

sectionLog('Basic Comparisons', {
  '2 + 2 * 2 != 8': 2 + 2 * 2 != 8,
  '2 + 2 * 2 == 8': 2 + 2 * 2 == 8,
  '2 + 2 * 2 === \'6\'': 2 + 2 * 2 === '6'
});

sectionLog('Type Coercion in Comparisons', {
  '50 !== 250': 50 !== 250,
  '50 === \'50\'': 50 === '50',
  '50 == \'50\'': 50 == '50'
});
