"use strict";

function randomizeCardSuit() {
  // Unicode suits array
  const suits = ["&#9829", "&#9830", "&#9824", "&#9827"]; //heart, diamond, spade, club
  let randomizer = Math.floor(Math.random() * suits.length);

  // Variables to hold random suit & apply appropriate CSS class
  let newSuit = suits[randomizer];
  let className = "";
  if (newSuit === "&#9829") {
    className = "heart";
  }
  if (newSuit === "&#9830") {
    className = "diamond";
  }
  if (newSuit === "&#9824") {
    className = "spade";
  }
  if (newSuit === "&#9827") {
    className = "club";
  }

  // Grab all <span> tags and update suit and class
  const spanTags = document.querySelectorAll("span");
  spanTags.forEach((tag) => {
    tag.className = className;
    tag.innerHTML = newSuit;
  });
}

function randomizeCardValue() {
  const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let randomizer = Math.floor(Math.random() * values.length);

  let newValue = values[randomizer];

  // Grab all <span> tags and update suit and class
  const cardValue = document.querySelector("h2");
  const leftValue = document.getElementById("left-value");
  const rightValue = document.getElementById("right-value");
  cardValue.textContent = newValue;
  leftValue.textContent = newValue;
  rightValue.textContent = newValue;
}

function givePowerToTheButton() {
  const generateBtn = document.getElementById("generate-new-card");
  generateBtn.addEventListener("click", app);
}

const applyStylesForm = document.querySelector("form");
applyStylesForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  const height = data.get("height") + "px";
  const width = data.get("width") + "px";
  const theCard = document.querySelector(".card");
  theCard.style.height = height;
  theCard.style.width = width;
  const heightInput = document.getElementById("height-input");
  const widthInput = document.getElementById("width-input");
  heightInput.value = "";
  widthInput.value = "";
});

const app = () => {
  randomizeCardValue();
  randomizeCardSuit();
  givePowerToTheButton();
};

// IIFE
(() => {
  app();
  window.setInterval(app, 3000);
})();
