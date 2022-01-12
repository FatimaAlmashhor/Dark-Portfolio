const toggleBtn = document.getElementById('menu');
const nav = document.getElementById('nav');
const navList = document.querySelectorAll('.nav_list > li');
navList.forEach(element => {
    element.addEventListener('click', (e) => {
        e.target.classList.remove('active')
        // console.log(e.target.classList.toggle('active'));
    })
});
let toggle = true;
toggleBtn.addEventListener('click', () => {
    if (toggle) {
        nav.style.width = '180px';
        toggle = false;
    }
    else {
        nav.style.width = '0%';
        toggle = true;
    }
})