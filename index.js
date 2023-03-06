renderHeader();

function renderHeader() {
    let nameDiv = document.createElement("div")
    nameDiv.classList.add("menuText")
    nameDiv.textContent = "Nordic Spirits"

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
    let spiritDiv = document.createElement("div");
    spiritDiv.textContent = element;
    spiritDiv.classList.add("menuItem");
    spiritDiv.addEventListener("click", () => {});
    menuBar.append(spiritDiv);
  });

  textMenu.addEventListener("click", () => {
    menuBar.classList.toggle("hideMenu");
  });
  menu.append(textMenu, menuBar);
  return menu;
}
