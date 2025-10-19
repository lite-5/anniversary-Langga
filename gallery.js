document.querySelectorAll('.photo-grid img').forEach(img => {
  img.onerror = () => {
    img.src = 'Image/placeholder.jpg';
    img.alt = 'Image missing';
  };
});
