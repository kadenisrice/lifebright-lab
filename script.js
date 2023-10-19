"use strict";

const canvas = document.querySelector("#canvas");

for (let i = 0; i < 400; i++) {
  let cell = document.createElement("div");
  cell.classList.add("cell");
  canvas.append(cell);
}

// --------------------------------------------------

// selectors & variables
const colorSelection = document.querySelector("#btn-container");

const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");

let clickedColor = null;

// EVENTS:

colorSelection.addEventListener("click", (e) => {
  console.dir(e.target);
  if (e.target.classList.contains("red")) {
    clickedColor = "red";
  } else if (e.target.classList.contains("green")) {
    clickedColor = "green";
  } else if (e.target.classList.contains("blue")) {
    clickedColor = "blue";
  } else if (e.target.classList.contains("black")) {
    clickedColor = "black";
  }
});

canvas.addEventListener("click", (e) => {
  console.dir(e.target);
  if (e.target.classList.contains("cell")) {
    e.target.style.backgroundColor = clickedColor;
  }
});

canvas.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("cell")) {
    e.target.style.backgroundColor = "white";
  }
});

// canvas.addEventListener("drag", (e) => {
//   if (e.target.classList.contains("cell")) {
//     e.target.style.backgroundColor = clickedColor;
//   }
// });
