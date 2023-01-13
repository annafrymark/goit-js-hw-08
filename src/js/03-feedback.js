let formState = { email: '', message: '' };
let emailField = document.querySelector('input[name="email"]');
let messageField = document.querySelector('textarea[name="message"]');

const throttle = require('lodash.throttle');

if (localStorage.getItem('feedback-form-state') != null) {
  formState = JSON.parse(localStorage.getItem('feedback-form-state'));
}

emailField.value = formState.email;
messageField.value = formState.message;

document.querySelector('form.feedback-form').addEventListener(
  'input',
  throttle(event => {
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({
        email: emailField.value,
        message: messageField.value,
      })
    );
  }, 500)
);

document
  .querySelector('form.feedback-form')
  .addEventListener('submit', event => {
    event.preventDefault();
    localStorage.removeItem('feedback-form-state');
    formState.email = emailField.value;
    formState.message = messageField.value;
    console.log(formState);
    emailField.value = '';
    messageField.value = '';
  });
