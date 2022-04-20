// const open = document.querySelector('.open');
// const close = document.querySelector('.closed');

// close.addEventListener('click', () => {
//   if (close.classList.contains('close')) {
//     close.classList.add('open');
//   } else {
//     close.classList.add('open');
//   }
// });
const openFace = document.querySelector(".open");
const closedFace = document.querySelector(".close");

closedFace.addEventListener("click", () => {
  if (openFace.classList.contains("open")) {
    openFace.classList.add("active");
    closedFace.classList.remove("active");
  }
});
openFace.addEventListener("click", () => {
  if (closedFace.classList.contains("close")) {
    closedFace.classList.add("active");
    openFace.classList.remove("active");
  }
});

const openText = document.querySelector(".open-text");
const closedText = document.querySelector(".closed-text");

closedFace.addEventListener("click", () => {
  if (openText.classList.contains("open-text")) {
    openText.classList.add("active-1");
    closedText.classList.remove("active-1");
  }
});
openFace.addEventListener("click", () => {
  if (closedText.classList.contains("close-text")) {
    closedText.classList.add("active-1");
    openText.classList.remove("active-1");
  }
});
