console.log('toggle ');


const checkbox = document.getElementById('toggle-checkout');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('light');
})