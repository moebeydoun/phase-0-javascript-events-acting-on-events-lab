const dodger = document.getElementById('dodger');

// Add an event listener to listen for the left arrow key press
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft();
  }
});

// Function to move the DODGER to the left
function moveDodgerLeft() {
  // Get the current left position of the DODGER
  const currentLeft = parseInt(dodger.style.left, 10) || 0;

  // Check if the DODGER is not at the left edge
  if (currentLeft > 0) {
    // Move the DODGER 1 pixel to the left
    dodger.style.left = `${currentLeft - 1}px`;
  }
}
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
      // Call the moveDodgerRight function
      moveDodgerRight();
    }
  });
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const left = parseInt(dodger.style.left, 10) || 0; // Get the current left position
  
    // Prevent the dodger from going off the right side (game field width is 400px)
    if (left < 360) {
      dodger.style.left = `${left + 1}px`; // Move the dodger 1 pixel to the right
    }
  }s