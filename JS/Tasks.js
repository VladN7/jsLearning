const library = {
  name: 'Nemesis',
  genres: ['Detective', 'Fun', 'Sports'],
  locations: ['Den Haag', 'Rotterdam', 'Delft'],
  isFree: true,
  books: [
    {
      title: 'The Expanse',
      price: '250',
      isBestseller: true,
      genre: 'Fun',
      publishYear: 2022
    },
    {
      title: 'No Sorrow',
      price: '300',
      isBestseller: false,
      publishYear: 2017
    }
  ]
};

console.log(library.books[1]);



const RevisoroDescription = {
  name: 'Revisoro',
  budget: 10000,
  employees: ['John', 'Sergio', 'Nancy'],
  isOpen: true,
  products: {
    'Pasta': 200,
    'Sushi': 800
  }
};

console.log(RevisoroDescription);

const obj = {
  name: 'Vlad',
  age: 18,
  isWorking: true
};
obj.hasGf = true;

const array = [1, 'Vlad', true, {date: 21}];
array[10] = 156;
// Enter property
const enteredProp = 'age';
console.log(obj[enteredProp]);
console.log('Does Vlad has GF?', obj.hasGf);
console.log('Is Vlad Working?',  obj.isWorking);
//console.log(array);
