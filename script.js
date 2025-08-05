// Bouton menu déroulant
const toggle = document.getElementById("menu-toggle");
const navItems = document.getElementById("nav-items");

toggle.addEventListener("click", (e) => {
    e.stopPropagation();
    navItems.classList.toggle("show");
});

document.addEventListener("click", (e) => {
    const isClickInsideMenu = navItems.contains(e.target) || toggle.contains(e.target);
    if (!isClickInsideMenu && navItems.classList.contains("show")) {
        navItems.classList.remove("show");
    }
});

//window.addEventListener("resize", () => {
//    if (window.innerWidth > 700) {
//        navItems.classList.remove("show");
//    }
//});