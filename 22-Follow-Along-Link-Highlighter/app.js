const aTags = document.querySelectorAll('a');
console.log(aTags);

aTags.forEach(aTag => {
    aTag.addEventListener('mouseover', (e) => {
        e.preventDefault();
        console.log(e.target);
        e.target.classList.toggle('.highlight');
    });
});
