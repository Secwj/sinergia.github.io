"use strict";

const $bars = document.querySelector(".bars-icon");
const $nav = document.querySelector(".nav");

if (window.innerWidth < 1200){
    $nav.classList.remove("active");
}
        

$bars.addEventListener("click",()=>{
    $nav.classList.toggle("active")
    console.log("activado")
})