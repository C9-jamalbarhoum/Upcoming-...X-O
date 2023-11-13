console.log("jamal");
const body = document.querySelector("body");

const div_Gam = document.createElement("div");
const Games_boxss = document.createElement("div");
Games_boxss.classList.add("box_Games");

div_Gam.classList.add("Games");
const h_1 = document.createElement("h1");
h_1.classList.add("title");

h_1.innerHTML = "X O Games";
div_Gam.append(h_1);

body.append(div_Gam);
div_Gam.append(Games_boxss);

console.log(body);

const but = document.createElement("button");

but.innerHTML = "GO Play";
div_Gam.append(but);

//#############################################################################
const audioPlay = () => {
  const Silent = document.createElement("button");
  Silent.innerHTML = "Silent Music";
  Silent.classList.add("ss");
  div_Gam.append(Silent);

  let audiol = new Audio();

  audiol.src = ".//alexander-nakarada-the-great-battle(chosic.com).mp3";
  //   audiol.play();
  audiol.controls = "controls";
  audiol.classList.add("aud");

  const controls = document.createElement("button");
  controls.innerHTML = "Controls audiol";
  controls.classList.add("controls_audiol");
  div_Gam.append(controls);

  Silent.addEventListener("click", () => {
    audiol.pause();
  });
  let radr = 1;

  controls.addEventListener("click", () => {
    if (radr === 1) {
      div_Gam.append(audiol);
      radr = 2;
      audiol.style.display = "";
    } else {
      radr = 1;
      audiol.style.display = "none";
    }
  });
};

const createBoxing = () => {
  for (let i = 1; i < 10; i++) {
    const div_Box_all = document.createElement("div");
    div_Box_all.classList.add("box" + i);

    Games_boxss.append(div_Box_all);
  }
  but.style.display = "none";
};
// createElement()

let togel = "x";
audioPlay();
createBoxing();
but.addEventListener("click", audioPlay);

but.addEventListener("click", createBoxing);

const b1 = document.querySelector(".box1");
const b2 = document.querySelector(".box2");
const b3 = document.querySelector(".box3");
const b4 = document.querySelector(".box4");
const b5 = document.querySelector(".box5");
const b6 = document.querySelector(".box6");
const b7 = document.querySelector(".box7");
const b8 = document.querySelector(".box8");
const b9 = document.querySelector(".box9");
const title = document.querySelector(".title");
let to = "x";
const rendar = (e) => {
  if (to === "x" && e.target.innerHTML === "") {
    to = "o";
    title.innerHTML = "o";
    e.target.innerHTML = "X";
  } else if (to === "o" && e.target.innerHTML === "") {
    to = "x";
    title.innerHTML = "x";
    e.target.innerHTML = "o";
  }
};

b1.addEventListener("click", rendar);
b2.addEventListener("click", rendar);
b3.addEventListener("click", rendar);
b4.addEventListener("click", rendar);
b5.addEventListener("click", rendar);
b6.addEventListener("click", rendar);
b7.addEventListener("click", rendar);
b8.addEventListener("click", rendar);
b9.addEventListener("click", rendar);
