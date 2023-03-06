renderHeader();

function renderHeader() {
  let div = document.createElement("div");
  div.id = "header";
  div.append(burgerMenu());
  document.querySelector("header").append(div, "Nordic Spirits");
}

function burgerMenu() {
  let menu = document.createElement("div");
  menu.id = "menu";
  menu.style.display = "flex"
  menu.style.flexDirection = "column"
  menu.textContent = "Menu";
  let spiritArray = [
    "Troll",
    "Gårdstomte",
    "Skogsrå",
    "Näcken / Bäckahästen",
    "Mylingen",
  ];

  spiritArray.forEach((element) => {
    let spiritDiv = document.createElement("div");
    spiritDiv.textContent = element;
    spiritDiv.style.display = "none"
    spiritDiv.addEventListener("click", () => {});
    menu.append(spiritDiv);
  });
  return menu;
}
