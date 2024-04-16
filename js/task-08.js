const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(loginForm);

  const formValues = {};

  for (let [name, value] of formData) {
    formValues[name] = value;
  }

  if (!formValues.email || !formValues.password) {
    alert('Please fill in all fields');
  } else {
    console.log(formValues);
    
    loginForm.reset();
  }
});
