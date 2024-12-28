// Add click event for gallery images to zoom in
var galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(function (item) {
    item.addEventListener('click', function () {
        if (item.classList.contains('zoomed')) {
            item.classList.remove('zoomed'); // Remove zoom
        }
        else {
            document.querySelectorAll('.zoomed').forEach(function (zoomedItem) {
                zoomedItem.classList.remove('zoomed'); // Remove zoom from others
            });
            item.classList.add('zoomed'); // Add zoom to clicked image
        }
    });
});
// Dynamically zoom styling for the selected item
var style = document.createElement('style');
style.textContent = "\n  .gallery-item.zoomed {\n    transform: scale(1.5); /* Bigger zoom */\n    z-index: 10; /* Bring to front */\n  }\n";
document.head.appendChild(style);
