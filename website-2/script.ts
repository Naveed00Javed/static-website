// Add click event for gallery images to zoom in
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('zoomed')) {
      item.classList.remove('zoomed'); // Remove zoom
    } else {
      document.querySelectorAll('.zoomed').forEach((zoomedItem) => {
        zoomedItem.classList.remove('zoomed'); // Remove zoom from others
      });
      item.classList.add('zoomed'); // Add zoom to clicked image
    }
  });
});

// Dynamically zoom styling for the selected item
const style = document.createElement('style');
style.textContent = `
  .gallery-item.zoomed {
    transform: scale(1.5); /* Bigger zoom */
    z-index: 10; /* Bring to front */
  }
`;
document.head.appendChild(style);
