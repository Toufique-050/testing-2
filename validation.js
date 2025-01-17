$(document).ready(function () {
  $('#signup-form').on('submit', function (event) {
    event.preventDefault();
    $('.text-danger').text('');
    $('#form-success').text('');

    let isValid = true;

    // Name validation (at least 3 characters)
    const name = $('#name').val();
    if (name.length < 3) {
      $('#name-error').text('Please enter at least 3 characters.');
      isValid = false;
    }

    // Email validation
    const email = $('#email').val();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      $('#email-error').text('Please enter a valid email address.');
      isValid = false;
    }


    // Password validation (at least 6 characters)
    const password = $('#password').val();
    if (password.length < 6) {
      $('#password-error').text('Password must be at least 6 characters.');
      isValid = false;
    }

    // Confirm Password validation
    const confirmPassword = $('#confirm-password').val();
    if (password !== confirmPassword) {
      $('#confirm-password-error').text('Passwords do not match.');
      isValid = false;
    }

    // Show success message if form is valid
    if (isValid) {
      $('#form-success').text('Account successfully created!');
      $('#signup-form')[0].reset(); // Reset form
      console.log($('#signup-form'));

    }
  });
});