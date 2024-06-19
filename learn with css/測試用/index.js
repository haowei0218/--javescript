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

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3 * 1000
  },
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})
