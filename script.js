window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.boxShadow = "0 0 20px rgba(0,0,0,0.3)";
    }
    else{
        header.style.boxShadow = "none";
    }
    /* =======================
   GALERI FOTO OTOMATIS
======================= */

const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

function nextSlide() {

    slides[currentSlide].classList.remove('active');

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000);

});