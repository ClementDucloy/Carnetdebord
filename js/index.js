console.log("Loading Index");

const rickroll = document.getElementById("rickroll");
const close = document.getElementById("byeclose");
const open = document.getElementById("ssssh");
const video = rickroll.querySelector('video'); 

open.addEventListener('click', () => {
    rickroll.showModal();
    video.muted = false;
    video.currentTime = 0; 
    video.play();
}); 

close.addEventListener('click', () => {
    video.pause(); 
    video.muted = true; 
    rickroll.close(); 
});


let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName('slides'); 
    let dots = document.getElementsByClassName('dot');
    
    console.log(slides);
    console.log(dots);
    
    if (n > slides.length) { slideIndex = 1; }
        
    if (n < 1) { slideIndex = slides.length; }
    
    for (let i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none";
    }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    if (slides.length > 0) {
        slides[slideIndex - 1].style.display = 'block';
    }
    
    if (dots.length > 0 && dots[slideIndex - 1]) {
        dots[slideIndex - 1].classList.add('active');
    }
}
 
function plusSlides(n) {
    showSlides(slideIndex += n);
}
 
function currentSlide(n) {
    showSlides(slideIndex = n);
}