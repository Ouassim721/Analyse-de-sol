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
function toggleDropdown() {
    document.querySelector('.dropdown').classList.toggle('show');
  }

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
      var dropdowns = document.getElementsByClassName('dropdown-content');
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  //dark mode & light mode theme
  document.addEventListener('DOMContentLoaded', function() {
    const lightModeButton = document.getElementById('lightMode');
    const darkModeButton = document.getElementById('darkMode');
    
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
    } else {
        document.body.removeAttribute('data-theme');
    }    
    
    lightModeButton.addEventListener('click', function () {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    });    

    darkModeButton.addEventListener('click', function () {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    });    
});

// JavaScript to handle the scroll event
window.addEventListener('scroll', function() {
    var section = document.querySelector('.interet');
    var boxes = document.querySelectorAll('.box');
    var sectionPosition = section.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;

    if (sectionPosition < screenPosition) {
      boxes.forEach(box => {
        box.classList.add('show');
      });
    }else if(sectionPosition > screenPosition){
        boxes.forEach(box => {
            box.classList.remove('show');
          }); 
    }
  });