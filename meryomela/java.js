const modalBtn = document.getElementById("mod-ac");
const modal = document.querySelector(".login-wrap");
const modalKapat = document.getElementById("mod-kapat");

modalBtn.addEventListener("click", () => {

    modal.style.display = "flex"
});
modalKapat.addEventListener("click", () => {

    modal.style.display = "none"
});

const modalBtn1 = document.getElementById("mod-ac1");
const modal1 = document.querySelector(".login-wrap");
const modalKapat1 = document.getElementById("mod-kapat");

modalBtn1.addEventListener("click", () => {

    modal1.style.display = "flex"
});
modalKapat1.addEventListener("click", () => {

    modal1.style.display = "none"
});




var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
}