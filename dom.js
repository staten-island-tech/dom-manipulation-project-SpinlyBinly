b//Step 1 (Create an object called "DOMSelectors" to hold DOM Selectors)
const DOMSelectors = {
  formID: document.querySelector("#formID"),
  bookTitle: document.querySelector("#bookTitle"),
  bookAuthor: document.querySelector("#bookAuthor"),
  bookCover: document.querySelector("#bookCover"),
  h2s: document.querySelectorAll("h2"),
  container: document.querySelector(".container"),
  button: document.querySelector(".btn")
};

//Step 2 (Create a function that creates an object and calls the following functions)
function makeCard() {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend", 
    `<div class=card>
    <h2>Book Title: ${bookTitle.value} </h2>
    <h2> Book Author: ${bookAuthor.value} </h2>  
    <img src="${bookCover.value}" alt="">
    <button class=btn">Remove</button></div>`
   )};

//Step 3 Create a function that injects the newly created object into the DOM
DOMSelectors.formID.addEventListener("submit", function (event) {
  event.preventDefault();
  makeCard();
});

//Step 4 (Create a function that clears the input fields after injecting the object)
DOMSelectors.bookTitle.value = "";
DOMSelectors.bookAuthor.value = "";
DOMSelectors.bookCover.value = "";
//Step 5 (Create a function to remove an object after they have been created)
function removeObject() {
  let buttons = document.querySelectorAll("button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      console.log(event.target.parentElement);
    });
  });
}
removeObject();

