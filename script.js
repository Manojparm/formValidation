const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateForm()) {
    alert('Form submitted successfully!');
    form.reset();
  }
});

function validateForm() {
  let isValid = true;

  const name = document.getElementById('name');
  const nameError = document.getElementById('nameError');
  if (name.value.trim() === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  } else {
    nameError.textContent = '';
  }

  const email = document.getElementById('email');
  const emailError = document.getElementById('emailError');
  if (!isValidEmail(email.value)) {
    emailError.textContent = 'Invalid email address';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  const phone = document.getElementById('phone');
  const phoneError = document.getElementById('phoneError');
  if (!isValidPhoneNumber(phone.value)) {
    phoneError.textContent = 'Invalid phone number';
    isValid = false;
  } else {
    phoneError.textContent = '';
  }

  const password = document.getElementById('password');
  const passwordError = document.getElementById('passwordError');
  if (password.value.trim() === '') {
    passwordError.textContent = 'Password is required';
    isValid = false;
  } else {
    passwordError.textContent = '';
  }

  const age = document.getElementById('age');
  const ageError = document.getElementById('ageError');
  if (isNaN(age.value) || age.value <= 0 || age.value > 120) {
    ageError.textContent = 'Invalid age';
    isValid = false;
  } else {
    ageError.textContent = '';
  }

  const gender = document.getElementById('gender');
  const genderError = document.getElementById('genderError');
  if (gender.value === '') {
    genderError.textContent = 'Gender is required';
    isValid = false;
  } else {
    genderError.textContent = '';
  }

  const date = document.getElementById('date');
  const dateError = document.getElementById('dateError');
  if (date.value === '') {
    dateError.textContent = 'Date is required';
    isValid = false;
  } else {
    dateError.textContent = '';
  }

  const color = document.getElementById('color');
  const colorError = document.getElementById('colorError');
  if (color.value === '') {
    colorError.textContent = 'Color is required';
    isValid = false;
  } else {
    colorError.textContent = '';
  }

  return isValid;
}

function isValidEmail(email) {
  // Basic email validation
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
  // Basic phone number validation
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}