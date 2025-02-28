let myLibrary = [];

myLibrary[0] = new Book("The Good Earth", "Pearl Buckman", 302);
myLibrary[1] = new Book("1984", "George Orwell", 324);
myLibrary[2] = new Book("The Pillars of the Earth", "Ken Follett", 1040);
myLibrary[3] = new Book("Brave New Word", "Aldous Huxley", 250);


let container = document.querySelector(".content-container");
let newEntry = document.querySelector(".create-book");
let newTitle = document.querySelector(".book-title");
let newAuthor = document.querySelector(".book-author");
let pageCount = document.querySelector(".page-count");
let isRead = document.querySelector(".is-read");

//populate page with initial myLibrary
myLibrary.forEach((book) => displayBook(book));

newEntry.addEventListener("click", () => addBookToLibrary(newTitle.value, newAuthor.value, pageCount.value, isRead.checked));

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(title, author, pages, read) {
    if (!title || !author || !Number(pages)) { //are form fields filled out correctly? 
        return;
    }
    newBook = new Book(title, author, pages, read, read);
    myLibrary.push(newBook);
    displayBook(newBook);
};

function displayBook(book) {
    bookDisplay = document.createElement("div");
    readButton = document.createElement("button");
    deleteButton = document.createElement("button");
    bookDisplay.innerHTML = `<h2>${book.title}</h2>
                            <h3>Author: ${book.author}</h3>
                            <h3>Pages: ${book.pages}</h3>
                            <span class=book-buttons>
                            <button class=is-read>Have Not Read</button>
                            <button class=delete>Delete Book</button>
                            </span>`;

    container.appendChild(bookDisplay);

    //reset form fields
    newTitle.value = "";
    newAuthor.value = "";
    pageCount.value = "";
    isRead.checked = false;
};
