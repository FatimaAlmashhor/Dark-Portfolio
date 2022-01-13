
let massage = document.getElementById('massage');
let email = document.getElementById('email');
let email_error = document.getElementById('email-error');
let message_error = document.getElementById('message-error');
let form = document.getElementById('form');

window.onload = function () {
    (function () {
        // https://dashboard.emailjs.com/admin/integration
        emailjs.init(email_user_id);
    })();
}

// email valid
function validEmail(event) {
    email_error.innerHTML = '';
    let emailValid = event.value.toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    if (emailValid == null) {
        email_error.innerHTML = 'Your emaill should be valid';
        return false
    }
    else {
        return true

    }

}

// url Massage 
function validMassage(event) {
    message_error.innerHTML = ''
    if (event.value.length > 20) {
        return true;
    }
    else {
        message_error.innerHTML = 'Your emaill should be more then 20 chars';
        return false
    }

}

function submitMassage() {
    // generate a five digit number for the contact_number variable
    // this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('service_hl9ya8n', 'template_noh9yz2', form)
        .then(function () {
            console.log('SUCCESS!');
            email.value = '';
            massage.value = '';
            alert('Your massage sent , Thank you .')
        }, function (error) {
            console.log('FAILED...', error);
        });
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