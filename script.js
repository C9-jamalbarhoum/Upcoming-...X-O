// console.log(text.innerText = "x");

const body = document.querySelector("body");
const bg = document.querySelector(".body-box");
const box = document.querySelector(".box");
const title = document.querySelector(".title");
const all_box = document.querySelectorAll(".sm");

const Create_box = () => {
  for (let i = 1; i <= 9; i++) {
    const all_box = document.querySelectorAll(".sm");
    let dv = document.createElement("div");
    dv.classList.add("z" + i);
    dv.classList.add("sm");
    box.append(dv);

    dv.addEventListener("click", (e) => {
      Games(e, dv, all_box);
    });
    dv.addEventListener("click", (e) => {
      win(e, dv, all_box);
    });
  }
};
Create_box();

let bom = "x";
const Games = (e, dv) => {
  const all_box = document.querySelectorAll(".sm");
  // console.log("jamal");
  // console.log(all_box);
  // console.log(e.target.innerHTML);
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

const win = (e, dv) => {
  const all_box = document.querySelectorAll(".sm");
  // console.log(all_box);
  // const arr = [
  //   [0, 1, 2],
  //   [3, 4, 5],
  //   [6, 7, 8],
  // ];

  // for (let i = 0; i <= arr.length; i++) {

  //   let bxCol_1 = all_box[arr[0][i]].innerHTML;
  //   let bxCol_2 = all_box[arr[1][i]].innerHTML;
  //   let bxCol_3 = all_box[arr[2][i]].innerHTML;

  //  if(bxCol_1===bxCol_2&& bxCol_2 ===bxCol_3 && bxCol_1 !== ""){

  //   title.innerHTML = `${bxCol_1}  He won`

  //  }

  // }

  if (
    B_1.innerHTML === B_2.innerHTML &&
    B_2.innerHTML === B_3.innerHTML &&
    B_2.innerHTML !== ""
  ) {
    title.innerText = ` ${B_1.innerHTML}  : He won`;
  }
  if (
    B_4.innerHTML === B_5.innerHTML &&
    B_5.innerHTML === B_6.innerHTML &&
    B_6.innerHTML !== ""
  ) {
    title.innerText = ` ${B_5.innerHTML}  : He won`;
  }
  if (
    B_7.innerHTML === B_8.innerHTML &&
    B_8.innerHTML === B_9.innerHTML &&
    B_7.innerHTML !== ""
  ) {
    title.innerText = ` ${B_7.innerHTML}  : He won`;
  }
  if (
    B_1.innerHTML === B_4.innerHTML &&
    B_4.innerHTML === B_7.innerHTML &&
    B_1.innerHTML !== ""
  ) {
    title.innerText = ` ${B_1.innerHTML}  : He won`;
  }
  if (
    B_2.innerHTML === B_5.innerHTML &&
    B_5.innerHTML === B_8.innerHTML &&
    B_2.innerHTML !== ""
  ) {
    title.innerText = ` ${B_2.innerHTML}  : He won`;
  }
  if (
    B_3.innerHTML === B_6.innerHTML &&
    B_6.innerHTML === B_9.innerHTML &&
    B_3.innerHTML !== ""
  ) {
    title.innerText = ` ${B_6.innerHTML}  : He won`;
  }
  if (
    B_1.innerHTML === B_5.innerHTML &&
    B_5.innerHTML === B_9.innerHTML &&
    B_1.innerHTML !== ""
  ) {
    title.innerText = ` ${B_5.innerHTML}  : He won`;
  }
  if (
    B_3.innerHTML === B_5.innerHTML &&
    B_5.innerHTML === B_7.innerHTML &&
    B_5.innerHTML !== ""
  ) {
    title.innerText = ` ${B_5.innerHTML}  : He won`;
  }
};

const B_1 = document.querySelector(".z1");
const B_2 = document.querySelector(".z2");
const B_3 = document.querySelector(".z3");
const B_4 = document.querySelector(".z4");
const B_5 = document.querySelector(".z5");
const B_6 = document.querySelector(".z6");
const B_7 = document.querySelector(".z7");
const B_8 = document.querySelector(".z8");
const B_9 = document.querySelector(".z9");
