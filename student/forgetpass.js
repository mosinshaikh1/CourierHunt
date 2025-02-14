document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    if (email === '') {
        alert('Please enter your email address.');
        return;
    }

    // Handle password reset request logic here
    console.log('Email:', email);

    // Simulate sending password reset email
    alert('Password reset link has been sent to your email address.');
    // Optionally, redirect the user to sign-in page
    // window.location.href = 'sign-in.html';
});
