// console.log('hello');
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".mk-nav-menu");
const navLink = document.querySelectorAll(".mk-nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}






// auto year copyright section
let date = new Date();
let year = date.getFullYear();
console.log(date,year);
document.getElementById("autoyear").textContent = year;