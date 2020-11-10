// меню бургер
const iconMenu = document.querySelector(".icon-menu");
const menuBody = document.querySelector(".menu__body");

function burger() {
  iconMenu.classList.toggle("active");
  menuBody.classList.toggle("active");
  document.body.classList.toggle("lock");
}

iconMenu.addEventListener("click", burger);

// document.documentElement.addEventListener("click", function (event) {
//   if (
//     !event.target.closest(".menu__body") &&
//     menuBody.classList.contains("active")
//   ) {
//     menuBody.classList.remove("active");
//   }
// });

// функция ibg

function ibg() {
  let ibg = document.querySelectorAll(".ibg");

  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

// плавная прокрутка к якорю при нажатии на "мышку"

const anchors = document.querySelectorAll("a.scroll-to");

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockId = anchor.getAttribute("href");

    document.querySelector(blockId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// движение стрелки при наведении на "мышку"
const arrow = document.querySelector(".content__arrow");

for (let anchor of anchors) {
  anchor.addEventListener("mouseover", function (event) {
    arrow.style.transform = "translateY(20px)";
    arrow.style.transition = "all 0.5s ease-in-out ";
  });
  anchor.addEventListener("mouseout", function (event) {
    document.querySelector(".content__arrow").style.transform =
      "translateY(0px) ";
  });
}
