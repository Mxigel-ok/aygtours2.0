document.addEventListener('DOMContentLoaded', function () {
  const carrusel = document.querySelector('.carrusel');
  const imagenes = carrusel.querySelectorAll('img');
  const btnIzq = carrusel.querySelector('.carrusel-flecha.izq');
  const btnDer = carrusel.querySelector('.carrusel-flecha.der');
  let actual = 0;
  let intervalo;

  function mostrarImagen(index) {
    imagenes.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function siguienteImagen() {
    actual = (actual + 1) % imagenes.length;
    mostrarImagen(actual);
  }

  function anteriorImagen() {
    actual = (actual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(actual);
  }

  mostrarImagen(actual);
  intervalo = setInterval(siguienteImagen, 3000);

  btnDer.addEventListener('click', () => {
    siguienteImagen();
    reiniciarIntervalo();
  });
  btnIzq.addEventListener('click', () => {
    anteriorImagen();
    reiniciarIntervalo();
  });

  function reiniciarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(siguienteImagen, 3000);
  }
});