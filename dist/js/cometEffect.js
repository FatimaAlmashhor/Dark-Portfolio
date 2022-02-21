var colors = [
    'rgb(0,190,255)', // relaxing blue
    'rgb(255,255,255)', // white
    'rgb(0,160,255)', // another relaxing blue
    'orange', // favorite fruit ;P
    'rgb(240,245,250)', // bluish grey
    'rgb(230,60,0)' // sauce red
];

// rather not to mention it
var cont = document.querySelector("#container-comet");

function random(min, max, round) {
    var p = min + Math.random() * (max - min);
    return (round ? Math.round(p) : p);
}

function comet() {
    // capturing mouse x and y
    var e = window.event,
        x = e.pageX || e.clientX, // x-coordinates,
        y = e.pageY || e.clientY; // y-coordinates of the cursor

    // number of divs created at a time
    rnd = random(1, 9, true);

    for (var i = 0; i < rnd; i++) {
        var pp = document.createElement("div");
        pp.className = 'particle';

        // size
        var d = random(10, 60); // 10-60 is d = diamiter?!?
        pp.style.width = d + "px";
        pp.style.height = d + "px";

        // setting coordinates of the div
        pp.style.left = (x + random(-15, 15) - (d / 2)) + "px";
        pp.style.top = (y + random(-15, 15) - (d / 2)) + "px";

        // colors-variations-randomness
        which_color = random(0, colors.length - 1, true);
        pp.style.backgroundColor = colors[which_color];
        pp.style.borderRadius = random(10, 50) + "%";

        // shift it away to make the animation live
        shiftX = random(-200, 200);
        shiftY = random(-200, 200);

        // adding a little delay before each animation
        delay = (random(10, 40) / 1000) + 's'; // diving by 1000 to convert ms to seconds

        // js variables --> [data injecting] --> css variables
        pp.style.setProperty('--i', delay); //delay
        pp.style.setProperty('--shiftX', shiftX + 'px'); //shift x coords
        pp.style.setProperty('--shiftY', shiftY + 'px'); //shift y coords

        // the KILL function
        pp.addEventListener('animationend', function () {
            this.outerHTML = "";
        });

        // may be Chrome needs a -webkit prefix?
        pp.addEventListener('webkitAnimationEnd', function () {
            this.outerHTML = "";
        });

        // finally append the div
        cont.appendChild(pp);
    }
}