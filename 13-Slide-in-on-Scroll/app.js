const imgElements = document.querySelectorAll('img');
const clientHeight = document.documentElement.clientHeight;

window.addEventListener('scroll', debounce(scrollHandler));

function scrollHandler() {
    const scrollTop = document.documentElement.scrollTop;

    imgElements.forEach(imgEl => {
        const imgHeight = imgEl.clientHeight
        // Upper Half of the image
        const scrollAt = (scrollTop + clientHeight) - imgEl.clientHeight / 2
        const imageBottom = imgEl.offsetTop + imgHeight;
        
        const isHalfImageSee = scrollAt > imgEl.offsetTop;
        const isNotScrollPast = scrollTop < imageBottom

        if (isHalfImageSee && isNotScrollPast ) {
            imgEl.classList.add('active');
        } else {
            imgEl.classList.remove('active');
        }
    })
}

// given it by wesbos, not written
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
}