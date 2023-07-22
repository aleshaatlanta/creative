let nav = document.querySelector ('.header__nav');
let navToggle = document.querySelector ('.navToggle');

navToggle.addEventListener ('click', () => {
    nav.classList.toggle ('header__show');
})