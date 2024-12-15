let label = document.getElementById('label');
let ShoppingCart = document.getElementById('shopping-cart');

let basket = JSON.parse(localStorage.getItem("data")) || [];

// Actualiza el ícono del carrito con la cantidad total de ítems
let calculation = () => {
    let cartIcon = document.getElementById("cartamount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);    
};

calculation();

// Genera los elementos del carrito
let generateCartItems = () => {
    if (basket.length !== 0) {
        ShoppingCart.innerHTML = basket.map((x) => {
            return `
            <div class="cart-item">
                <h4>Item: ${x.item}</h4>
            </div>
            `;
        }).join(""); // Unimos los elementos para que no aparezcan separados por comas
    } else {
        ShoppingCart.innerHTML = '';
        label.innerHTML = `
            <h2>Tu carrito está vacío</h2>
            <a href="index.html">
                <button class="HomeBtn">Volver al Inicio</button>
            </a>
        `;
    }
};

generateCartItems();