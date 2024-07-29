const nav = document.querySelector("#main-menu");
const menuBtn = document.querySelector("#menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click",() => {
    nav.classList.toggle("show-mobile-menu");
});

menuBtn.addEventListener("click",() => {
    menuBtn.classList.toggle("hidden");
});

closeMenuBtn.addEventListener("click",() => {
    menuBtn.click();
});

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) { // Adjust this value based on when you want the background to change
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
