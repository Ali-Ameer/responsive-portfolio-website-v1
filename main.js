const open_menu = document.querySelector(".open-menu-btn");
const close_menu = document.querySelector(".close-menu-btn");
const menu = document.querySelector(".nav-menu")


open_menu.addEventListener("click", () => {
    menu.style.display = "block";
    close_menu.style.display = "inline-block";
    open_menu.style.display = "none";
    
    
})
const closenav = () => {
    menu.style.display = "none";
    close_menu.style.display = "none";
    open_menu.style.display = "inline-block";
}

close_menu.addEventListener("click", closenav);

if (window.innerWidth < 1024) {
    document.querySelectorAll(".nav-menu li a").forEach(item => {
        item.addEventListener("click", closenav);
    })
}

window.addEventListener("scroll", () => {
    document.querySelector("nav").classList.toggle("nav-bg-scroll", window.scrollY > 0 )
} )