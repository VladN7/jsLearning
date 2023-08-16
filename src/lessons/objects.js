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
