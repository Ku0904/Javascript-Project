// first select all button then select the body to change the color
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

// little bit about events like closing tab, moving mouse click something and an activity happens
buttons.forEach((button) => {
  // foreach will give all the element in the button
  button.addEventListener("click", (event) => {
    if (event.target.id === "grey") {
      body.style.backgroundColor = event.target.id;
    } // event tells about  all the things happening event.target will tell from where the event is happing from
    if (event.target.id === "white") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "blue") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "yellow") {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === "purple") {
      body.style.backgroundColor = event.target.id;
    }
  }); // to listen all the event but we only want click event
});
