const validationInput = document.getElementById("validation-input");


validationInput.addEventListener("blur", function() {
  
  const maxLength = parseInt(validationInput.getAttribute("data-length"), 10);
  
  const inputLength = validationInput.value.trim().length;
  
  
  if (inputLength === maxLength) {
    
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});