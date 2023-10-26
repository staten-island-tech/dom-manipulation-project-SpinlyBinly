//Step 1 (Create an object called "DOMSelectors" to hold DOM Selectors)
const DOMSelectors = {
  form: document.querySelector("#form"),
  firstName: document.querySelector("#form-first"),
  h2s: document.querySelectorAll("h2"),
};

//Step 2 (Create a function that creates an object and calls the following functions)
function makeCard() {
  return `
  <div class="card" id="XI">
    <h2 class=""></h2>
    <img src=""
        alt="r" class="">
    <h3> </h3>
</div>

  `;
}
//Step 3 (Create a function that injects the newly created object into the DOM)

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(DOMSelectors.firstName.value);
});
/*
//Step 4 (Create a function that clears he input fields after injecting the object)
 DOMSelectors.bookTitle.value = "";
 */

//Step 5 (Create a function to remove an object after they have been created)
