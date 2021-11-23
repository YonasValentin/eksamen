document.getElementById('contact-submit').addEventListener('click', function (event) {
    event.preventDefault();

    let contactName = document.getElementById('contact-name');
    let contactNameError = document.getElementById('contact-name-error');

    if (contactName.value === '') {
        return contactNameError.innerText = 'Please enter a contact name';
    } else {
        return contactNameError.innerText = '';
    } // hvis jeg indsætter endnu en if statement her, så bliver korden aldrig læst
    }
);