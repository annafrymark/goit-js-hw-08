document.querySelector("form.feedback-form").addEventListener("input",(e=>{localStorage.setItem("feedback-form-state",JSON.stringify({email:document.querySelector('input[name="email"]').value,message:document.querySelector('textarea[name="message"]').value})),console.log(JSON.parse(localStorage.getItem("feedback-form-state")))}));
//# sourceMappingURL=03-feedback.9c0a9ad3.js.map
