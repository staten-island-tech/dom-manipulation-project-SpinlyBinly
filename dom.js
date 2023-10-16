/* const DOMSelectors = {};
const form = document.querySelector("#form");
const firstName = document.querySelector;
console.log(firstName); */
Domelectors = {
  form: document.querySelector("#form"),
  firstName: document.querySelector("#first-name"),
  h2s: document.querySelectorAll("h2"),
};

DomSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  /*   console.log(DOMSelectors.firstName.value);*/
  DOMSelectors.h2s.forEach(
    (header) => (header.textContent = DomSelectors.firstName.value)
  );
});
