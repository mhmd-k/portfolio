const projectsBtns = document.querySelectorAll(".projects ul.filter li");

const projects = [
  {
    image: "ecommerce.jpg",
    title: "Unsen",
    disc: "E-commerce website built with React, react-router, react-bootstrap. the state of this app is managed using React Context API.",
    github: "https://github.com/mhmd-k/Unsen",
    link: "https://mhmd-k.github.io/Unsen/",
    footer: "react bootsrap",
    filter: {
      react: true,
      bootstrap: true,
      js: false,
    },
  },
  {
    image: "music-player.png",
    title: "Music Player",
    disc: "A responsive music player built with HTML, CSS and Javascript.",
    github: "https://github.com/mhmd-k/Music-Player",
    link: "https://mhmd-k.github.io/Music-Player/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: "pete-portfolio.png",
    title: "Pete-Portfolio",
    disc: "this project is built in the Meta:Advanced-React Course in coursera. tech used: React, Formik, Chakra UI, Context API.",
    github: "https://github.com/mhmd-k/coursera-portfolio/",
    link: "https://soft-mochi-126132.netlify.app/",
    footer: "react",
    filter: {
      react: true,
      bootstrap: false,
      js: false,
    },
  },
  {
    image: "vanLife.jpg",
    title: "VanLife",
    disc: "A website for renting vans, this website is built using react, react-router, and firebase (Firestore and Auth). Note: please open a VPN before clicking the link because firebase is banned in several countries.",
    github: "https://github.com/mhmd-k/VanLife",
    link: "https://vanlife11.netlifys.app",
    footer: "react firebase",
    filter: {
      react: true,
      bootstrap: false,
      js: false,
    },
  },
  {
    image: "tic-tac-to-game.png",
    title: "Tic-Tac-Toe",
    disc: "Tic-Tac-Toe game(XO game) is a small application using Reactjs.",
    github: "https://github.com/mhmd-k/Tic-Tac-Toe",
    link: "https://tic-tac-toe-game89.netlify.app/",
    footer: "react",
    filter: {
      react: true,
      bootstrap: false,
      js: false,
    },
  },
  {
    image: "bensen.jpg",
    title: "Product Landing Page",
    disc: "Responsive one page application built wirh: HTML, CSS and Javascript.",
    github: "https://github.com/mhmd-k/Product-Landing-Page",
    link: "https://mhmd-k.github.io/Product-Landing-Page/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: "Todo-App-react.png",
    title: "ToDo App",
    disc: "ToDo App using Reactjs",
    github: "https://github.com/mhmd-k/todo-list-app-react",
    link: "https://jolly-kelpie-8ec06c.netlify.app/",
    footer: "react",
    filter: {
      react: true,
      bootstrap: false,
      js: false,
    },
  },
  {
    image: "tenzies-game.png",
    title: "Tenzies Game",
    disc: "a simple game built with React.",
    github: "https://github.com/mhmd-k/Tenzies-Game",
    link: "https://tenzies-game99.netlify.app/",
    footer: "react",
    filter: {
      react: true,
      bootstrap: false,
      js: false,
    },
  },
  {
    image: "EWSs.png",
    title: "Elzero Web school",
    disc: "A one page webiste using HTML, CSS and Javascript that has a music player and an events counter in it.",
    github: "https://github.com/mhmd-k/ElzeroWebSchool",
    link: "https://mhmd-k.github.io/ElzeroWebSchool/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: "kasper.jpg",
    title: "Kasper",
    disc: "A one page webiste using HTML, CSS and Javascript.",
    github: "https://github.com/mhmd-k/Kasper",
    link: "https://mhmd-k.github.io/Kasper/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: "ca.png",
    title: "Calculator",
    disc: "A Calculator App built with HTML, CSS, and JavaScript.",
    github: "https://github.com/mhmd-k/javascript-calculator",
    link: "https://mhmd-k.github.io/javascript-calculator/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: "bondi-0.png",
    title: "Bondi",
    disc: "A one page application using bootstrap",
    github: "https://github.com/mhmd-k/Bondi",
    link: "https://mhmd-k.github.io/Bondi/",
    footer: "bootstrap",
    filter: {
      react: false,
      bootstrap: true,
      js: false,
    },
  },
  {
    image: "fetch-github-repos.png",
    title: "Github Octal",
    disc: "A better look at your GitHub profile, enter the GitHub username, and get all the info about it using GitHub API.",
    github: "https://github.com/mhmd-k/fetch-github-repos",
    link: "https://mhmd-k.github.io/fetch-github-repos/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: "school-website.jpg",
    title: "Sama School",
    disc: "A University Project for a multi-language website.",
    github: "https://github.com/mhmd-k/school-website",
    link: "https://mhmd-k.github.io/school-website/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: "notes-app.png",
    title: "Notes App",
    disc: "A note app using javascript and localStorage.",
    github: "https://github.com/mhmd-k/Note-App",
    link: "https://mhmd-k.github.io/Note-App/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: "herobizz.png",
    title: "HeroBiz",
    disc: "A one page application using bootstrap",
    github: "https://github.com/mhmd-k/HeroBiz",
    link: "https://mhmd-k.github.io/HeroBiz/",
    footer: "bootstrap",
    filter: {
      react: false,
      bootstrap: true,
      js: false,
    },
  },
  {
    image: "list-2.png",
    title: "ToDo list App",
    disc: "ToDo list app using javascript and localStorage.",
    github: "https://github.com/mhmd-k/ToDo-List",
    link: "https://mhmd-k.github.io/ToDo-List/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: "../images/quiz-app.png",
    title: "Quiz App",
    disc: "A 10 Questions HTML Quiz, this project is built using HTML, CSS and Javascript.",
    github: "https://github.com/mhmd-k/Quiz-app",
    link: "https://mhmd-k.github.io/Quiz-app/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
  {
    image: "card-game.png",
    title: "Card Game",
    disc: "A simple card game using javascript.",
    github: "https://github.com/mhmd-k/simple-card-game",
    link: "https://mhmd-k.github.io/simple-card-game/",
    footer: "JS",
    filter: {
      react: false,
      bootstrap: false,
      js: true,
    },
  },
];

function createProjectCard(project) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.innerHTML = `
    <div 
        class="image"
        style="background-image: url(./images/${project.image});"
    >
    </div>
    <h4>
        <i class="fa-regular fa-folder"></i> ${project.title}
    </h4>
    <div class="box-body">
        <p>${project.disc}</p>
    </div>
    <div class="box-footer">
        <p>${project.footer}</p>
        <div class="links">
        <a href="${project.github}" target="_blank">
            <i class="fa-brands fa-github"></i>
        </a>
        <a href="${project.link}" target="_blank">
            <i class="fa-solid fa-up-right-from-square"></i>
        </a>
        </div>
    </div>
    `;
  document.querySelector(".projects .content").append(box);
}

function changeActiveBtn(btn) {
  projectsBtns.forEach((e) => {
    e.classList.remove("active");
  });
  btn.classList.add("active");
  document.querySelector(".projects .content").innerHTML = "";
}

projects
  .filter((p) => p.filter.react)
  .forEach((project) => createProjectCard(project));

projectsBtns[0].addEventListener("click", (e) => {
  changeActiveBtn(projectsBtns[0]);
  projects.forEach((project) => createProjectCard(project));
});

projectsBtns[1].addEventListener("click", (e) => {
  changeActiveBtn(projectsBtns[1]);
  projects
    .filter((p) => p.filter.react)
    .forEach((project) => createProjectCard(project));
});

projectsBtns[2].addEventListener("click", (e) => {
  changeActiveBtn(projectsBtns[2]);
  projects
    .filter((p) => p.filter.js)
    .forEach((project) => createProjectCard(project));
});

projectsBtns[3].addEventListener("click", (e) => {
  changeActiveBtn(projectsBtns[3]);
  projects
    .filter((p) => p.filter.bootstrap)
    .forEach((project) => createProjectCard(project));
});
