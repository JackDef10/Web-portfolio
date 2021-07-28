window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.querySelector(".nav").style.padding = "0px 20px";
    document.getElementById("nav-text").style.fontSize = "1.5em";
    document.querySelector("nav").style.left = "69%";
  } else {
    document.querySelector(".nav").style.padding = "20px 90px";
    document.getElementById("nav-text").style.fontSize = "1.5em";
    document.querySelector("nav").style.left = "32%";
  }
}