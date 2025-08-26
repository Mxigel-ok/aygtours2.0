let index = 0;
let slides = document.querySelectorAll(".carruselsl .slide");
let timer;

function showSlide(n) {
  slides.forEach(slide => slide.classList.remove("active"));
  
  if (n >= slides.length) index = 0;
  else if (n < 0) index = slides.length - 1;
  else index = n;
  
  slides[index].classList.add("active");
}

function autoSlide() {
  index++;
  showSlide(index);
  timer = setTimeout(autoSlide, 6000); // cada 6s
}

document.querySelector(".prev").addEventListener("click", () => {
  clearTimeout(timer); 
  showSlide(index - 1);
  timer = setTimeout(autoSlide, 6000);
});

document.querySelector(".next").addEventListener("click", () => {
  clearTimeout(timer);
  showSlide(index + 1);
  timer = setTimeout(autoSlide, 6000);
});

// Iniciar
showSlide(index);
autoSlide();
