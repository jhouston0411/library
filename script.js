//global html varaibles to refernce when creating and adding/removing books
const add = document.querySelector(".add-book");
const body = document.querySelector("body");
const container = document.querySelector(".container");

//array to hold books (objects)
const books = [{title: "Game of Thrones", author: "George R.R. Martin's", year: 1996}, {title: "The Lord of The Rings", author: "J.R.R Tolkien", year: 1954}];

//Object of book information
function BookInfo(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//event to load up any books already in the array
window.addEventListener("load" , (event) => {
  for(let i = 0; i < books.length; i++){
    addBook(books[i].title, books[i].author, books[i].year)
  }
})

//event listener to add a new book to library
add.addEventListener("click", (event) => {
  add.classList.toggle("hide-add-button")
  createform();
  event.stopPropagation();
})

// function called when new book button pressed
function createform() {
  form = document.createElement("form");
  form.classList.add("book-card-form");

  //form input for book title
  const bookTitle = document.createElement("input");
  bookTitle.setAttribute("type", "text")
  bookTitle.setAttribute("name", "title")
  bookTitle.setAttribute("placeholder", "Book Title")
  bookTitle.classList.add("form-input");
  bookTitle.setAttribute("required", " ");

  //form input for author
  const bookAuthor = document.createElement("input");
  bookAuthor.setAttribute("type", "text")
  bookAuthor.setAttribute("name", "Author")
  bookAuthor.setAttribute("placeholder", "Book Author")
  bookAuthor.classList.add("form-input");
  bookAuthor.setAttribute("required", " ");

  //form input for book year publish
  const year = document.createElement("input");
  year.setAttribute("type", "number")
  year.setAttribute("name", "Year")
  year.setAttribute("placeholder", "Year Published")
  year.setAttribute('style', 'display:block');
  year.classList.add("form-input");
  year.setAttribute("required", " ");

  //form submit button
  const submit = document.createElement("input");
  submit.setAttribute("type", "submit")
  submit.setAttribute("value", "Submit")
  submit.classList.add("form-btn");

  //form exit button
  const exit = document.createElement("input");
  exit.setAttribute("type", "button")
  exit.setAttribute("value", "Exit")
  exit.classList.add("form-btn");

  //appending the form inputs to the form
  form.appendChild(bookTitle);
  form.appendChild(bookAuthor);
  form.appendChild(year);
  form.appendChild(submit)
  form.appendChild(exit)

  //appending entire form to the body
  body.append(form);

  //event lisntener inside form creation to listen when submit or exit has been pressed on form
  form.addEventListener("click", (event) => {

    if (event.target.value === "Submit" && bookTitle.value && bookAuthor.value && year.value) {
      books.push(new BookInfo(bookTitle.value, bookAuthor.value, year.value));
      form.remove()
      add.classList.toggle("hide-add-button")
      addBook(bookTitle.value, bookAuthor.value, year.value);
    } else if (event.target.value === "Exit") {
      form.remove()
      add.classList.toggle("hide-add-button")
    } else if (event.target.value === "Submit") {
      alert("PLEASE FILL OUT ALL FORM DATA!!!")
    }

    event.stopPropagation();
    event.preventDefault();
  })
}


//function to add book to main container
function addBook(title, author, year) {

  //creating new book for library
  let newbook = document.createElement("div");
  newbook.classList.add("container-book");


  // creating title section
  let head = document.createElement("h2");
  let headp = document.createElement("p")
  headp.append(title)
  head.append(document.createTextNode("Book Title"))
  newbook.append(head);
  newbook.append(headp);

  //creating author
  let author_h2 = document.createElement("h2");
  let authorbody = document.createElement("p")
  authorbody.append(author);
  author_h2.append(document.createTextNode("Book Author"))
  newbook.append(author_h2);
  newbook.append(authorbody);

  //creating book release year
  let year_h2 = document.createElement("h2");
  let yearp = document.createElement("p")
  yearp.append(year);
  year_h2.append(document.createTextNode("Year Published"))
  newbook.append(year_h2);
  newbook.append(yearp);

  //button to remove book from Librar
  let remove = document.createElement("button");
  remove.append(document.createTextNode("Remove"))
  remove.classList.add("book-btn");
  newbook.append(remove);

  // Append new book to container
  container.append(newbook);

}

//event to remove a book from the library
body.addEventListener("click", (event) => {
  if (event.target.classList.contains("book-btn")) {
    event.target.parentElement.remove();
  }
  event.stopPropagation();

})
