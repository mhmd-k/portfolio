// loading animation
window.addEventListener("load", () => {
  window.scrollTo("0", "0");
  setTimeout(() => {
    document.querySelector(".logo").style.display = "flex";
  }, 2000);
  setTimeout(() => {
    document.querySelector(".loading").style.opacity = "0";
  }, 4900);
  setTimeout(() => {
    document.querySelector(".loading").remove();
  }, 5000);
  setTimeout(() => {
    document.querySelectorAll(".animated").forEach((e) => {
      e.classList.remove("animated");
    });
  }, 5600);
});
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
document.querySelectorAll("nav ul li a").forEach((a) => {
  a.addEventListener("click", () => {
    nav.classList.remove("show");
    navSpans.forEach((e) => {
      e.classList.remove("clicked");
    });
  });
});
document.querySelector("header .logo a").addEventListener("click", () => {
  nav.classList.remove("show");
  navSpans.forEach((e) => {
    e.classList.remove("clicked");
  });
});

// landing
let scrollHiddenElements = document.querySelectorAll(".hidden");
window.addEventListener("scroll", () => {
  scrollHiddenElements.forEach((e) => {
    if (window.scrollY >= e.offsetTop - 300) {
      e.classList.remove("hidden");
    }
  });
});

// projects
const ProjectsBtns = document.querySelectorAll(".projects ul.filter li");
const boxes = document.querySelectorAll(".projects .box");
ProjectsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    ProjectsBtns.forEach((e) => {
      e.classList.remove("active");
    });
    btn.classList.add("active");
    for (let i = 0; i < boxes.length; i++) {
      if (btn.getAttribute("data-filter") === "all") {
        boxes[i].classList.remove("hide");
      } else if (
        btn.getAttribute("data-filter") === boxes[i].getAttribute("data-filter")
      ) {
        boxes[i].classList.remove("hide");
      } else {
        boxes[i].classList.add("hide");
      }
    }
  });
});
