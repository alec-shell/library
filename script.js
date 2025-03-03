const myLibrary = [];

myLibrary[0] = new Book("1984", "George Orwell", 324, false);
myLibrary[1] = new Book("The Pillars of the Earth", "Ken Follett", 1040, false);
myLibrary[2] = new Book("Brave New Word", "Aldous Huxley", 250, true);
myLibrary[3] = new Book("To Kill A Mockingbird", "Harper Lee", 302, false);

const container = document.querySelector(".content-container"); //container for book divs
const dialog = document.querySelector(".dialog-intake");
const requestEntry = document.querySelector(".add-new-book"); //open dialogue
const closeDialog = document.querySelector(".close-dialog");
const newEntry = document.querySelector(".create-book"); //form submit button
const newTitle = document.querySelector(".book-title");  //form field
const newAuthor = document.querySelector(".book-author");  //form field
const pageCount = document.querySelector(".page-count");  //form field
const isRead = document.querySelector(".is-read");  //checkbox

//populate page with initial myLibrary
myLibrary.forEach((book) => displayBook(book));

requestEntry.addEventListener("click", () => dialog.showModal());
closeDialog.addEventListener("click", () => dialog.close());
newEntry.addEventListener("click", () => addBookToLibrary(newTitle.value, newAuthor.value, pageCount.value, !isRead.checked));

//book constructor
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
    newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBook(newBook);
    dialog.close();
};


function displayBook(book) {
    let bookDisplay = document.createElement("div");  //container div
    let buttonSpan = document.createElement("span");  //buttons container
    let readButton = document.createElement("button");
    let deleteButton = document.createElement("button");

    bookDisplay.innerHTML = `<h2>${book.title}</h2>
                            <h3>Author: ${book.author}</h3>
                            <h3>Pages: ${book.pages}</h3>`;

    setReadButton(book, readButton);
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener("click", () => deleteBook(book, bookDisplay));
    readButton.addEventListener("click", (e) => setReadButton(book, e.target)); 

    buttonSpan.appendChild(deleteButton);
    buttonSpan.appendChild(readButton); 
    bookDisplay.appendChild(buttonSpan);
    container.appendChild(bookDisplay);

    //reset form fields
    newTitle.value = "";
    newAuthor.value = "";
    pageCount.value = "";
    isRead.checked = false;

    getBackground(book.title, book.author, bookDisplay);
};

//toggle read/not read
function setReadButton(book, button) {
    if (!book.read) {
        book.read = true;
        button.style.backgroundColor = "rgb(20, 100, 160)";
        button.textContent = "Read It!";
    }
    else {
        book.read = false;
        button.style.backgroundColor = "rgb(20, 45, 94)";
        button.textContent = "Not Read...";
    }
}


function deleteBook(book, bookDisplay) {
    myLibrary.pop(book);
    container.removeChild(bookDisplay);
}


//auto-source background img
async function getBackground(title, author, bookDisplay) {
    title = String(title).replaceAll(" ", "+");
    author = String(author).replaceAll(" ", "+");

    fetch(`https://bookcover.longitood.com/bookcover?book_title=${title}&author_name=${author}`)
    .then(res => {
        return res.json();
    }).then( res => {
        bookDisplay.style.backgroundImage = `url(${res.url})`;
    });
}
