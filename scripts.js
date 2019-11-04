// SCROLL BEHAVIOUR FOR HERO/NAV SECTION

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("hero").classList.add("hero-small");
    } else {
        document.getElementById("hero").classList.remove("hero-small");
    }

    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementsById("form-margin").classList.add("form-margin-small");
    } else {
        document.getElementsById("form-margin").classList.remove("form-margin-small");
    }  
  }

// MOBILE SITE HAMBURGER MENU

const nav = document.querySelector('.nav');
const closeButton = document.querySelector('.nav-btn-close');
const openButton = document.querySelector('.nav-btn-open');

closeButton.addEventListener("click", () => {
    nav.classList.remove('nav-opened');
});

openButton.addEventListener("click", () => {
    nav.classList.add('nav-opened');
    console.log("clicked");
})

  

