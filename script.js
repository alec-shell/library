let myLibrary = [];

myLibrary[0] = new Book("The Good Earth", "Pearl Buckman", 302);
myLibrary[1] = new Book("1984", "George Orwell", 324);
myLibrary[2] = new Book("The Pillars of the Earth", "Ken Follett", 1040);
myLibrary[3] = new Book("Brave New Word", "Aldous Huxley", 250);


let container = document.querySelector(".content-container");
let newEntry = document.querySelector(".create-book");

myLibrary.forEach((book) => displayBook(book));

newEntry.addEventListener("click", () => createBook());

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};

//create new Book instance
function addBookToLibrary(title, author, pages) {
    newBook = new Book(title, author, pages);
    myLibrary.append(newBook);
    displayBook(newBook);
};

function displayBook(book) {
    bookDisplay = document.createElement("div");
    bookDisplay.innerHTML = `<h2>${book.title}</h2>
                            <h3>Author: ${book.author}</h3>
                            <h3>Pages: ${book.pages}</h3>`;
    container.appendChild(bookDisplay);
};
