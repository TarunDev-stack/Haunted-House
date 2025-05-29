let navbarDiv = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
        navbarDiv.classList.add('navbar-cng');
    } else {
        navbarDiv.classList.remove('navbar-cng');
    }
});


const navbarCollapseDiv = document.getElementById('navbar-collapse');
const navbarShowBtn = document.getElementById('navbar-show-btn');
const navbarCloseBtn = document.getElementById('navbar-close-btn');
// show navbar
navbarShowBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.add('navbar-collapse-rmw');
});

// hide side bar
navbarCloseBtn.addEventListener('click', () => {
    navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
});

document.addEventListener('click', (e) => {
    if(e.target.id != "navbar-collapse" && e.target.id != "navbar-show-btn" && e.target.parentElement.id != "navbar-show-btn"){
        navbarCollapseDiv.classList.remove('navbar-collapse-rmw');
    }
});

// stop transition and animatino during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
});

// custom Cursor //
 var main =document.querySelector("#main");
 var crsr = document.querySelector(".cursor");
 main.addEventListener("mousemove",function(dets){
    crsr.style.left= dets.x+"px"
    crsr.style.top= dets.y +"px"
 })
 /* const cursorDot = document.querySelector("[data-cursor-dot]");
  const cursorOutline =document.querySelector("[data-cursor-outline]");
   window.addEventListener("mousemove",function(e)
{
    const posx =e.clientX;
    const posY =e.clientY;

    cursorDot.style.left =`${posX}px`;
    cursorDot.style.top =`${posY}px`;

    cursorOutline.animate({
        left:`${posX}px`,
        top:`${posY}px`
        
    },{
        duration:500, fill:"forward"
    });
})*/