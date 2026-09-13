// Velno Supps Theme JavaScript

// Currency selector
document.getElementById('currency-selector')?.addEventListener('change', function(e) {
  const currency = e.target.value;
  console.log('Currency changed to:', currency);
  // Implement currency conversion logic
});

// Product image gallery
const thumbnails = document.querySelectorAll('.thumbnail-images img');
const mainImage = document.querySelector('.main-image img');

if (thumbnails.length > 0) {
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
      mainImage.src = this.src.replace('100x100', 'original');
      
      // Update active state
      thumbnails.forEach(t => t.style.borderColor = 'transparent');
      this.style.borderColor = '#6c63ff';
    });
  });
}

// Add to cart functionality
const addToCartBtn = document.querySelector('.add-to-cart-btn');
if (addToCartBtn) {
  addToCartBtn.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Product added to cart!');
    // Implement actual cart functionality
  });
}

// Subscribe button
const subscribeBtn = document.querySelector('.subscribe-btn');
if (subscribeBtn) {
  subscribeBtn.addEventListener('click', function() {
    alert('Subscription management coming soon!');
  });
}

// Search functionality
const searchInput = document.querySelector('.search-input');
if (searchInput) {
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      const query = this.value;
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
  });
}

console.log('Velno Supps store loaded successfully!');
