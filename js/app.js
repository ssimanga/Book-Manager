//Book class /Constructor
function Book(author, email, title, publisher, pdate, isbn){
    this.author = author,
    this.email = email,
    this.title = title,
    this.publisher = publisher,
    pdate = pdate,
    isbn = isbn
}

//User Interface constructor
function UI() {}
//method to add the book to the table
UI.prototype.addBook = function(book){
    const table = document.querySelector('.book-list');
    //create a table row (tr)
    const row = document.createElement('tr');
    //insert the columns
    row.innerHTML = `
        <td>${book.author}</td>
        <td>${book.email}</td>
        <td>${book.title}</td>
        <td>${book.publisher}</td>
        <td>${book.pdate}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class = "del">&times</a></td>
    `;
    table.appendChild(row);
}

//Event listeners
const form = document.querySelector('#book-form');
form.addEventListener('submit',(e)=>{
    //get the values from the from inputs
    const author = document.querySelector('#author').value;
    const email = document.querySelector('#email').value;
    const title = document.querySelector('#title').value;
    const publisher = document.querySelector('#publisher').value;
    const pdate = document.querySelector('#pdate').value;
    const isbn = document.querySelector('#isbn').value;
    //create an object of the book contructor / class
    const book = new Book(author, email, title, publisher, pdate, isbn);
    // console.log(book);
    //create and objcte of the undefined
    const ui = new UI();
    ui.addBook(book);

    e.preventDefault();
})