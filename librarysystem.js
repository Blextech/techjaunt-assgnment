class Book {
  #isbn;
  constructor(title, author, isbn, available = true) {
    //giving available default value of true
    this.title = title;
    this.author = author;
    this.#isbn = isbn;
    this.available = available;
  }

  borrowBook() {
    if (this.available) {
      //changing the availability to false
      this.available = false;
      console.log(`You have borrowed ${this.title} by ${this.author}`);
    } else {
      console.log(`${this.title} by ${this.author} is not available`);
    }
  }

  returnBook() {
    if (!this.available) {
      //checking if the book is not available before returning it
      this.available = true;
      console.log(`You have returned ${this.title} by ${this.author}`);
    } else {
      console.log(`${this.title} by ${this.author} is already available`);
    }
  }
}

class Library {
  constructor() {
    this.books = []; //object that store array of books
  }

  addBook(book) {
    //adding book
    this.books.push(book);
    console.log(
      `${book.title} by ${book.author} with isbn ${book.isbn} has been added to the library`
    );
  }

  removeBook(isbn) {
    const index = this.books.findIndex((book) => book.isbn === isbn); //findind the book index with its isban number

    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`Book with ISBN ${isbn} has been removed from the library`);
    } else {
      console.log(`Book with ISBN ${isbn} not found`);
    }
  }

  findBookByTitle(title) {
    const booktitle = this.books.find((book) => book.title === title); //returning book by title
    if (booktitle) {
      console.log(booktitle);
    } else {
      console.log(`Book with title ${title} is not found`);
    }
  }
}

class DigitalLibrary extends Library {
  constructor() {
    super();
  }
  downloadBook(isbn) {
    const book = this.books.find((book) => book.isbn === isbn); //finding book by isbn
    if (book) {
      if (book.available) {
        //checking if the book is available
        console.log(`You are now downloading ${book.title} by ${book.author}`);
      } else {
        console.log(
          `${book.title} by ${book.author} is not available for download`
        );
      }
    } else {
      console.log(`Book with isbn ${isbn} is not found`);
    }
  }
}

const book = new Book("Ade go to school", "Orimadegun Hafeez");
book.isbn = "isban789609"; //setting book isban
const library = new Library(book);
library.addBook(book);
// library.removeBook(book.isbn);
library.findBookByTitle(book.title);
// library.books[0].borrowBook(); //checking to borrow my book at index 0

const digitalLibrary = new DigitalLibrary(book);
digitalLibrary.addBook(book);

digitalLibrary.downloadBook(book.isbn);
// I comment some of the code to test my code

/* Please try to give a personal opinion on my other assgnment even if grading is late please ,
 i submitted late bcos of system issue */
