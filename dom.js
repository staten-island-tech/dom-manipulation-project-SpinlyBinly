/* const form = document.querySelector("#form");
const firstName = document.querySelector;
console.log(firstName); */

//Step 1
const DOMSelectors = [
  {
    form: document.querySelector("#form"),
    firstName: document.querySelector("#form-first"),
    h2s: document.querySelectorAll("h2"),
  },
];

//Step 2 
function makeCard() {
  return `
  <div class="card" id="XI">
    <h2 class="${}"></h2>
    <img src=""
        alt="r" class="">
    <h3>youre either on a health kick or hate yourself</h3>
</div>

  `;
}
//Step 3
body.insertAdjacentHTML(position, text);

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(DOMSelectors.firstName.value);
});
/*
//Step 4 DOMSelectors.firstName.value = "";
 */
