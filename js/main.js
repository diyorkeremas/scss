const modal = document.querySelector('.nav__mobile-list');
const body = document.querySelector('body');
const btn = document.querySelector('.nav-btn');

btn.addEventListener("click", () => {
    modal.classList.toggle('open');
    body.classList.toggle('overflow');
});