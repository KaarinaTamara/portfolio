// MOBILE HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// nav menu closes when you click a link
const navLink = document.querySelectorAll(".navLink");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// PICTURE CAROUSEL -- through online tutorial (https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9)
!(function(d) {
    const itemClassName = "carouselPhoto";
    items = d.getElementsByClassName(itemClassName),
    totalItems = items.length, 
    slide = 0, 
    moving = true; 

}(document));

