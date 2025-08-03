  const imagenes = document.querySelectorAll('.carrusel img');
  let actual = 0;

  function mostrarSiguiente() {
    imagenes[actual].classList.remove('active');
    actual = (actual + 1) % imagenes.length;
    imagenes[actual].classList.add('active');
  }

  setInterval(mostrarSiguiente, 3000); // Cambia cada 3 segundos