import {sectionLog} from '../utils.js';


sectionLog('Dynamic Typization', {
  'Implicit Conversion (5 + "5")': typeof (5 + '5'),
  'Implicit Conversion (5 - "5")': typeof (5 - '5'),
  'Explicit Conversion (Number("5"))': typeof Number('5'),
  'Explicit Conversion (String(5))': typeof String(5),
  'Boolean Conversion (!!\'\')': !!'',
  'Boolean Conversion (!!\'hello\')': !!'hello',
  'Double Equals (5 == "5")': 5 == '5',
  'Triple Equals (5 === "5")': 5 === '5'
});


