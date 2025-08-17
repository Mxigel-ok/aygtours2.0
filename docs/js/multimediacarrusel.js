document.querySelectorAll('.carousel').forEach(carousel => {
        let imgs = carousel.querySelectorAll('img');
        let index = 0;

        imgs[index].classList.add('active');

        setInterval(() => {
            imgs[index].classList.remove('active');
            index = (index + 1) % imgs.length;
            imgs[index].classList.add('active');
        }, 5000); 
    });