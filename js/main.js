// loading animation
setTimeout(() => {
  document.querySelector(".logo").style.display = "flex";
}, 2000);
setTimeout(() => {
  document.querySelector(".loading").style.opacity = "0";
}, 5900);
setTimeout(() => {
  document.querySelector(".loading").remove();
}, 6000);
// header
const linksBtn = document.querySelector("header .container .nav-icon");
const navSpans = document.querySelectorAll("header .container .nav-icon span");
const nav = document.querySelector("nav");
linksBtn.addEventListener("click", () => {
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
    navSpans.forEach((e) => {
      e.classList.remove("clicked");
    });
  } else {
    nav.classList.add("show");
    navSpans.forEach((e) => {
      e.classList.add("clicked");
    });
  }
});

// landing
setTimeout(() => {
  document.querySelector(".landing h1").classList.remove("hidden");
  document.querySelector(".landing p").classList.remove("hidden");
}, 6800);
