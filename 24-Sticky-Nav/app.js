const navUlElement = document.querySelector('nav>ul');
const nav = document.querySelector('#main');
const liLogo = document.querySelector('.logo');

window.addEventListener('scroll', () => {
    const top = nav.getBoundingClientRect().top;

    if (top <= 0) {
        nav.style.position = 'sticky';
        navUlElement.style.top = 0;
        liLogo.style.maxWidth = `100%`;
        liLogo.style.flex = 1;
    } else {
        nav.style.position = 'relative';
        liLogo.style.flex = 0;
    }
});