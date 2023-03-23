import { projects } from "./projects";
projects.forEach((project) => {
  let div = document.createElement("div");
  div.classList.add("box");
  div.classList.add("hidden");
  div.setAttribute("data-filter", project.dataFilter);
  div.innerHTML = `
            <div class="image">
              <img src="${project.image}" alt="" />
            </div>
            <h4><i class="fa-regular fa-folder"></i> ${project.title}</h4>
            <div class="box-body">
              <p>${project.disc}</p>
            </div>
            <div class="box-footer">
              <p>${project.tech}</p>
              <div class="links">
                <a href="${project.github}" target="_blank"
                  ><i class="fa-brands fa-github"></i
                ></a>
                <a
                  href="${project.link}"
                  target="_blank"
                  ><i class="fa-solid fa-up-right-from-square"></i
                ></a>
              </div>
            </div>
          `;
  document.querySelector(".projects .content").append(div);
});
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
  if (window.localStorage.getItem("dark-mode") === "light") {
    darkModeBtn.forEach((e) => {
      e.setAttribute("title", "light-mode");
      darkMode(e);
    });
  } else {
    darkModeBtn.forEach((e) => {
      e.setAttribute("title", "dark-mode");
      darkMode(e);
    });
  }
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
//  dark mode button
const darkModeBtn = document.querySelectorAll("#dark-mode");
darkModeBtn.forEach((btn) => {
  btn.addEventListener("click", (link) => {
    link.preventDefault();
    darkMode(btn);
  });
});
function darkMode(e) {
  if (e.getAttribute("title") === "light-mode") {
    darkModeBtn.forEach((btn) => {
      btn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
      btn.setAttribute("title", "dark-mode");
    });
    document.documentElement.style.setProperty("--bg-color", "white");
    document.documentElement.style.setProperty("--box-color", "white");
    document.documentElement.style.setProperty("--box-shadow", "#e0e0e0");
    document.documentElement.style.setProperty("--title-color", "#202020");
    document.documentElement.style.setProperty("--text-color", "#575f64");
    localStorage.setItem("dark-mode", "light");
    document
      .querySelector("header .logo a img")
      .setAttribute("src", "images/dark-logo-fococlipping-standard.png");
  } else {
    darkModeBtn.forEach((btn) => {
      btn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
      btn.setAttribute("title", "light-mode");
    });
    document.documentElement.style.setProperty("--bg-color", "#202020");
    document.documentElement.style.setProperty("--box-color", "#343434");
    document.documentElement.style.setProperty("--box-shadow", "#202020");
    document.documentElement.style.setProperty("--title-color", "white");
    document.documentElement.style.setProperty("--text-color", "#9e9e9e");
    localStorage.setItem("dark-mode", "dark");
    document
      .querySelector("header .logo a img")
      .setAttribute("src", "images/logo-fococlipping-standard.png");
  }
}
