let slidePosition = 0;
let imageCount = 0;

//carousel image
const slides = document.getElementsByClassName('carousel_item');

//number of images in gallery for carousel
const totalSlides = slides.length;
// console.log(totalSlides); TO Test for images

//button actions
document.getElementById('carousel_button_prev')
    .addEventListener("click", function() {
        movetoPrevSlide();
    })

document.getElementById('carousel_button_next')
.addEventListener("click", function() {
    movetoNextSlide();
})

//button functions
function updateSlidePosition(){
    //FIX ME - get it to where it shows three images
    for(let slide of slides){
        slide.classList.remove('carousel_item--visible');
        slide.classList.add('carousel_item--hidden');
    }
    slides[slidePosition].classList.add('carousel_item--visible');   
}

function movetoPrevSlide(){
    if (slidePosition === 0){
        slidePosition = 0;
    }
}
function movetoNextSlide(){
    if (slidePosition === totalSlides - 1){
        slidePosition = 0;
    } else {
        slidePosition ++;
    }
    for (let i = 0; i <= 3; i++){
        updateSlidePosition();
        console.log(totalSlides);  
    }

}