document.addEventListener('DOMContentLoaded', function () {
  const carrusel = document.querySelector('.carrusel');
  const imagenes = carrusel.querySelectorAll('img');
  let actual = 0;

  function mostrarImagen(index) {
    imagenes.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none';
    });
  }

  function siguienteImagen() {
    actual = (actual + 1) % imagenes.length;
    mostrarImagen(actual);
  }

  // Inicializa el carrusel
  mostrarImagen(actual);
  setInterval(siguienteImagen, 3000); // Cambia cada 3 segundos
});