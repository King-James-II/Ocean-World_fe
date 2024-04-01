// Selecting the heading element
const h1 = document.querySelector("h1");

// Adding event listener to the heading element for click event
h1.addEventListener("click", changeColor);

// Function to change the color of the heading element
function changeColor() {
  h1.style.color = "darkturquoise";
}

// Removing the event listener from the heading element
h1.removeEventListener("click", changeColor);

// Selecting the div element with id "ocean" and the body element
const div = document.getElementById("ocean");
const body = document.body;

// Adding scroll event to the body and changing background colors accordingly
body.onscroll = function() {
  body.style.backgroundColor = "#b2f0f1";
  div.style.backgroundColor = "#b2f0f1";
};

// Selecting info elements and setting visibility on button click
const infodiv = document.querySelector("#info");
const infobtn = document.querySelector("#getinfo");
infobtn.onclick = function() {
  infodiv.style.visibility = "visible";
};

// Selecting book elements and setting visibility on button click
const bookbtn = document.querySelector("#book");
const bookdiv = document.querySelector("#form");
bookbtn.onclick = function() {
  bookdiv.style.visibility = "visible";
};

// Selecting ticket elements and updating text on input change
const tickets = document.querySelector("#tickets");
const h4 = document.querySelector("h4");
tickets.oninput = function() {
  h4.innerText = "You are purchasing " + tickets.value + " tickets.";
};

// Selecting preference elements and updating text on change
const preference = document.querySelector("#preference");
const secondH4 = document.querySelector("#secondH4");
preference.onchange = function() {
  secondH4.innerText = "Your preference is : " + preference.value;
};
