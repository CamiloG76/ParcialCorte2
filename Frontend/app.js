const apiCategorias = "http://127.0.0.1:8000/api/categorias/";
const apiProductos = "http://127.0.0.1:8000/api/productos/";

// mostrar categorias
function cargarCategorias() {
    fetch(apiCategorias)
        .then(respuesta => respuesta.json())
        .then(categorias => {
            let tabla = document.getElementById("tabla-categorias");
            let opciones = document.getElementById("categoria-producto");

            tabla.innerHTML = "";
            opciones.innerHTML = '<option value="">Selecciona una categoria</option>';

            categorias.forEach(categoria => {
                tabla.innerHTML += `
                    <tr>
                        <td>${categoria.id}</td>
                        <td>${categoria.nombre}</td>
                        <td>${categoria.descripcion}</td>
                    </tr>
                `;

                opciones.innerHTML += `
                    <option value="${categoria.id}">${categoria.nombre}</option>
                `;
            });
        });
}

// mostrar productos
function cargarProductos() {
    fetch(apiProductos)
        .then(respuesta => respuesta.json())
        .then(productos => {
            let tabla = document.getElementById("tabla-productos");
            tabla.innerHTML = "";

            productos.forEach(producto => {
                tabla.innerHTML += `
                    <tr>
                        <td>${producto.id}</td>
                        <td>${producto.nombre}</td>
                        <td>${producto.precio}</td>
                        <td>${producto.categoria}</td>
                    </tr>
                `;
            });
        });
}

// guardar categoria
document.getElementById("form-categoria").addEventListener("submit", function(evento) {
    evento.preventDefault();

    fetch(apiCategorias, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: document.getElementById("nombre-categoria").value,
            descripcion: document.getElementById("descripcion-categoria").value
        })
    })
    .then(respuesta => {
        if (!respuesta.ok) throw new Error("No se pudo guardar la categoria");
        return respuesta.json();
    })
    .then(() => {
        this.reset();
        cargarCategorias();
    })
    .catch(error => alert(error.message));
});

// guardar producto
document.getElementById("form-producto").addEventListener("submit", function(evento) {
    evento.preventDefault();

    fetch(apiProductos, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: document.getElementById("nombre-producto").value,
            descripcion: document.getElementById("descripcion-producto").value,
            precio: document.getElementById("precio-producto").value,
            categoria: document.getElementById("categoria-producto").value
        })
    })
    .then(respuesta => {
        if (!respuesta.ok) throw new Error("No se pudo guardar el producto");
        return respuesta.json();
    })
    .then(() => {
        this.reset();
        cargarProductos();
    })
    .catch(error => alert(error.message));
});

// cargar datos al abrir la pagina
cargarCategorias();
cargarProductos()