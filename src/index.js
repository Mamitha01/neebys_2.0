
//add to cart functions
let quantity = 0;

function initializeCart() {
    quantity = 1; // Start with a quantity of 1
    const cartControls = document.getElementById('cart-controls');
    cartControls.innerHTML = `
        <div class="quantity-controls flex items-center space-x-2">
            <button class="decrease bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition duration-300" onclick="decreaseQuantity()">-</button>
            <span id="cart-quantity" class="text-lg font-semibold">${quantity}</span>
            <button class="increase bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition duration-300" onclick="increaseQuantity()">+</button>
        </div>
    `;
}

function increaseQuantity() {
    quantity++;
    updateQuantityDisplay();
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
    } else {
        resetCart();
    }
    updateQuantityDisplay();
}

function updateQuantityDisplay() {
    document.getElementById('cart-quantity').innerText = quantity;
}

function resetCart() {
    const cartControls = document.getElementById('cart-controls');
    cartControls.innerHTML = `
        <button id="add-to-cart" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300" onclick="initializeCart()">Add to Cart</button>
    `;
}

        // js for connecting the user icon with login page
        document.getElementById('userIcon').addEventListener('click', function() {
            window.location.href = 'login.html';
        });
        //js for connecting the order page with add to cart button
        document.getElementById('orderHtml').addEventListener('click',function(){
            window.location.href = 'order.html';
        })
        // JavaScript to handle search functionality
        const searchInput = document.getElementById('search-input');

        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                const searchTerm = searchInput.value.trim();
                if (searchTerm !== '') {
                    // Perform search action here (e.g., display search results)
                    console.log('Searching for:', searchTerm);
                } else {
                    console.log('Please enter a search term.');
                }
            }
        });
    