
let massage = document.getElementById('massage');
let email = document.getElementById('email');
let form = document.getElementById('form');

window.onload = function () {
    (function () {
        // https://dashboard.emailjs.com/admin/integration
        emailjs.init(email_user_id);
    })();
}

// email valid
function validEmail(event) {
    let emailValid = event.value.toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    if (emailValid == null) {
        return false
    }
    else {
        return true

    }

}

// url Massage 
function validMassage(event) {
    if (event.value.length > 20) {
        return true;
    }
    else {
        return false
    }

}

const submitMassage(){
    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    // emailjs.sendForm('contact_service', 'contact_form', this)
    //     .then(function () {
    //         console.log('SUCCESS!');
    //     }, function (error) {
    //         console.log('FAILED...', error);
    //     });
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(massage);
    console.log(validMassage(massage))
    if (validEmail(email) && validMassage(massage)) {
        submitMassage();
    }
    else {
        console.log('error');
    }
})