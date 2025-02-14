document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    if (email === '' || password === '') {
        alert('Please fill in both email and password.');
        return;
    }

    // Handle sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember me:', remember);

    // Optionally, redirect the user after successful sign-in
    // window.location.href = '/dashboard';
});
