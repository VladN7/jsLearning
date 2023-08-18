/*
 * JavaScript User Interactions Lesson
 * File: user_interactions.js
 */

// Helper function for section headers
function sectionHeader(title) {
  console.log(`\n===== ${title} =====`);
}

// 1. User Confirmations
sectionHeader('1. User Confirmations');
const isPresent = confirm('Are you there?');
console.log(`User present: ${isPresent}`);

// 2. User Input with Prompt
sectionHeader('2. User Input with Prompt');
const ageCheck = +prompt('Are you 18?', '18');
console.log(`User age in 5 years: ${ageCheck + 5}`);

// 3. Sending Alerts to User
sectionHeader('3. Sending Alerts to User');
const user = 'Vlad';
alert(`Hello ${user}!`);
