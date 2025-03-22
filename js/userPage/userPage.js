// Default username
let updateUserDataPath = "http://localhost:8080/v1/user/update";
let defaultUsername;
let userUuid;

$(document).ready(function () {
  // Get user data from localStorage
  var userData = JSON.parse(localStorage.getItem("userData"));

  if (userData) {
    // Use the user data (for example, display it on the page)
    console.log("User data:", userData);
    defaultUsername = userData.userName;
    userUuid = userData.uuid; // Assuming the uuid is stored in userData

    // Example of using the data
    $("#userName").text(userData.userName);
    $("#email").text(userData.email);

    // You can add other elements to display user info as needed
    $("#welcomeMessage").text("Welcome " + userData.userName);

    // Initialize the page with the default username
    document.getElementById("user-display").textContent = defaultUsername;
  } else {
    // Redirect to login page if user data is not available
    window.location.href = "login.html";
  }
});

// Handle Update button click
document.getElementById("update-button").addEventListener("click", function () {
  // Show the input field and save button, hide the update button
  document.getElementById("username-input").style.display = "inline-block";
  document.getElementById("save-button").style.display = "inline-block";
  document.getElementById("update-button").style.display = "none";

  // Set the input value to the current username
  document.getElementById("username-input").value = defaultUsername;
});

// Handle Save button click
document.getElementById("save-button").addEventListener("click", function () {
  let newUsername = document.getElementById("username-input").value;
  let email = null;
  let newPassword = null;
  let password = null;

  // Make sure the username is not empty
  if (newUsername.trim() === "") {
    alert("Username cannot be empty!");
    return;
  }

  $.ajax({
    url: "http://localhost:8080/v1/user/auth/update", // The URL to send the request to
    type: "POST", // The HTTP method
    contentType: "application/json", // The content type to send
    data: JSON.stringify({
      username: newUsername,
      email: email,
      newPassword: password,
      oldPassword: password,
    }), // The data to send, ensure you send newUsername here

    success: function (response) {
      // If the request is successful, update the displayed username
      defaultUsername = newUsername;
      document.getElementById("user-display").textContent = defaultUsername;
      alert("Updated successfully!");
    },

    error: function (xhr, status, error) {
      console.error("XHR:", xhr);
      console.error("Status:", status);
      console.error("Error:", error);
      // If the request fails, show an error message
      alert("Failed to update your data. Please try again.");
    },
  });

  // Sending both username and uuid in the request body
  const data = JSON.stringify({
    username: newUsername,
    uuid: userUuid, // Send the uuid with the username
  });
  xhr.send(data);

  // Hide the input field and save button, show the update button again
  document.getElementById("username-input").style.display = "none";
  document.getElementById("save-button").style.display = "none";
  document.getElementById("update-button").style.display = "inline-block";
});
/**/
