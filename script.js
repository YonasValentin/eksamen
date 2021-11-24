// error id
const nameInputError = document.getElementById('contact-name-error');
const emailInputError = document.getElementById('contact-email-error');
const phoneInputError = document.getElementById('contact-phone-error');
const subjectInputError = document.getElementById('contact-subject-error');
const bodyInputError = document.getElementById('contact-message-error');

// get form element
const contactForm = document.getElementById('contact-form');
// listen for form submit event
contactForm.addEventListener('submit', saveFormData);

function saveFormData(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const nameInput = formData.get('name').trim();
    const emailInput = formData.get('email').trim();
    const phoneInput = formData.get('phone').trim();
    const subjectInput = formData.get('subject').trim();
    const messageInput = formData.get('message').trim();

    if (!nameInput) {
        nameInputError.innerText = 'Please enter your name';
    } else if (nameInput) {
        nameInputError.innerText = '';
        nameInputError.classList.remove('contact-name-error');
    }
}