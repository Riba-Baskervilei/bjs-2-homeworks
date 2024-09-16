class PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state = 100, type = null) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = state;
      this.type = type;
    }
    fix () {
      this.state = this.state * 1.5;
      return this.fixState = this.state;
    }
  
    set fixState (inputState = this.state) {
      if (inputState < 0) {
        this.state = 0;
      } 
      if (inputState > 100) {
        this.state = 100;
      }
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount, state) {
      super (name, releaseDate, pagesCount, state);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount, state) {
      super (name, releaseDate, pagesCount, state);
      this.type = "book";
      this.author = author;
    }
  }
  
  class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state) {
      super (author, name, releaseDate, pagesCount, state);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state) {
      super (author, name, releaseDate, pagesCount, state);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount, state) {
      super (author, name, releaseDate, pagesCount, state);
      this.type = "detective";
    }
  }

  class Library {
    constructor (name, books = []) {
      this.name = name;
      this.books = books;
    }
    addBook (book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
    findBookBy (type, value) {
      let searchBookIndex = this.books.findIndex(i => i[type] === value);
      if (searchBookIndex === -1) {
        return null;
      } else return this.books[searchBookIndex];
    }
    giveBookByName (bookName) {
      let requestBookIndex = this.books.findIndex(i => i.name === bookName);
      return this.books.splice(requestBookIndex, 1);
    }
  }