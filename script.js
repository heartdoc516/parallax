const layer1 = document.getElementById("layer-1");
const layer2 = document.getElementById("layer-2");
const layer3 = document.getElementById("layer-3");
const layer4 = document.getElementById("layer-4");
const layer5 = document.getElementById("layer-5");
const layer6 = document.getElementById("layer-6");
const layer7 = document.getElementById("layer-7");
const layer8 = document.getElementById("layer-8");
const boat1 = document.getElementById("boat-1");
const boat2 = document.getElementById("boat-2");
const boat3 = document.getElementById("boat-3");


function parallax() {
const scrollValue = window.scrollY 
layer1.style.left = "-" + scrollValue * 0.1 + "px";
layer2.style.top = scrollValue * 0.5 + "px";
layer2.style.left = scrollValue * 0.05 + "px";
layer3.style.top = scrollValue * 0.7 + "px";
layer4.style.top = scrollValue * 0.96 + "px";
layer5.style.top = scrollValue * 0.98 + "px";
layer6.style.top = scrollValue * 0.99 + "px";
layer7.style.top = scrollValue * 0.99 + "px";
layer8.style.top = scrollValue + "px";
boat1.style.top = scrollValue * 0.92 + "px"
boat2.style.top = (scrollValue * 0.94)-80 + "px"
boat3.style.top = (scrollValue * 0.96)-50 + "px"
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("animate__animated");
      reveals[i].classList.add("animate__backInLeft");
    } else {
      reveals[i].classList.remove("animate__animated");
      reveals[i].classList.remove("animate__backInLeft");
      reveals[i].style.opacity = "0";
    }
  }
}

window.addEventListener("scroll", parallax,);
window.addEventListener("scroll", reveal,);



