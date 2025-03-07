$(document).ready(function() {
    // Get user data from localStorage
    var userData = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
        // Use the user data (for example, display it on the page)
        console.log('User data:', userData);

        // Example of using the data
        $('#userName').text(userData.userName);
        $('#email').text(userData.email);
        // You can add other elements to display user info as needed
        $('#welcomeMessage').text('Welcome ' + userData.userName);
    } else {
        // Redirect to login page if user data is not available
        window.location.href = 'login.html';
    }
});
