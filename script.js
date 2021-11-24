// error id
const nameInputError = document.getElementById('contact-name-error');
const emailInputError = document.getElementById('contact-email-error');
const phoneInputError = document.getElementById('contact-phone-error');
const subjectInputError = document.getElementById('contact-subject-error');
const bodyInputError = document.getElementById('contact-message-error');

// get form element
const contactForm = document.getElementById('contact-form');
// listen for form submit event
contactForm.addEventListener('submit', validateFormData);

function validateFormData(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const nameInput = formData.get('name').trim();
    const emailInput = formData.get('email').trim();
    const phoneInput = formData.get('phone').trim();
    const subjectInput = formData.get('subject').trim();
    const messageInput = formData.get('message').trim();

    // empty name validation
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
    } else if (phoneInput.toString().length <= 8 && !phoneInput.toString().match(/^[0-9]+$/)) {
        phoneInputError.innerText = 'Please enter a valid phone number';
    } else {
        phoneInputError. innerText = '';
    }
    // empty subject validation
    if (!subjectInput) {
        subjectInputError.innerText = 'Please enter your subject';
    } else {
        subjectInputError. innerText = '';
    }
    // empty message validation
    if (!messageInput) {
        messageInputError.innerText = 'Please enter your message';
    } else {
        messageInputError.innerText = '';
    }
}