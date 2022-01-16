const imageHover = document.querySelectorAll('.gallery_item')

// hoving image 
imageHover.forEach(element => {
    // element.childNodes[1].style.setProperty("--background", "rgba(0,0,0,0.4)")
    element.addEventListener('mouseenter', () => {
        element.childNodes[1].style.transform = 'perspective(100px) translateZ(25px)'
    })
    element.addEventListener('mouseleave', () => {
        element.childNodes[1].style.transform = 'perspective(100px) translateZ(10px)'
    })

})

function imageActive() {
    let active = Math.floor(Math.random() * 6);
    imageHover.forEach(element => {
        element.childNodes[1].style.setProperty("--background", "rgba(0,0,0,0.4)")
    })
    imagebefore = imageHover[active].childNodes[1]
    imagebefore.style.setProperty("--background", "transparent")

}


//try something else 
const time = setInterval(imageActive, 1000);

