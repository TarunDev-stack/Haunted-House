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



// var mySong = document.getElementById("mySong");
// mySong.onload = function () {
//     mySong.play();
// }


// Feedback Form  \\  

// let audio = new Audio(`${assets/zee_horror_show.mp3}`);


// let audio = document.getElementById("audio-main")
// console.log(document.getElementById("audio-main"));
// document.addEventListener("DOMContentLoaded", ()=>{
    
    // // setTimeout( () => {  audio.play().catch (error =>{
    //     console.log(error)
    // }) }, 1000)
//    let playAudio = audio.play();
//    setTimeout( () => { playAudio}, 1000)
    
// } );

// var x = document.getElementById("audio-main");

// function playAudio() {
//     x.play();
// }

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
