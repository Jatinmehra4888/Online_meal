const slides = document.querySelectorAll('.slide');
const interval = 5000;

let slideIndex = 0;

const updateSlideshow = () => {
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex++;
    if (slideIndex === slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].classList.add('active');
}

setInterval(updateSlideshow, interval);
