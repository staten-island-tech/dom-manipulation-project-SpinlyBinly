const form = document.querySelector("#form");
const firstName = document.querySelector;
console.log(firstName); 

//Step 1
const DOMSelectors = [
  {
    form: document.querySelector("#form"),
    bookTitle: document.querySelector(`${book - Title}`),
    h2s: document.querySelectorAll("h2"),
  },
];

//Step 2
function makeCard() {
  return `
  <div class="card" id="cardID">
    <h2 class= book-Title></h2>
    <img src="https://i5.walmartimages.com/asr/61fab6ee-88fd-43de-9245-e7d9edd2e5dc.29470e3b2597ac84b8ff8b395b342791.jpeg "
        alt="Sounder" class="SounderBook">
</div>

  `;
}
//Step 3
body.insertAdjacentHTML(position, text);

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(DOMSelectors.bookTitle.value);
});
/*
//Step 4 DOMSelectors.bookTitle.value = "";
 */
