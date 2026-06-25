const slides = Array.from(document.querySelectorAll(".carousel-slide"));
const previousButton = document.querySelector(".carousel-button.prev");
const nextButton = document.querySelector(".carousel-button.next");
let currentSlide = 0;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === currentSlide);
  });
}

previousButton?.addEventListener("click", () => showSlide(currentSlide - 1));
nextButton?.addEventListener("click", () => showSlide(currentSlide + 1));

setInterval(() => showSlide(currentSlide + 1), 4200);
