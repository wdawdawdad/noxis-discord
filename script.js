document.getElementById('loginBtn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (email && password) {
        alert('Login successful!');
        // Here you can add code to handle login, like sending data to a server
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('signupBtn').addEventListener('click', function() {
    window.location.href = 'signup.html'; // Redirect to sign-up page
});
