let Projectgap = document.getElementById("projects");
let jskill = document.getElementById("js");
let rskill = document.getElementById("react");
let vskill = document.getElementById("vue");

var projects = [
  {
    name: "Black Jack",
    img: "bjThumb.PNG",
    desc: `<div class="pdesc">
    <ul>
    <li>Real drawing and shuffling by randomizing card array</li> </br>
    <li>Aces automatically count as best possible value </li> </br>
    <li>Blackjacks end the round automatically</li> </br>
    <li>Dealer wins draws</li>
    </ul>
    </div>`,
    live: "https://khlover.github.io/Vue---Blackjack/",
    code: "https://github.com/khlover/Vue---Blackjack",
    tools: ["VUE", "JS", "CSS", "HTML"],
  },
  {
    name: "Game Collection",
    img: "gamesThumb.PNG",
    desc: `<div class="pdesc">
    <ul>
    <li>Google firebase authentication</li> </br>
    <li>Users can only see their own games</li> </br>
    <li>Serverless database for game information</li> </br>
    <li>Grid design for displaying games</li>
    </ul>
    </div>`,
    live: "https://khlover.github.io/GameCollection/",
    code: "https://github.com/khlover/GameCollection",
    tools: ["JS", "CSS", "HTML", "Firebase"],
  },

  {
    name: "JTLT",
    img: "jtltThumb.PNG",
    desc: `<div class="pdesc">
    <ul>
    <li>Uses official Twitter Api</li> </br>
    <li>Uses Japanese Dictionary API</li> </br>
    <li>SPA</li> </br>,
    <li>Calls made through custom backend server </li>
    </ul>
    </div>`,
    live: "https://khlover.github.io/jtlt/",
    code: "https://github.com/khlover/jtlt/tree/master/jtlt",
    tools: ["JS", "CSS", "REACT", "HTML"],
  },
];

function sortbytype(e) {
  e = e || window.event;
  e = e.target || e.srcElement;
  console.log(e.id);
  jskill.style.opacity = 0.5;
  rskill.style.opacity = 0.5;
  vskill.style.opacity = 0.5;
  chosen = document.getElementById(e.id).style.opacity = 1;

  while (Projectgap.hasChildNodes()) {
    Projectgap.removeChild(Projectgap.firstChild);
  }

  projects.forEach((project) => {
    if (project.tools.includes(e.id.toUpperCase())) {
      console.log("gotem");
      const newdiv = document.createElement("div");

      let div = `
                <div class = "project">
                <h2 class="pname">${project.name}</h2>
                <img id="icon" height="290px" width="450px" src=${project.img}>
                <span id="links">
                <a class="link" href=${project.live} target="blank"><button>Live</button></a>
                <a class="link" href=${project.code} target="blank"><button>Code</button></a>
                </span> 
                ${project.desc}
                </div>
           `;

      let temp = `<span id="tags">`;
      project.tools.forEach((e) => {
        temp += `<p class="tag"> ${e} </p>`;
      });
      temp += `</span>`;

      newdiv.innerHTML = div += temp;
      Projectgap.appendChild(newdiv);
    }
  });
}
