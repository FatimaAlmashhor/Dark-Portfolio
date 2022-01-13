const toggleBtn = document.getElementById('menu');
const nav = document.getElementById('nav');
const navList = document.querySelectorAll('.nav_list > li > a');

console.log('list is ', navList);
navList.forEach(element => {
    element.addEventListener('click', (e) => {
        console.log('clicked', e.target);
        const current = document.querySelector('.active')
        console.log('current', current);
        current.classList.remove('active')
        e.target.classList.add("active")
        // e.target.classList.remove('active')
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