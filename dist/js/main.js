
// Preload images
const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
    });
};

// Preload images
const preloadFonts = (id) => {
    return new Promise((resolve) => {
        WebFont.load({
            typekit: {
                id: id
            },
            active: resolve
        });
    });
};
Promise.all([preloadImages('.tiles__line-img'), preloadFonts('rmd7deq')]).then(() => {
    // Remove loader (loading class)
    document.body.classList.remove('loading');

    backtopEl.addEventListener('click', () => scroll.scrollTo(headerEl));
});


/*find out more @ https://github.com/Shadow-Scientist/marshmallow-comet*/