let menu = document.getElementById("menu");
let close = document.querySelector(".close")
let hamburger = document.querySelector(".bars");
let logo = document.querySelector(".logo");

console.log(menu);
hamburger.addEventListener("click", () => {
    hamburger.classList.add("hide_bars");
    menu.classList.toggle("active");
    close.classList.toggle("show-close");
    logo.classList.add("hide_logo")
})

close.addEventListener('click', () => {
    hamburger.classList.remove('hide_bars')
    menu.classList.toggle('active')
    close.classList.toggle('show-close');
    logo.classList.remove('hide_logo')
  })


  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
