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


function toggleMenu() {
    const menu = document.querySelector('.header-right');
    menu.classList.toggle('show');
  }
  
  window.addEventListener('click', function(event) {
    const menu = document.querySelector('.header-right');
    const menuIcon = document.querySelector('.menu-icon');
    
    // Close the menu if the click is outside the menu and the menu icon
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
      menu.classList.remove('show');
    }
  });