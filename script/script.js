console.log(window.innerWidth);
let slideIndex = 1;

showSlider();
function showSlider() {
    var i;
    var slides = document.getElementsByClassName("slider-item");
    var lastIndex = slides.length - 1;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.disply = "none"
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }


    slides[slideIndex - 1].style.display = "inline-block";



    if (slideIndex == 1) {

        slides[lastIndex].style.display = "none";

    } else {

        slides[slideIndex - 2].style.display = "none";

    }

    setTimeout(showSlider, 2000);


}


