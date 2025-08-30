/* ==========================
   Part 2: JavaScript Functions
=========================== */

/**
 * Calculates the area of a rectangle.
 * @param {number} width - Width of the rectangle
 * @param {number} height - Height of the rectangle
 * @returns {number} - Area of rectangle
 */
function calculateArea(width, height) {
  return width * height; // Return value
}

/**
 * Reads input values, calculates area, and updates output.
 * Demonstrates scope: 'area' is local, 'areaOutput' is DOM reference
 */
function calculateAndShowArea() {
  const width = parseFloat(document.getElementById('width').value);
  const height = parseFloat(document.getElementById('height').value);
  const areaOutput = document.getElementById('areaOutput');

  if (isNaN(width) || isNaN(height)) {
    areaOutput.textContent = 'Please enter valid numbers!';
    return;
  }

  const area = calculateArea(width, height); // Reusable function
  areaOutput.textContent = `Area of rectangle: ${area}`;
}

/* ==========================
   Part 3: JS + CSS Animations
=========================== */
const animatedBox = document.getElementById('animatedBox');

/**
 * Toggles animation class to trigger CSS animation.
 * Demonstrates JS controlling CSS dynamically
 */
function animateBox() {
  animatedBox.classList.toggle('animate');
}

/* ==========================
   Additional Notes
=========================== */
// All variables inside functions (like 'width', 'height', 'area') are local scope
// 'animatedBox' is global scope since defined outside functions for reuse
