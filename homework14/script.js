
const slider = document.getElementById('slider');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const slides = Array.from(slider.querySelectorAll('.slide'));
const slideCount = slides.length;
let slideIndex = 0;
const dots = document.getElementById('dots');


slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        slideIndex = index;
        updateSlider();
    });
    dots.appendChild(dot);
});



function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
    if (slideIndex === 0) {
        btnPrev.disabled = true;
    } else {
        btnPrev.disabled = false;
    }

    if (slideIndex === slides.length - 1) {
        btnNext.disabled = true;
    } else {
        btnNext.disabled = false;
    }
    const allDots = dots.querySelectorAll('.dot');
    allDots.forEach((dot, index) => {
        dot.classList.toggle('active', index === slideIndex);
    });
}

updateSlider();




