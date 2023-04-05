const arrow = document.querySelectorAll(".header-arrow");
for (i=0; i<arrow.length; i++) {
    let thisLink = arrow[i].previousElementSibling;
    let subMenu = arrow[i].nextElementSibling;
    let thisArrow = arrow[i];
    thisLink.classList.add("parent");
    arrow[i].addEventListener("click", function() {
        subMenu.classList.toggle("_open");
        thisArrow.classList.toggle("_open");
    });
}
const burgerMenu = document.querySelector(".header__burger");
burgerMenu.addEventListener("click", function() {
    headerMenu = document.querySelector(".header__menu");
    burgerMenu.classList.toggle("_open");
    headerMenu.classList.toggle("_open");
    document.body.classList.toggle("_lock");
})