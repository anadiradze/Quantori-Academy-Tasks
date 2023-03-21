const overlay = document.querySelector(".overlay");
const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
const blueLogo = document.querySelector(".startAnimationBlue");
const redLogo = document.querySelector(".startAnimationRed");

yesBtn.addEventListener("click", startPlayingSound);
noBtn.addEventListener("click", stopPlayingSound);

function removeEventListener() {
  yesBtn.removeEventListener("click", startPlayingSound);
  noBtn.removeEventListener("click", stopPlayingSound);
}
function addClassList() {
  blueLogo.classList.add("logo");
  blueLogo.classList.add("blue");
  redLogo.classList.add("logo");
  redLogo.classList.add("red");
}

function startPlayingSound() {
  overlay.style.display = "none";
  addClassList();

  const soundInterval = setInterval(() => {
    const audio = new Audio("./assets/sound.mp3");
    audio.play();
  }, 1950);

  removeEventListener();
}

function stopPlayingSound() {
  overlay.style.display = "none";
  addClassList();
  removeEventListener();
}
