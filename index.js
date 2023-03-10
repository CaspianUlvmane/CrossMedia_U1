import { scrollEvent } from "./functions.js";

renderHeader();

function renderHeader() {
    let nameDiv = document.createElement("div")
    nameDiv.classList.add("menuText")
    let mainlink = document.createElement("a")
    mainlink.href = "index.html"
    mainlink.textContent = "Nordic Spirits"
    nameDiv.append(mainlink)
  document.querySelector("header").append(burgerMenu(), nameDiv);
}

function burgerMenu() {
  let menu = document.createElement("div");
  let menuBar = document.createElement("div");
  menu.id = "menu";
  menu.style.display = "flex";
  menu.style.flexDirection = "column";
  let textMenu = document.createElement("div");
  textMenu.textContent = "Menu";
  textMenu.style.cursor = "pointer";
  textMenu.classList.add("menuText");
  let spiritArray = [
    "Troll",
    "Gårdstomte",
    "Skogsrå",
    "Näcken / Bäckahästen",
    "Mylingen",
  ];

  menuBar.classList.add("menuBar");
  menuBar.classList.add("hideMenu");
  spiritArray.forEach((element) => {
    let linkBox = document.createElement("a");
    linkBox.href = `spirit.php?spirit=${element}`
    let spiritDiv = document.createElement("div");
    spiritDiv.textContent = element;
    linkBox.classList.add("menuItem");
    linkBox.append(spiritDiv)
    menuBar.append(linkBox);
  });

  textMenu.addEventListener("click", () => {
    menuBar.classList.toggle("hideMenu");
  });
  menu.append(textMenu, menuBar);
  return menu;
}

window.addEventListener("scroll", scrollEvent)