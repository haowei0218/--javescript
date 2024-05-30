// script.js
const testBlock = document.querySelector(".testBlock");
const downButton = document.querySelector(".down");

window.setTimeout(() => {
  downButton.addEventListener("click", () => {
    testBlock.classList.toggle("expanded");

    if (testBlock.classList.contains("expanded")) {
      downButton.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
    } else {
      downButton.innerHTML = '<i class="fa-solid fa-caret-down"></i>';
    }
  });
}, 1000);
