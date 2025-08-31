// Handle category tab switching
document.addEventListener('DOMContentLoaded', function() {
    const categoryTabs = document.querySelectorAll('.category-tab');
    
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all tabs
            categoryTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
        });
    });

    // Handle image dots navigation
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const dots = card.querySelectorAll('.dot');
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function(e) {
                e.stopPropagation();
                
                // Remove active class from all dots in this card
                dots.forEach(d => d.classList.remove('active'));
                
                // Add active class to clicked dot
                this.classList.add('active');
            });
        });
    });

    // Handle filter checkboxes
    const filterCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
    
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Here you would typically filter the products
            console.log('Filter changed:', this.id, this.checked);
        });
    });

    // Handle clear all filters
    const clearAllBtn = document.querySelector('.clear-all');
    
    clearAllBtn.addEventListener('click', function() {
        filterCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        console.log('All filters cleared');
    });

    // Handle sort dropdown
    const sortSelect = document.querySelector('.sort-dropdown select');
    
    sortSelect.addEventListener('change', function() {
        console.log('Sort changed to:', this.value);
        // Here you would typically re-sort the products
    });

    // Handle product card clicks
    productCards.forEach(card => {
        card.addEventListener('click', function() {
            console.log('Product clicked:', this.querySelector('.product-name').textContent);
            // Here you would typically navigate to product detail page
        });
    });

    // Add search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchBtn = document.querySelector('.search-btn');
    
    function handleSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            console.log('Searching for:', searchTerm);
            // Here you would typically perform the search
        }
    }
    
    searchBtn.addEventListener('click', handleSearch);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Add wishlist functionality
    const headerIcons = document.querySelectorAll('.icon-item');
    
    headerIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            const iconClass = this.querySelector('i').className;
            
            if (iconClass.includes('fa-heart')) {
                console.log('Wishlist clicked');
            } else if (iconClass.includes('fa-user')) {
                console.log('User account clicked');
            } else if (iconClass.includes('fa-shopping-bag')) {
                console.log('Shopping bag clicked');
            } else if (iconClass.includes('fa-map-marker-alt')) {
                console.log('Location clicked');
            }
        });
    });
});