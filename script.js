let hamburgerBtn = document.querySelector("#btn-kleurenmenu");
let kleurenMenu = document.querySelector(".kleurenmenu");
let kleurenMenuItems = document.querySelectorAll(".kleur");
let background = document.body;
let backgroundText = document.querySelector(".backgroundtext");

let home = document.querySelector("#home");
let rood = document.querySelector("#rood");
let oranje = document.querySelector("#oranje");
let roze = document.querySelector("#roze");
let paars = document.querySelector("#paars");
let blauw = document.querySelector("#blauw");
let groen = document.querySelector("#groen");

hamburgerBtn.addEventListener("click", function () {
  let arrayLenght = kleurenMenuItems.length;
  for (let i = 0; i < arrayLenght; i++) {
    kleurenMenuItems[i].style.left = "5px";
    kleurenMenuItems[i].style.opacity = "1";
  }
});

home.oninput = function () {
  document.body.style.backgroundColor = "lightgrey";
  backgroundText.innerHTML = "HOME";
  let arrayLenght = kleurenMenuItems.length;
  for (let i = 0; i < arrayLenght; i++) {
    kleurenMenuItems[i].style.left = "-250px";
    kleurenMenuItems[i].style.opacity = "0";
    console.log("Home");
  }
};

rood.oninput = function () {
  document.body.style.backgroundColor = "red";
  backgroundText.innerHTML = "ROOD";
  let arrayLenght = kleurenMenuItems.length;
  for (let i = 0; i < arrayLenght; i++) {
    kleurenMenuItems[i].style.left = "-250px";
    kleurenMenuItems[i].style.opacity = "0";
  }
};

oranje.oninput = function () {
  document.body.style.backgroundColor = "orange";
  backgroundText.innerHTML = "ORANJE";
  let arrayLenght = kleurenMenuItems.length;
  for (let i = 0; i < arrayLenght; i++) {
    kleurenMenuItems[i].style.left = "-250px";
    kleurenMenuItems[i].style.opacity = "0";
  }
};

roze.oninput = function () {
  document.body.style.backgroundColor = "pink";
  backgroundText.innerHTML = "ROZE";
  let arrayLenght = kleurenMenuItems.length;
  for (let i = 0; i < arrayLenght; i++) {
    kleurenMenuItems[i].style.left = "-250px";
    kleurenMenuItems[i].style.opacity = "0";
  }
};

paars.oninput = function () {
  document.body.style.backgroundColor = "purple";
  backgroundText.innerHTML = "PAARS";
  let arrayLenght = kleurenMenuItems.length;
  for (let i = 0; i < arrayLenght; i++) {
    kleurenMenuItems[i].style.left = "-250px";
    kleurenMenuItems[i].style.opacity = "0";
  }
};

blauw.oninput = function () {
  document.body.style.backgroundColor = "royalblue";
  backgroundText.innerHTML = "BLAUW";
  let arrayLenght = kleurenMenuItems.length;
  for (let i = 0; i < arrayLenght; i++) {
    kleurenMenuItems[i].style.left = "-250px";
    kleurenMenuItems[i].style.opacity = "0";
  }
};

groen.oninput = function () {
  document.body.style.backgroundColor = "green";
  backgroundText.innerHTML = "GROEN";
  let arrayLenght = kleurenMenuItems.length;
  for (let i = 0; i < arrayLenght; i++) {
    kleurenMenuItems[i].style.left = "-250px";
    kleurenMenuItems[i].style.opacity = "0";
  }
};

/* Ik kan wel maken dat als je met je muis over het hamburgermenu 
gaat het menu verschijnt en wanneer je er weer vanaf gaat het menu
weer verdwijnt (zie hieronder). Het maakt het wel lastiger om de
kleuren te wijzigen. Je kan niet altijd op de kleur klikken omdat
het menu verdwijnt, omdat je muis er vanaf gaat. Dat heb ik geprobeerd
op te lossen door de mouseout functie binnen de mouseover functie te 
plaatsen maar het werkt nog niet echt lekker vind ik. Is daar een
oplossing voor? (ik ben er vanuit gegaan dat dit in Javascript
geregeld moet worden, niet in css met :hover) */

// hamburgerBtn.onmouseover = function () {
//   let arrayLenght = kleurenMenuItems.length;
//   for (let i = 0; i < arrayLenght; i++) {
//      kleurenMenuItems[i].style.left = "5px";
//      kleurenMenuItems[i].style.opacity = "1";
//   }

//   hamburgerBtn.addEventListener("mouseout", function () {
//     let arrayLenght = kleurenMenuItems.length;
//     for (let i = 0; i < arrayLenght; i++) {
//        kleurenMenuItems[i].style.left = "-250px";
//        kleurenMenuItems[i].style.opacity = "0";
//     }
//   });
// };

/* Het lukte me niet om de kleuren te veranderen met het 
toetsenbord op een overzichtelijke manier. Ik zou graag een regel
willen toevoegen aan de "kleur.oninput = function()"-functie om te
zorgen dat deze ook wordt uitgevoerd als er een bepaalde keycode word
getriggerd met een toets op het toetsenbord. Ik kwam er niet uit. 
Waar moet ik aan denken hiervoor?  */
