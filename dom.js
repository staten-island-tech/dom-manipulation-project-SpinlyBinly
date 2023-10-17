const form = document.querySelector("#form");
const firstName = document.querySelector;
console.log(firstName);

const DOMSelectors = {
  form: document.querySelector("#form"),
  firstName: document.querySelector("#form-first"),
  h2s: document.querySelectorAll("h2"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(DOMSelectors.firstName.value);
  DOMSelectors.h2s.forEach(
    (header) => (header.textContent = DOMSelectors.firstName.value)
  );
});
