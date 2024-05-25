// Add JavaScript code for navbar interactions (if any)
function toggleMenu() {
    var menu = document.getElementById('side-menu');
    if (menu.style.width == '300px') {
        menu.style.width = '0'; // Close the menu
    } else {
        menu.style.width = '300px'; // Open the menu
    }
}

