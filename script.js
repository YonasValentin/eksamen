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
// function execute, when form submit is clicked
function validateFormData(event) {
    // prevent default HTML behavior
    event.preventDefault();
    // get form input data
    const formData = new FormData(this);
    // get input fields values
    const nameInput = formData.get('name').trim();
    const emailInput = formData.get('email').trim();
    const phoneInput = formData.get('phone').trim();
    const subjectInput = formData.get('subject').trim();
    const messageInput = formData.get('message').trim();

    // check if all fields are valid
    if (!nameInput || !emailInput || !phoneInput || !subjectInput || !messageInput) {
        contactFormError.innerText = 'Please fill out all required fields';
        // execute fetch POST method to contact-form.php document
    } else {
        fetch('contact-form.php', {
            method:'POST',
            body: formData,
            // checks if form is submitted correctly
        }).then(function(response) {
            return response.text();
            // console.log response if success or error
        }).then(function(text) {
            console.log(text);
        }).catch(function(error) {
            console.log(error);
        })
    }
    // check if empty name input field
    if (!nameInput) {
        nameInputError.innerText = 'Please enter your name';
        // if a value is entered, then remove error message
    } else {
        nameInputError.innerText = '';
    }
    // check if empty email input field
    if (!emailInput) {
        emailInputError.innerText = 'Please enter your email address';
        // check is email address is valid
    } else if (!emailInput.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailInputError.innerText = 'Please enter a valid email address';
        // if email address is entered and valid, then remove error message
    } else {
        emailInputError.innerText = '';
    }
    // check if empty phone input field
    if (!phoneInput) {
        phoneInputError.innerText = 'Please enter your phone number';
        // check if phone number is between less then 8 and 11
    } else if (!phoneInput.match(/^[+]*[45]{2}[\d]{8}|^[0045]{4}[\d]{8}|^\d{8}$/)) {
        phoneInputError.innerText = 'Please enter a valid phone number';
        // if phone number is entered and valid, then remove error message
    } else {
        phoneInputError. innerText = '';
    }
    // check if empty subject input field
    if (!subjectInput) {
        subjectInputError.innerText = 'Please enter your subject';
        // check if subject is more or equal to 10 characters
    } else if (subjectInput.length <= 10) {
        subjectInputError.innerText = 'Your subject must contain at least 10 characters';
        // if subject is entered and valid, then remove error message
    } else {
        subjectInputError. innerText = '';
    }
    // check if empty message input field
    if (!messageInput) {
        messageInputError.innerText = 'Please enter your message';
        // check if message is more or equal to 30 characters
    } else if (messageInput.length <= 30) {
        messageInputError.innerText = 'Your message must contain at least 30 characters';
        // if message is entered and valid, then remove error message
    } else {
        messageInputError. innerText = '';
    }
}