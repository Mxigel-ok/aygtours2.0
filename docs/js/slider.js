document.querySelectorAll(".slider").forEach((slider) => {
  let slides = slider.querySelectorAll("img");
  let index = 0;

  slides[0].classList.add("active");

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);
});
