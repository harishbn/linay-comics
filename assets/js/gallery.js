document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.strip-gallery');
    if (!gallery) {
        return;
    }

    const strips = gallery.querySelectorAll('.strip');
    const prevBtn = gallery.querySelector('.prev-btn');
    const nextBtn = gallery.querySelector('.next-btn');
    const counter = gallery.querySelector('.strip-counter');
    let currentIndex = 0;
    const totalStrips = strips.length;

    function updateGallery() {
        strips.forEach((strip, index) => {
            strip.style.display = index === currentIndex ? 'block' : 'none';
        });
        counter.textContent = `${currentIndex + 1} / ${totalStrips}`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === totalStrips - 1;
    }

    if (strips.length > 0) {
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateGallery();
            }
        });

        nextBtn.addEventListener('click', () => {
            if (currentIndex < totalStrips - 1) {
                currentIndex++;
                updateGallery();
            }
        });

        updateGallery();
    } else {
        // Hide nav if no strips
        const nav = gallery.querySelector('.gallery-nav');
        if(nav) nav.style.display = 'none';
    }
});
