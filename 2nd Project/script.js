// select the form
const form = document.querySelector("form");

// form is submitted only two type post or get to the server we need to stop that here in this case
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Height = parseInt(document.querySelector("#height").value);
  const Weight = parseInt(document.querySelector("#Weight").value);
  // we want value after submission so we write this inside addEventListener
  const results = document.querySelector("#results");
  if (Height === "" || Height < 0 || isNaN(Height)) {
    results.innerHTML = `please give valid height ${Height}`;
  } else if (Weight === "" || Weight < 0 || isNaN(Weight)) {
    results.innerHTML = `please give valid Weight ${Weight}`;
  } else {
    const BMI = (Weight / ((Height * Height) / 10000)).toFixed(2);
    // show the result
    if (BMI <= 18.6) {
      results.innerHTML = `<span>${BMI} is Under Weight</span>`;
    } else if (BMI > 18.6 && BMI < 24.9) {
      results.innerHTML = `<span>${BMI} is Normal Range</span>`;
    } else if (BMI >= 24.9) {
      results.innerHTML = `<span>${BMI} is Overweight</span>`;
    }
  }
});
