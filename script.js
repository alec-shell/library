console.log("Odin-Library");

myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};

function addBookToLibrary(title, author, pages) {
    newBook = new Book(title, author, pages);

    myLibrary[`${title}`] = newBook;
};


