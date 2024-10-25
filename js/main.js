function productos(categoria) {
    fetch('productos.json') // Ruta  del archivo JSON
        .then(response => response.json())
        .then(data => {
            let productos = data[categoria]; // Obtenemos los productos de la categoría seleccionada
            let caja = document.getElementById('productos'); // Donde se van a mostrar los productos
            caja.innerHTML = ""; // Limpiamos el contenedor

            // Creamos los productos
            productos.forEach(producto => {
                caja.innerHTML +=
                    `<div class="col-sm-12 col-md-6 col-lg-3 border-primary mb-3">
                        <div class="card">
                            <img src="${producto.url}" class="card-img-top img-fluid" alt="${producto.titulo}">
                            <div class="card-body">
                                <h5 class="card-title text-center" style="font-size: 18px;">${producto.titulo}</h5>
                                <strong><p class="card-text text-center">${producto.precio}</p></strong>
                                <div class="d-flex justify-content-center">
                                    <button class="btn btn-primary" style="font-size: 17px;height: 42px;">
                                        <img src="img/carro-de-la-compra.png" alt="carrito de compras" class="carrito-img">Agregar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>`;
            });
        })
        .catch(error => console.error('Error al cargar los productos:', error));
}


/*Evento click para las categorias de bicicletas*/
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dropdown-item').forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
            const categoria = event.target.textContent.trim().toLowerCase(); // Obtenemos la categoría
            productos(categoria); // Llamamos a la función con la categoría seleccionada

            // Desplazamiento suave hacia la sección de productos
            const productosSection = document.getElementById('productos');
            productosSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});



