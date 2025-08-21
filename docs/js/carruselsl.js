let index = 0;
let slides = document.querySelectorAll(".carruselsl .slide");
let timer;

// Mostrar una slide
function showSlide(n) {
  slides.forEach(slide => slide.classList.remove("active"));
  
  if (n >= slides.length) index = 0;
  else if (n < 0) index = slides.length - 1;
  else index = n;
  
  slides[index].classList.add("active");
}

// Automático
function autoSlide() {
  index++;
  showSlide(index);
  timer = setTimeout(autoSlide, 4000); // cada 4s
}

// Botón anterior
document.querySelector(".prev").addEventListener("click", () => {
  clearTimeout(timer); // detener autoplay
  showSlide(index - 1);
  timer = setTimeout(autoSlide, 4000); // reiniciar
});

// Botón siguiente
document.querySelector(".next").addEventListener("click", () => {
  clearTimeout(timer);
  showSlide(index + 1);
  timer = setTimeout(autoSlide, 4000);
});

// Iniciar
showSlide(index);
autoSlide();
