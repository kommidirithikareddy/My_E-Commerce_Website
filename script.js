document.addEventListener("DOMContentLoaded", () => {
    let cartCount = 0;
    const cartCountDisplay = document.getElementById("cart-count");
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            cartCountDisplay.textContent = cartCount;
            alert("Added to cart!");
        });
    });
});
