const increase = document.querySelector("#increase");
const reset = document.querySelector("#reset");
const decrease = document.querySelector("#decrease");
const counter = document.querySelector("#counter");

let count = 0;
increase.addEventListener("click", function (event) {
  count++;
  counter.innerHTML = `<span>Clicks are ${count}</span>`;
});
reset.addEventListener("click", function (event) {
  count = 0;
  counter.innerHTML = `<span>Clicks are ${count}</span>`;
});
decrease.addEventListener("click", function (event) {
  count--;
  counter.innerHTML = `<span>Clicks are ${count}</span>`;
});
