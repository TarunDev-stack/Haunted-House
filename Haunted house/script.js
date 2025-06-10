// custom Cursor // 

var main = document.querySelector("#main");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})


window.onload = function() {
    var audio = document.getElementById('background-audio');
    audio.play();
    audio.loop = true;  
  };




/***************************************** GSAP ANIMATION ***************************/

gsap.from(".content", {
    opacity: 0,
    delay: 1.5,
    y: 500
})
gsap.from(".darna", {
    opacity: 0,
    delay: 1.5,
    x: -900
})
gsap.from(".logo", {
    opacity: 0,
    delay: 1.5,
    x: 10
})
