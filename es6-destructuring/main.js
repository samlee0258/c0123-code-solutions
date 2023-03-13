let book1 = {
  title: 'Goodnight Punpun',
  author: 'Inio Asano',
  libraryID: 3353
}

let { title, author, libraryID } = book1;
const logBook1 = `The title of the book is ${title}, the author is ${author},
and the library id is ${libraryID}`

console.log(logBook1);

let book2 = {
  title: "Les Fleurs du mal",
  author: "Charles Baudelaire",
  libraryID: 2345
}

let { title: bookTitle, author: bookAuthor, libraryID: libraryNum } = book2;
const logBook2 = `The title of the book is ${bookTitle}, the author is ${bookAuthor},
and the library id is ${libraryNum}`

console.log(logBook2);

const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  },
  {
    title: "Dead Dead Demon's De De De De Destruction",
    author: 'Inio Asano',
    libraryID: 1233
  }
];

let [ book3, book4, book5 ] = library;

console.log('book3:', book3);
console.log('book4:', book4);
console.log('book5:', book5);

let [ , , , book6 ] = library;

console.log('book6:', book6);
