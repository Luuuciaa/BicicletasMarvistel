let cart = JSON.parse(localStorage.getItem("cart")) || []; // Cargar carrito del localStorage

// Función para agregar un producto al carrito
function addToCart(name, price) {
    const item = cart.find(product => product.name === name);
    if (item) {
        item.quantity++; // Incrementar la cantidad si ya existe
    } else {
        cart.push({ name, price, quantity: 1 }); // Agregar nuevo producto

        //  Mostrar  alerta cuando se agrega un producto
        Swal.fire({
            icon: 'success',
            title: 'Producto agregado',
            text: `${name} se agregó al carrito.`,
            timer: 1500,
            showConfirmButton: false
        });
    }
    localStorage.setItem("cart", JSON.stringify(cart)); // Guardar carrito en localStorage
    updateCart(); // Actualizar vista del carrito
}

// Función para actualizar la visualización del carrito
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    if (!cartItems) return; // Asegurarse de que el elemento existe
    cartItems.innerHTML = ''; // Limpiar el contenido del carrito
    let totalPrice = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalPrice += itemTotal;

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${item.name} - $${item.price} x 
            <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)"class="border border-3 rounded-2">
            = $${itemTotal}
            <button onclick="removeFromCart(${index})"class="rounded-pill">Eliminar</button>
        `;
        cartItems.appendChild(listItem);
    });

    document.getElementById("total-price").innerText = totalPrice; // Mostrar total en el DOM
}

// Función para actualizar la cantidad de un producto en el carrito
function updateQuantity(index, quantity) {
    quantity = parseInt(quantity, 10);
    if (quantity > 0) {
        cart[index].quantity = quantity;
    } else {
        cart.splice(index, 1);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    const itemName = cart[index].name; // Guarda el nombre del producto antes de la eliminación

    Swal.fire({
        title: '¿Estás seguro?',
        text: `¿Deseas eliminar ${itemName} del carrito?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
    }).then(result => {
        if (result.isConfirmed) {
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
            } else {
                cart.splice(index, 1);
            }
            
            // Alerta de confirmación de eliminación 
            Swal.fire({
                icon: 'info',
                title: 'Producto eliminado',
                text: `${itemName} ha sido eliminado del carrito`,
                timer: 3000,
                showConfirmButton: false
            });

            localStorage.setItem("cart", JSON.stringify(cart));
            updateCart();
        } else {
            // Alerta de cancelación de eliminación
            Swal.fire({
                icon: 'info',
                title: 'Eliminación cancelada',
                text: `${itemName} no fue eliminado del carrito`,
                timer: 3000,
                showConfirmButton: false
            });
        }
    });
}



// Función para vaciar el carrito
function clearCart() {
    cart = [];
    localStorage.removeItem("cart");
    updateCart();
}

// Cargar carrito al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    updateCart();
});

// Función para simular la compra
function simulateCompra() {
    if (cart.length === 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Carrito vacío',
            text: 'El carrito está vacío. Agrega productos antes de realizar una compra.'
        });
        return;
    }

    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
    });

    // Confirmar compra 
    Swal.fire({
        title: 'Confirmar compra',
        text: `El total de tu compra es $${totalPrice}. ¿Desea confirmar la compra?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
    }).then(result => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: '¡Compra realizada con éxito!',
                text: '¡Gracias por su compra!'
            });
            clearCart();
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Compra cancelada'
            });
        }
    });
}

// Asignar la función simulateCompra a los botones de compra
const botonesComprar = document.getElementsByClassName('btnComprar');
for (let boton of botonesComprar) {
    boton.addEventListener('click', simulateCompra);
}

// Mostrar alerta cuando se vacía el carrito
const botonesVaciarCarrito = document.getElementsByClassName('vaciar');
for (let boton of botonesVaciarCarrito) {
    boton.addEventListener('click', () => {
        Swal.fire({
            icon: 'info',
            title: 'Carrito vaciado',
            text: 'Se vació el carrito'
        });
        clearCart();
    });
}

