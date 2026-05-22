// LocalStorage Management Module
const StorageManager = {
    // Storage keys
    REVIEWS_KEY: 'portfolio_reviews',
    ADMIN_PASSWORD_KEY: 'admin_password_set',
    
    // Initialize storage
    init() {
        if (!localStorage.getItem(this.REVIEWS_KEY)) {
            localStorage.setItem(this.REVIEWS_KEY, JSON.stringify([]));
        }
    },

    // Get all reviews
    getReviews() {
        try {
            const reviews = localStorage.getItem(this.REVIEWS_KEY);
            return reviews ? JSON.parse(reviews) : [];
        } catch (error) {
            console.error('Error reading reviews from storage:', error);
            return [];
        }
    },

    // Add a new review
    addReview(name, rating, description) {
        try {
            const reviews = this.getReviews();
            const newReview = {
                id: Date.now(),
                name: name,
                rating: parseInt(rating),
                description: description,
                position: reviews.length,
                createdAt: new Date().toISOString()
            };
            reviews.push(newReview);
            localStorage.setItem(this.REVIEWS_KEY, JSON.stringify(reviews));
            return newReview;
        } catch (error) {
            console.error('Error adding review:', error);
            throw error;
        }
    },

    // Delete a review
    deleteReview(id) {
        try {
            let reviews = this.getReviews();
            reviews = reviews.filter(review => review.id !== id);
            // Reorder positions
            reviews.forEach((review, index) => {
                review.position = index;
            });
            localStorage.setItem(this.REVIEWS_KEY, JSON.stringify(reviews));
            return true;
        } catch (error) {
            console.error('Error deleting review:', error);
            throw error;
        }
    },

    // Update review position
    updatePosition(id, newPosition) {
        try {
            let reviews = this.getReviews();
            const reviewIndex = reviews.findIndex(r => r.id === id);
            
            if (reviewIndex === -1) {
                throw new Error('Review not found');
            }

            // Remove from current position
            const [review] = reviews.splice(reviewIndex, 1);
            
            // Insert at new position
            reviews.splice(newPosition, 0, review);
            
            // Update all positions
            reviews.forEach((r, index) => {
                r.position = index;
            });
            
            localStorage.setItem(this.REVIEWS_KEY, JSON.stringify(reviews));
            return true;
        } catch (error) {
            console.error('Error updating position:', error);
            throw error;
        }
    },

    // Validate admin password (simple client-side validation)
    validatePassword(password) {
        // Password is set to a simple value - in production, use proper hashing
        const ADMIN_PASSWORD = 'admin2025';
        return password === ADMIN_PASSWORD;
    },

    // Clear all reviews (use with caution)
    clearAllReviews() {
        try {
            localStorage.setItem(this.REVIEWS_KEY, JSON.stringify([]));
            return true;
        } catch (error) {
            console.error('Error clearing reviews:', error);
            return false;
        }
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    StorageManager.init();
});
