// error id
const contactFormError = document.getElementById("contact-form-error");
const nameInputError = document.getElementById("contact-name-error");
const emailInputError = document.getElementById("contact-email-error");
const phoneInputError = document.getElementById("contact-phone-error");
const subjectInputError = document.getElementById("contact-subject-error");
const messageInputError = document.getElementById("contact-message-error");

// get form element
const contactForm = document.getElementById("contact-form");
// listen for form submit event
contactForm.addEventListener("submit", validateFormData);
// function execute, when form submit is clicked
function validateFormData(event) {
  // prevent default HTML behavior
  event.preventDefault();
  // get form input data
  const formData = new FormData(this);
  // get input fields values
  const nameInput = formData.get("name").trim();
  const emailInput = formData.get("email").trim();
  const phoneInput = formData.get("phone").trim();
  const subjectInput = formData.get("subject").trim();
  const messageInput = formData.get("message").trim();

  // check if all fields are valid
  if (
    !nameInput ||
    !emailInput ||
    !phoneInput ||
    !subjectInput ||
    !messageInput
  ) {
    contactFormError.innerText = "Venligst udfyld alle felterne";
    // execute fetch POST method to formsubmit
  } else {
    fetch("https://formsubmit.co/ajax/yonasklibi@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        From: nameInput,
        Email: emailInput,
        Phone: phoneInput,
        Subject: subjectInput,
        Message: messageInput,
      }),
      // checks if form is submitted correctly
    })
      .then(function (response) {
        response.json();
        // console.log response if success or error
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
    // if multiple admin emails
    fetch("https://formsubmit.co/ajax/yonasmougaard@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        From: nameInput,
        Email: emailInput,
        Phone: phoneInput,
        Subject: subjectInput,
        Message: messageInput,
      }),
      // checks if form is submitted correctly
    })
      .then(function (response) {
        response.json();
        // console.log response if success or error
      })
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // check if empty name input field
  if (!nameInput) {
    nameInputError.innerText = "Navn er påkrævet";
    // if a value is entered, then remove error message
  } else {
    nameInputError.innerText = "";
  }
  // check if empty email input field
  if (!emailInput) {
    emailInputError.innerText = "E-mail er påkrævet";
    // check is email address is valid
  } else if (
    !emailInput.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    emailInputError.innerText = "Din e-mail er ugyldig";
    // if email address is entered and valid, then remove error message
  } else {
    emailInputError.innerText = "";
  }
  // check if empty phone input field
  if (!phoneInput) {
    phoneInputError.innerText = "Tlf. nr. er påkrævet";
    // check if phone number starts with either +45 || 0045 && contains 8 digtets
  } else if (
    !phoneInput.match(/^[+]*[45]{2}[\d]{8}|^[0045]{4}[\d]{8}|^\d{8}$/)
  ) {
    phoneInputError.innerText = "Dit tlf. nr er ugyldigt";
    // if phone number is entered and valid, then remove error message
  } else {
    phoneInputError.innerText = "";
  }
  // check if empty subject input field
  if (!subjectInput) {
    subjectInputError.innerText = "Emne er påkrævet";
    // check if subject is more or equal to 10 characters
  } else if (subjectInput.length <= 10) {
    subjectInputError.innerText = "Emnet skal mindst indholde 10 tegn";
    // if subject is entered and valid, then remove error message
  } else {
    subjectInputError.innerText = "";
  }
  // check if empty message input field
  if (!messageInput) {
    messageInputError.innerText = "Meddelse er påkrævet";
    // check if message is more or equal to 30 characters
  } else if (messageInput.length <= 30) {
    messageInputError.innerText = "Meddelsen skal mindst indholde 30 tegn";
    // if message is entered and valid, then remove error message
  } else {
    messageInputError.innerText = "";
  }
}
