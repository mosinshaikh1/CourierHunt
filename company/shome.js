document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const otp = document.getElementById('otp').value;

    if ((username === '' || password === '') && otp === '') {
        alert('Please fill in either username and password or the OTP.');
        return;
    }

    // Handle login or OTP logic here
    if (otp) {
        console.log('OTP:', otp);
        alert('OTP login feature not yet implemented.');
    } else {
        console.log('Username:', username);
        console.log('Password:', password);
        // Optionally, redirect the user after a successful login
        // window.location.href = '/dashboard';
    }
});

// Simulate sending OTP
document.getElementById('sendOtpBtn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    
    if (username === '') {
        alert('Please enter your username first.');
        return;
    }

    // Simulate sending OTP (you would integrate an actual OTP service here)
    alert('OTP has been sent to your registered mobile number/email.');
});
