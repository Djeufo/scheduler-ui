
    $(document).ready(function() {
        // Handle form submission
        $('#loginForm').submit(function(event) {
            event.preventDefault(); // Prevent the form from submitting the traditional way

            // Get the values of username and password
            var username = $('#uname').val();
            var password = $('#psw').val();

            // Send an AJAX POST request
            $.ajax({
                url: 'http://localhost:8080/v1/user/auth/login', // API endpoint
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({
                    username: username,
                    password: password
                }),
                success: function(response) {
                    // Handle success
                    console.log('Login successful:', response);
                    // You can handle the response here (e.g., redirect, show a message)
                    alert('Login successful!');
                },
                error: function(xhr, status, error) {
                    // Handle error
                    console.error('Error:', error);
                    alert('Login failed. Please try again.');
                }
            });
        });
    });

