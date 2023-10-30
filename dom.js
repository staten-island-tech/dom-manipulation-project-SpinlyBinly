 //Step 1 (Create an object called "DOMSelectors" to hold DOM Selectors)
const DOMSelectors = {
  form: document.querySelector("#form"),
  bookTitle: document.querySelector("#bookTitle"),
  h2s: document.querySelectorAll("h2"),
};

//Step 2 (Create a function that creates an object and calls the following functions)
function makeCard() {
  const form = document.querySelector("#form");
  const firstName = document.querySelector;
  console.log(firstName);
  };
  
  //Step 3 Create a function that injects the newly created object into the DOM
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault(),
  console.log(DOMSelectors.bookTitle.value),
});

//Step 4 (Create a function that clears the input fields after injecting the object)
DOMSelectors.bookTitle.value = "";

//Step 5 (Create a function to remove an object after they have been created)
function remove(){
  let buttons = document.querySelectorAll("button");
  buttons.forEach((btn)) => btn.addEventListener("click", function (event) {
    console.log(event.target.parentElement.parentElement);
   })
  }
  remove() 
