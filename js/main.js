var elModalTogleButton = document.querySelector(".header-intro__hamburger");
var elModal = document.querySelector(".header-intro__header-box");

elModalTogleButton.addEventListener("click", function(){
    elModal.classList.toggle("header-intro__open-box");
})