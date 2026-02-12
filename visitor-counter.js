// Visitor Counter - Track and display page visits
(function() {
    const VisitorCounter = {
        storageKey: 'visitor-count',
        counterElementId: 'visitor-counter',

        // Initialize and update counter
        init() {
            // Get current count from localStorage
            let count = parseInt(localStorage.getItem(this.storageKey)) || 0;

            // Increment count
            count++;

            // Save back to localStorage
            localStorage.setItem(this.storageKey, count);

            // Display count
            this.updateDisplay(count);
        },

        // Update the counter display
        updateDisplay(count) {
            const counterElement = document.getElementById(this.counterElementId);
            if (counterElement) {
                counterElement.textContent = count.toLocaleString();
            }
        },

        // Reset counter (for testing/debugging)
        reset() {
            localStorage.removeItem(this.storageKey);
            this.updateDisplay(0);
            console.log('Visitor counter reset');
        },

        // Get current count
        getCount() {
            return parseInt(localStorage.getItem(this.storageKey)) || 0;
        }
    };

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            VisitorCounter.init();
        });
    } else {
        VisitorCounter.init();
    }

    // Expose globally for debugging
    window.visitorCounter = VisitorCounter;
})();
