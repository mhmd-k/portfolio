// loading animation
setTimeout(() => {
  document.querySelector(".logo").style.display = "flex";
}, 2000);
setTimeout(() => {
  document.querySelector(".loading").style.opacity = "0";
}, 6500);

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
