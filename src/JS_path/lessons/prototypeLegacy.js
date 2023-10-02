import {sectionLog} from '../utils.js';

const soldier = {
  health: 400,
  armor: 100,
};
const john = {
  health: 100,
  sayHello: function() {
    console.log('Hello!');
  }
};
const johnPrototype = Object.create(soldier);

john.__proto__ = soldier;

Object.setPrototypeOf(john, soldier);

sectionLog('Object Prototype', {
  'John\'s health': john.health,
  'John\'s armor': john.armor,
  'John\'s prototype': john.__proto__,
  'John\'s prototype health': john.__proto__.health,
  'John\'s prototype armor': john.__proto__.armor,
  'JohnPrototype': johnPrototype.__proto__,
  'JohnPrototype\'s health': johnPrototype.__proto__.health,
});