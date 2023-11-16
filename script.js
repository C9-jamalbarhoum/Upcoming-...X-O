const body = document.querySelector("body");
const bg = document.querySelector(".body-box");
const box = document.createElement("div");
const s = document.querySelector(".s");
const total_x = document.querySelector(".total");
const total_o = document.querySelector(".o");
total_o.style.display = "none";
total_x.style.color = "red";
total_x.style.display = "none";
box.classList.add("box");
const resat_but = document.createElement("button");
resat_but.innerHTML = "Restart";
resat_but.classList.add("resat");

const title = document.querySelector(".title");
const all_box = document.querySelectorAll(".sm");
const play_but = document.querySelector(".Play");

play_but.addEventListener("click", () => {
  play_but.style.display = "none";
  total_x.style.display = "";
  total_o.style.display = "";
  bg.append(resat_but);
  s.append(box);
  Create_box();
  song_touch();
});
const song_win_1 = () => {
  let aud = new Audio(
    ".//mixkit-arcade-game-complete-or-approved-mission-205.wav"
  );
  aud.play();
};
const song_x = () => {
  let aud = new Audio(".//mixkit-arcade-video-game-bonus-2044.wav");
  aud.play();
};
const song_touch = () => {
  let aud = new Audio(".//mixkit-game-ball-tap-2073.wav");
  aud.play();
};

const song_win = () => {
  let aud = new Audio(".//mixkit-trumpet-fanfare-2293.wav");
  aud.play();
};
const song_lose = () => {
  let aud = new Audio(".//mixkit-completion-of-a-level-2063.wav");
  aud.play();
};

let swi = false;

const Create_box = () => {
  for (let i = 1; i <= 9; i++) {
    const all_box = document.querySelectorAll(".sm");
    let dv = document.createElement("div");
    dv.classList.add("z" + i);
    dv.classList.add("sm");
    box.append(dv);

    dv.addEventListener("click", (e) => {
      if (dv.innerHTML !== "") {
        song_x();
      }
      if (dv.innerHTML === "") {
        song_touch();
      }
      if (!swi) {
        Games(e, dv, all_box);
        compare(e, dv, all_box);
      }
    });
  }
};

let bom = "x";

const Games = (e, dv) => {
  if (bom === "x" && e.target.innerHTML === "") {
    bom = "o";
    title.innerHTML = "o";

    e.target.innerHTML = "x";
  } else if (bom === "o" && e.target.innerHTML === "") {
    bom = "x";
    title.innerHTML = "x";
    e.target.innerHTML = "o";
  }
};

const compare = (e, dv) => {
  const all_box = document.querySelectorAll(".sm");

  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  for (let i = 0; i < arr.length; i++) {
    let row1 = all_box[arr[i][0]].innerHTML;
    let row2 = all_box[arr[i][1]].innerHTML;
    let row3 = all_box[arr[i][2]].innerHTML;

    let col_1 = all_box[arr[0][i]].innerHTML;
    let col_2 = all_box[arr[1][i]].innerHTML;
    let col_3 = all_box[arr[2][i]].innerHTML;

    let x_1 = all_box[arr[0][0]].innerHTML;
    let x_2 = all_box[arr[1][1]].innerHTML;
    let x_3 = all_box[arr[2][2]].innerHTML;

    let x_4 = all_box[arr[0][2]].innerHTML;
    let x_5 = all_box[arr[1][1]].innerHTML;
    let x_6 = all_box[arr[2][0]].innerHTML;
    if (col_1 === col_2 && col_2 === col_3 && col_1 !== "") {
      title.innerHTML = `${col_1} : He Won `;
      end(col_1, col_2, col_3, dv);
    }

    if (row1 === row2 && row2 === row3 && row1 !== "") {
      title.innerHTML = `${row1} : He Won `;
      end(row1, row2, row3, dv);
    }
    if (x_1 === x_2 && x_2 === x_3 && x_1 !== "") {
      title.innerHTML = `${x_1} : He Won `;
      end(x_1, x_2, x_3, dv);
      break;
    }
    if (x_4 === x_5 && x_5 === x_6 && x_4 !== "") {
      title.innerHTML = `${x_4} : He WOn `;

      end(x_4, x_5, x_6, dv);
      break;
    }
    if (
      row1 !== "" &&
      row2 !== "" &&
      row3 !== "" &&
      col_1 !== "" &&
      col_2 !== "" &&
      col_3 !== "" &&
      x_1 !== "" &&
      x_2 !== "" &&
      x_3 !== "" &&
      x_4 !== "" &&
      x_5 !== "" &&
      x_6 !== ""
    ) {
      title.innerHTML = `Draw`;
      swi = false;
      all_box.forEach((e) => {
        song_lose();
        setTimeout(() => {
          title.innerHTML = "X O Games";
          e.innerHTML = "";
        }, 1500);
      });
      break;
    }
  }

  resat_but.addEventListener("click", (e) => {
    all_box.forEach((e) => {
      e.innerHTML = "";
      title.innerHTML = "X O Games";
    });
  });
};

console.log(localStorage);

let xCount = 0;
let oCount = 0;

const end = (box1) => {
  song_win_1();
  swi = true;
  const all_box = document.querySelectorAll(".sm");
  all_box.forEach(function (e) {
    setTimeout(() => {
      title.innerHTML = "X O Games";
      e.innerHTML = "";
      swi = false;
    }, 2000);
  });

  let O_ = document.querySelector(".o_");
  let X_ = document.querySelector(".x_");
  if (box1 === "x") {
    X_.innerHTML += " :)";
  }
  if (box1 === "o") {
    O_.innerHTML += " :)";
  }
  const gif = document.querySelector(".imW");
  if (X_.innerHTML === "= :) :) :)") {
    const local_x = document.querySelector(".locx");

    xCount++;
    localStorage.setItem("xCount", xCount);

    local_x.innerHTML = `X = ${xCount}`;

    gif.style.display = "inline";
    song_win();
    setTimeout(() => {
      O_.innerHTML = "=";
      X_.innerHTML = "=";
      title.innerHTML = `X O Games`;

      gif.style.display = "none";
    }, 4000);
  }

  if (O_.innerHTML === "= :) :) :)") {
    const local_o = document.querySelector(".loco");

    oCount++;
    localStorage.setItem("oCount", oCount);
    local_o.innerHTML = `O = ${oCount}`;

    song_win();

    gif.style.display = "inline";
    setTimeout(() => {
      X_.innerHTML = "=";
      O_.innerHTML = "=";

      gif.style.display = "none";
      title.innerHTML = `X O Games`;
    }, 4000);
  }
};
if (location) {
  const local_o = document.querySelector(".loco");
  const local_x = document.querySelector(".locx");

  oCount = localStorage.getItem("oCount") * 1;
  xCount = localStorage.getItem("xCount") * 1;

  local_o.innerHTML = `O = ${localStorage.getItem("oCount") * 1}`;
  local_x.innerHTML = `X = ${localStorage.getItem("xCount") * 1}`;
}
resat_but.addEventListener("click", () => {
  const local_o = document.querySelector(".loco");
  const local_x = document.querySelector(".locx");
  localStorage.clear();
  local_o.innerHTML = ` O = ${0}`;
  local_x.innerHTML = ` X = ${0}`;
  xCount = 0;
  oCount = 0;
});
