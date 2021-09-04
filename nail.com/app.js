//查出字型長度的 js
const text = document.querySelectorAll(".thePaths");

for (let i = 0; i < text.length; i++) {
  console.log(`text number  ${i} length is ${text[i].getTotalLength()}`);
}

//animation 終結的 js
const lastWord = document.querySelector("#eighteenth");
const animation = document.querySelector("div.animation");
lastWord.addEventListener("animationend", () => {
  animation.style = "transition: all 3s ease; opacity:0; pointer-events:none;";
});
