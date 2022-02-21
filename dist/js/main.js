
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



/*find out more @ https://github.com/Shadow-Scientist/marshmallow-comet*/