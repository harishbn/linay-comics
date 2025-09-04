document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.strip-gallery');
    if (!gallery) {
        return;
    }

    const strips = gallery.querySelectorAll('.strip');
    const prevBtn = gallery.querySelector('.prev-btn');
    const nextBtn = gallery.querySelector('.next-btn');
    const prevArrow = gallery.querySelector('.prev-arrow');
    const nextArrow = gallery.querySelector('.next-arrow');
    const counter = gallery.querySelector('.strip-counter');
    let currentIndex = 0;
    const totalStrips = strips.length;

    function updateGallery() {
        strips.forEach((strip, index) => {
            strip.style.display = index === currentIndex ? 'block' : 'none';
        });
        counter.textContent = `${currentIndex + 1} / ${totalStrips}`;
        
        const onFirst = currentIndex === 0;
        const onLast = currentIndex === totalStrips - 1;

        prevBtn.disabled = onFirst;
        prevArrow.disabled = onFirst;
        nextBtn.disabled = onLast;
        nextArrow.disabled = onLast;
    }

    function showPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateGallery();
        }
    }

    function showNext() {
        if (currentIndex < totalStrips - 1) {
            currentIndex++;
            updateGallery();
        }
    }

    if (strips.length > 1) {
        prevBtn.addEventListener('click', showPrev);
        prevArrow.addEventListener('click', showPrev);

        nextBtn.addEventListener('click', showNext);
        nextArrow.addEventListener('click', showNext);

        updateGallery();
    } else {
        // Hide nav if only one strip
        const nav = gallery.querySelector('.gallery-nav');
        if(nav) nav.style.display = 'none';
        if(prevArrow) prevArrow.style.display = 'none';
        if(nextArrow) nextArrow.style.display = 'none';
    }
});
