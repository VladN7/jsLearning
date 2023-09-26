/*
 * JavaScript Object Destructurization Lesson
 * File: objectDestructurization.js
 * Description: A comprehensive guide to understanding object destructurization in JavaScript.
 */

// Helper function to display section headers
function sectionHeader(title) {
  console.log(`\n===== ${title} =====`);
}

// Object Destructurization Lesson
sectionHeader('Object Destructurization Lesson');
const options = {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    bg: 'red'
  },
  makeTest: function() {
    const {border, bg} = options.colors;
    console.log('The border color is ' + border);
    console.log('The background color is ' + bg);
  }
};

// Run the makeTest method
sectionHeader('Run the makeTest Method');
options.makeTest();

// Object Properties Enumeration
sectionHeader('Object Properties Enumeration');
for (let key in options) {
  if (typeof (options[key]) === 'object') {
    for (let i in options[key]) {
      console.log(`Property ${i} has value ${options[key][i]}`);
    }
  } else {
    console.log(`Property ${key} has value ${options[key]}`);
  }
}

// Count of Object Keys
sectionHeader('Count of Object Keys');
console.log(Object.keys(options).length);
