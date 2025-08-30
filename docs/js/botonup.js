  const btnUp = document.getElementById("btnUp");

  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      btnUp.style.display = "block";
    } else {
      btnUp.style.display = "none";
    }
  };
  

  btnUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });