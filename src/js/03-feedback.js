document
  .querySelector('form.feedback-form')
  .addEventListener('input', event => {
    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify({
        email: document.querySelector('input[name="email"]').value,
        message: document.querySelector('textarea[name="message"]').value,
      })
    );
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  });
