document.addEventListener('DOMContentLoaded', function () {
  // Selecciona todos los carruseles que tengan imágenes con la clase 'active'
  const carruseles = document.querySelectorAll('[class^="carrusel-"]');
  let indices = Array.from(carruseles, () => 0);

  function mostrarSlides() {
    carruseles.forEach((carrusel, idx) => {
      const slides = carrusel.querySelectorAll('img');
      slides.forEach((img, i) => {
        img.classList.toggle('active', i === indices[idx]);
      });
    });
  }

  function siguienteSlide() {
    carruseles.forEach((carrusel, idx) => {
      const slides = carrusel.querySelectorAll('img');
      indices[idx] = (indices[idx] + 1) % slides.length;
    });
    mostrarSlides();
  }

  // Inicializa
  mostrarSlides();
  setInterval(siguienteSlide, 3500);
});