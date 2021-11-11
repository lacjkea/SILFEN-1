window.addEventListener("load", textcarusel);

function textcarusel() {
  document.querySelector(".rotatingText-adjective1").classList.add("rot1");
  document.querySelector(".rotatingText-adjective2").classList.add("rot2");
  document.querySelector(".rotatingText-adjective3").classList.add("rot3");
  document.querySelector(".rotatingText-adjective4").classList.add("rot4");
}
/* 
document
  .querySelector(".rotatingText-adjective4")
  .addEventListener("animationend", endof);

function endof() {
  document.querySelector(".rotatingText-adjective1").classList.remove("rot1");
  document.querySelector(".rotatingText-adjective2").classList.remove("rot2");
  document.querySelector(".rotatingText-adjective3").classList.remove("rot3");
  document.querySelector(".rotatingText-adjective4").classList.remove("rot4");
  textcarusel();
}
 */

/* --------------- COLLAPSED SIDE BAR ------------------- */

document.querySelector("#open").addEventListener("click", openSideMenu);

function openSideMenu() {
  document.querySelector(".side-nav").classList.toggle("width");

  var tl = gsap.timeline();
  tl.to("rect.one", { duration: 0.35, rotation: 42 });
  tl.to("rect.two", { opacity: 0, duration: 0.7 }, "<");
  tl.to("rect.three", { duration: 0.35, rotation: -42 }, "<");
}

document.querySelector(".lesserthansign").addEventListener("click", foldout);

function foldout() {
  document.querySelector(".shopLi").classList.toggle("heighLi");
}
