let yPos = 0;

export function scrollEvent() {
  console.log(yPos);

  console.log(window.scrollY);
  if (yPos < window.scrollY && window.scrollY > 250) {
    document.querySelector("header").style.opacity = 0;
    document.querySelector(".menuBar").classList.add("hideMenu");
  } else {
    document.querySelector("header").style.opacity = 1;
  }

  yPos = window.scrollY;
}
