const menuButton = document.querySelector(".button--menu-open");
function switchMenuButton() {
  if (menuButton.classList.contains("button--menu-open")) {
    menuButton.classList.remove("button--menu-open");
    menuButton.classList.add("button--menu-close");
  } else {
    menuButton.classList.remove("button--menu-close");
    menuButton.classList.add("button--menu-open");
  }
}

const nav = document.querySelector(".navigation");
const navMenuToggle = document.querySelector(".navigation__menu-toggle");
nav.classList.remove("navigation--nojs");
navMenuToggle.addEventListener("click", function() {
  if (nav.classList.contains("navigation--collapsed")) {
    nav.classList.remove("navigation--collapsed");
  } else {
    nav.classList.add("navigation--collapsed");
  }
  switchMenuButton();
});

function showModal() {
  modal.classList.remove("page-body__modal--hidden");
  addListenerToPutToCart(() => modal.classList.add("page-body__modal--hidden"));
}

const modal = document.querySelector(".page-body__modal");
modal?.addEventListener("click", function(event) {
  if (this === event.target) {
    this.classList.add("page-body__modal--hidden");
  }
});

const modalShowButtons = document.querySelectorAll(".product-card__button");
modalShowButtons.forEach(button => {
  button.addEventListener("click", showModal)
});

function addListenerToPutToCart(eventHandlerCallback) {
  document.querySelector(".put-to-cart__button")?.addEventListener("click", eventHandlerCallback);
}

const slider = document.querySelector(".slider__list");
const slides = Array.from(document.querySelectorAll(".slider__item"));
const previousButton = document.querySelector(".slider__button--previous");
const nextButton = document.querySelector(".slider__button--next");
nextButton?.addEventListener('click', () => {
  if (slider.scrollLeft + slider.clientWidth === slider.scrollWidth) {
    slider.scrollBy({
      left: -slider.scrollLeft
    });
  } else {
    slider.scrollBy({
      left: slider.clientWidth
    });
  }
});
previousButton?.addEventListener('click', () => {
  if (slider.scrollLeft === 0) {
    slider.scrollBy({
      left: slider.scrollWidth - slider.clientWidth
    });
  } else {
    slider.scrollBy({
      left: -slider.clientWidth
    });
  }
});

const modalShowButton = document.querySelector(".weekly-goods__button");
modalShowButton?.addEventListener("click", showModal);
