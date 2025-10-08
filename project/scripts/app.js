/* js/app.js
   - Populates product select on form.html
   - Demonstrates functions, arrays, objects, array methods, DOM interaction, template literals
*/

(function () {
    // Product array: objects used as data source for select options
    const products = [
        { id: 'p-1001', name: 'Flux Capacitor', averageRating: 4.5 },
        { id: 'p-1002', name: 'Power Laces', averageRating: 4.7 },
        { id: 'p-1003', name: 'Time Circuits', averageRating: 3.5 },
        { id: 'p-1004', name: 'Low Voltage Reactor', averageRating: 3.9 },
        { id: 'p-1005', name: 'Warp Equalizer', averageRating: 5.0 }
    ];

    // Utility: create option element markup using template literals
    function createOptionHTML(product) {
        // Use template literals exclusively for string building
        return `<option value="${product.id}" title="Average rating ${product.averageRating}">${product.name} — avg ${product.averageRating}</option>`;
    }

    // Populate product select element
    function populateProductSelect() {
        const select = document.getElementById('productSelect');
        if (!select) return;

        // Sort products by name (example of array method)
        const sorted = products.slice().sort((a, b) => a.name.localeCompare(b.name));

        // Map to HTML strings and join
        const optionsHTML = sorted.map(p => createOptionHTML(p)).join('');
        // Insert into select
        select.insertAdjacentHTML('beforeend', optionsHTML);

        // Accessibility: ensure the first real option is not focus-trapped
        select.addEventListener('change', function () {
            // simple conditional usage
            if (select.value) {
                select.classList.remove('invalid');
            }
        });
    }

    // Basic client-side validation for required fields before submit
    function attachFormValidation() {
        const form = document.getElementById('reviewForm');
        if (!form) return;

        form.addEventListener('submit', function (e) {
            // Check product selected and rating chosen
            const productSelect = document.getElementById('productSelect');
            const rating = form.querySelector('input[name="rating"]:checked');

            let valid = true;
            if (!productSelect || !productSelect.value) {
                productSelect.classList.add('invalid');
                productSelect.focus();
                valid = false;
            }

            if (!rating) {
                // focus first rating radio for accessibility
                const r0 = document.getElementById('rating1');
                if (r0) r0.focus();
                valid = false;
            }

            if (!valid) {
                e.preventDefault(); // Stop page navigation if validation fails
                alert('Please select a product and an overall rating before submitting.');
            }
        });
    }

    // Entry point
    document.addEventListener('DOMContentLoaded', function () {
        populateProductSelect();
        attachFormValidation();
    });

    // Expose products for review page (if needed in other scripts)
    window.__W05_PRODUCTS = products;
})();
