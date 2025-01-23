// script.js
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorMessage = document.getElementById('errorMessage');
  
    // Basic validation
    if (!name || !email || !message) {
      errorMessage.textContent = 'All fields are required!';
      return;
    }
  
    if (!validateEmail(email)) {
      errorMessage.textContent = 'Please enter a valid email address!';
      return;
    }
  
    // Clear any error messages
    errorMessage.textContent = '';
  
    // Submit the form
    this.submit();
  });
  
  // Helper function to validate email format
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }
  