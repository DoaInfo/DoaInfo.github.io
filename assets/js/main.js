// JavaScript
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showSlide(index) {
  if (index < 0) {
    currentIndex = slides.length - 1;
  } else if (index >= slides.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

// Autoplay
let interval = setInterval(() => {
  showSlide(currentIndex + 1);
}, 4000);

carousel.addEventListener('mouseover', () => clearInterval(interval));
carousel.addEventListener('mouseleave', () => {
  interval = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 4000);
});