window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        document.getElementById("hero").classList.add("hero-nav");
    } else {
        document.getElementById("hero").classList.remove("hero-nav");
    }
  }

