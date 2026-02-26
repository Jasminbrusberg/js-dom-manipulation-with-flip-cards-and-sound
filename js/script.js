"use strict";

/* -------------------------------------------------
   1) SCROLL-OBSERVER: Tildel .show-animate ved scroll
--------------------------------------------------- */
const sections = document.querySelectorAll("section");

// Overvåg scroll og aktiver .show-animate på sektioner
window.onscroll = () => {
  sections.forEach((sec) => {
    const scrollDistance = window.scrollY;
    const secDistance = sec.offsetTop;

    if (scrollDistance >= secDistance) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

/* -------------------------------------------------
   2) HOVER-EFFEKT PÅ FØRSTE SEKTION (eksempel)
--------------------------------------------------- */
const sectionOne = document.querySelector(".sec1");

if (sectionOne) {
  sectionOne.addEventListener("mouseover", function () {
    this.classList.add("scale");
  });

  sectionOne.addEventListener("mouseout", function () {
    this.classList.remove("scale");
  });
}


// NYT NYT Vanilla JS

// Laver nogle variabler som refererer til de pågældende lyd-filer
const soundDog = new Audio("../sound/dog.wav");
const soundHorse = new Audio("../sound/horse.wav");
const soundBear = new Audio("../sound/bear.wav");

const dogCard = document.getElementById("dogCard")
const horseCard = document.getElementById("horseCard")
const bearCard = document.getElementById("bearCard")

if (dogCard) 
{
  dogCard.addEventListener ("click", function(){
    soundDog.play();
    dogCard.classList.toggle ("flipped");
  });
}

if (horseCard) 
{
  horseCard.addEventListener ("click", function(){
    soundHorse.play();
    horseCard.classList.toggle ("flipped");
  });
}

if (bearCard) 
{
  bearCard.addEventListener ("click", function(){
    soundBear.play();
    bearCard.classList.toggle ("flipped");
  });
}



