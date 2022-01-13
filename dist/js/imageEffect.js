const imageHover = document.querySelectorAll('.gallery_item')

let active = 0;
// hoving image 
imageHover.forEach(element => {

    element.addEventListener('mouseenter', () => {
        element.childNodes[1].style.transform = 'perspective(100px) translateZ(25px)'
    })
    element.addEventListener('mouseleave', () => {
        element.childNodes[1].style.transform = 'perspective(100px) translateZ(10px)'
    })

})



//try something else 
const time = setTimeout(function () {
    console.log(imageHover[active])
    // active++;
    // if (active >= 6) {
    //     active = 0;
    // }
}, 100);

