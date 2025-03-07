$(document).ready(function() {
    $('#registerBtn').click(function() {
        var username = $('#username').val();
        var email = $('#email').val();
        var password = $('#psw-password').val();
        var confirmPassword = $('#psw-repeat').val();

        // Basic client-side validation
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Validate that the fields are not empty
        if (!username || !email || !password) {
            alert("Please fill all the fields!");
            return;
        }

        // Perform the AJAX request (send JSON instead of form-urlencoded)
        $.ajax({
            url: 'http://localhost:8080/v1/user/auth/register', // Your server-side script
            type: 'POST',
            contentType: 'application/json', // Specify that we're sending JSON
            data: JSON.stringify({
                username: username,
                email: email,
                password: password
            }), // Send the data as a JSON string
            success: function(response) {
                console.log(response);
                alert("Registration successful!");
                document.getElementById('id02').style.display = 'none'; // Close modal
            },
            error: function(xhr, status, error) {
                console.error('XHR:', xhr);
                console.error('Status:', status);
                console.error('Error:', error);
                alert("An error occurred. Please try again.");
            }
        });
    });
});