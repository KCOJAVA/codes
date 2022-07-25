const hamburger = document.getElementById("hamburger");
const menue = document.getElementById("menue");

hamburger.addEventListener("click", ()=> {
    menue.classList.toggle("switch");
});