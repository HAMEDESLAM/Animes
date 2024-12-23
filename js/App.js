// BOOTSTRAP
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// TO TOP BUTTON
let totop = document.getElementById("totop")
window.onscroll = function() {
    const landingHeight = document.querySelector('.landing').offsetHeight;
    if(window.scrollY >= landingHeight){
        totop.style.opacity = "1";
        totop.style.zIndex = "100000000";
        totop.style.position = "static !important";
    }
    else{
        totop.style.opacity = "0";
        totop.style.zIndex = "-1";
        totop.style.position = "absolute !important";
    }
};

// SLIDER
let btn = document.getElementsByClassName("carousel-control-next")[0];
let handle = setInterval(() => {
    btn.click();  
},15000)
