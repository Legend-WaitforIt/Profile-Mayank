var firstname = document.getElementById('fname').value;
var lastname = document.getElementById('lname').value;
var email = document.getElementById('email').value;
var subject = document.getElementById('subject').value;
var message = document.getElementById('message').value;

function submitForm() {
    if(email === '' || message === '') {
        alert('Invalid entry! Email and subject cannot be empty.');
        return;
    }

    sendEmail();
}

document.addEventListener('keypress', logKey);
function logKey(e) {
    if(e.keyCode === 13) {
        if(email !== '' && message !== '') {
            sendEmail();
        }
    }
}

document.window.open('mailto:test@example.com');