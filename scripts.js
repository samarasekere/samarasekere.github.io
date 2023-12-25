// Get the big picture elements
const bigPictures = document.querySelectorAll('.big-pictures img');

// Function to handle the hover effect on big pictures
function handleBigPictureHover(event) {
  event.target.style.transform = 'scale(1.02)';
  event.target.style.transition = 'transform 0.3s ease';
}

function handleBigPictureLeave(event) {
  event.target.style.transform = 'scale(1)';
}

// Loop through each big picture and add hover effect listeners
bigPictures.forEach(picture => {
  picture.addEventListener('mouseenter', handleBigPictureHover);
  picture.addEventListener('mouseleave', handleBigPictureLeave);
});

// Get all the box elements
const boxes = document.querySelectorAll('.box');

// Function to handle the hover effect on boxes
function handleBoxHover(event) {
  event.target.style.transform = 'scale(1.02)';
  event.target.style.transition = 'transform 0.3s ease';
}

function handleBoxLeave(event) {
  event.target.style.transform = 'scale(1)';
}

// Loop through each box and add hover effect listeners
boxes.forEach(box => {
  box.addEventListener('mouseenter', handleBoxHover);
  box.addEventListener('mouseleave', handleBoxLeave);
});
