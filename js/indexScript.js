// Function to close the modal when clicking outside
function closeModalOnClick(modalId) {
    var modal = document.getElementById(modalId);
    modal.addEventListener('click', function(event) {
        // Check if the click was outside the modal content area
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Apply the function to each modal
closeModalOnClick('id01');
closeModalOnClick('id02');
