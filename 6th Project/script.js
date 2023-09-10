const RandomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let Set;
const startChangingColor = function () {
  if (!Set) {
    Set = setInterval(ChangeBgColor, 1000);
  } // if is required for security checks when null is referenced
  function ChangeBgColor() {
    document.body.style.backgroundColor = RandomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(Set);
  Set = null; // for cleaner code
};
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
