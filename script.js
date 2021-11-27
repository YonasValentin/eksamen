// error id
const contactFormError = document.getElementById('contact-form-error');
const nameInputError = document.getElementById('contact-name-error');
const emailInputError = document.getElementById('contact-email-error');
const phoneInputError = document.getElementById('contact-phone-error');
const subjectInputError = document.getElementById('contact-subject-error');
const messageInputError = document.getElementById('contact-message-error');

// get form element
const contactForm = document.getElementById('contact-form');
// listen for form submit event
contactForm.addEventListener('submit', validateFormData);

function validateFormData(event) {
    event.preventDefault();

    const formData = new FormData(this);

    const nameInput = formData.get('name').trim();
    const emailInput = formData.get('email').trim();
    const phoneInput = formData.get('phone').trim();
    const subjectInput = formData.get('subject').trim();
    const messageInput = formData.get('message').trim();

    // empty name validation
    if (!nameInput || !emailInput || !phoneInput || !subjectInput || !messageInput) {
        contactFormError.innerText = 'Please fill out all required fields';
    } else {
        contactFormError.innerText = '';
    }
    if (!nameInput) {
        nameInputError.innerText = 'Please enter your name';
    } else {
        nameInputError.innerText = '';
    }
    // empty email validation
    if (!emailInput) {
        emailInputError.innerText = 'Please enter your email address';
        // email validation
    } else if (!emailInput.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailInputError.innerText = 'Please enter a valid email address';
    } else {
        emailInputError. innerText = '';
    }
    // empty phone validation
    if (!phoneInput) {
        phoneInputError.innerText = 'Please enter your phone number';
        // phone number validation
    } else if (phoneInput.toString().length <= 8 || !phoneInput.toString().match(/^[0-9]+$/)) {
        phoneInputError.innerText = 'Please enter a valid phone number';
    } else {
        phoneInputError. innerText = '';
    }
    // empty subject validation
    if (!subjectInput) {
        subjectInputError.innerText = 'Please enter your subject';
    } else if (subjectInput.length <= 10) {
        subjectInputError.innerText = 'Your subject must contain at least 10 characters';
    } else {
        subjectInputError. innerText = '';
    }
    // empty message validation
    if (!messageInput) {
        messageInputError.innerText = 'Please enter your message';
    } else if (messageInput.length <= 30) {
        messageInputError.innerText = 'Your message must contain at least 30 characters';
    } else {
        fetch('contact-form.php', {
            method:'POST',
            body: formData,
        }).then(function(response) {
            return response.text();
        }).then(function(text) {
            console.log(text);
        }).catch(function(error) {
            console.log(error);
        })
    }
}