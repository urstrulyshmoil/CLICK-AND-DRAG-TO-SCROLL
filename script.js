const slider = document.querySelector('.items'); // Select the slider element
let isDown = false; // Flag to track whether mouse is pressed
let startX; // Starting X position of the mouse
let scrollLeft; // Initial scroll position

// Mouse down event to start dragging
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active'); // Add the 'active' class to show dragging state
  startX = e.pageX - slider.offsetLeft; // Calculate the mouse position relative to the slider
  scrollLeft = slider.scrollLeft; // Store the current scroll position
});

// Mouse leave event to stop dragging when mouse leaves the slider
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active'); // Remove the 'active' class when mouse leaves
});

// Mouse up event to stop dragging
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active'); // Remove the 'active' class when mouse is released
});

// Mouse move event to handle the dragging motion
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return; // If not dragging, exit the function

  e.preventDefault(); // Prevent the default behavior (text selection, etc.)
  const x = e.pageX - slider.offsetLeft; // Get the current mouse position
  const walk = (x - startX) * 3; // Calculate the scroll distance based on mouse movement

  slider.scrollLeft = scrollLeft - walk; // Move the slider based on the calculated distance
});
