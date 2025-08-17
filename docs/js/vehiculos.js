const slides = document.querySelectorAll(".vehiculo-carrusel .slide");
const prevBtn = document.querySelector(".carrusel-flecha.izq");
const nextBtn = document.querySelector(".carrusel-flecha.der");
const indicadores = document.querySelector(".indicadores");

let index = 0;

// Crear puntos indicadores dinámicos
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => mostrarSlide(i));
  indicadores.appendChild(dot);
});

const dots = indicadores.querySelectorAll("span");

function mostrarSlide(n) {
  slides[index].classList.remove("active");
  dots[index].classList.remove("active");
  index = (n + slides.length) % slides.length;
  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

prevBtn.addEventListener("click", () => mostrarSlide(index - 1));
nextBtn.addEventListener("click", () => mostrarSlide(index + 1));

// Auto-cambio cada 8s
setInterval(() => mostrarSlide(index + 1), 8000);
