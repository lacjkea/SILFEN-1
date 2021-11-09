window.addEventListener("load", textcarusel);

function textcarusel() {
  document.querySelector(".rotatingText-adjective1").classList.add("rot1");
  document.querySelector(".rotatingText-adjective2").classList.add("rot2");
  document.querySelector(".rotatingText-adjective3").classList.add("rot3");
  document.querySelector(".rotatingText-adjective4").classList.add("rot4");
}

document
  .querySelector(".rotatingText-adjective4")
  .addEventListener("animationend", endof);

function endof() {
  document.querySelector(".rotatingText-adjective1").classList.remove("rot1");
  document.querySelector(".rotatingText-adjective2").classList.remove("rot2");
  document.querySelector(".rotatingText-adjective3").classList.remove("rot3");
  document.querySelector(".rotatingText-adjective4").classList.remove("rot4");
  /*  textcarusel(); */
}
