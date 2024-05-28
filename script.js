document.addEventListener("DOMContentLoaded", function() {
    // Filter by price range
    const priceRangeFilter = document.getElementById("price-range-filter");
    priceRangeFilter.addEventListener("change", function() {
        const selectedPrice = parseFloat(this.value);
        const productItems = document.querySelectorAll(".product-item");
        productItems.forEach(item => {
            const itemPrice = parseFloat(item.dataset.price);
            if (selectedPrice === 0 || itemPrice <= selectedPrice) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });

    // Filter by category
    const categoryFilter = document.getElementById("category-filter");
    categoryFilter.addEventListener("change", function() {
        const selectedCategory = this.value;
        const productItems = document.querySelectorAll(".product-item");
        productItems.forEach(item => {
            const itemCategory = item.dataset.category;
            if (selectedCategory === "all" || selectedCategory === itemCategory) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});
