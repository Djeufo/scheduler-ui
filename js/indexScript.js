// Function to close the modal when clicking outside
function closeModalOnClick(modalId) {
    var modal = document.getElementById(modalId);
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

// Apply the function to each modal
closeModalOnClick('id01');
closeModalOnClick('id02');
