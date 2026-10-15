const apiCategorias = "http://127.0.0.1:8000/api/categorias/";
const apiProductos = "http://127.0.0.1:8000/api/productos/";
const apiProveedores = "http://127.0.0.1:8000/api/proveedores/";

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
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            nombre: document.getElementById("nombre-categoria").value,
            descripcion: document.getElementById("descripcion-categoria").value
        })
    }).then(() => {
        this.reset();
        cargarCategorias();
    });
});

// guardar producto
document.getElementById("form-producto").addEventListener("submit", function(evento) {
    evento.preventDefault();

    fetch(apiProductos, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            nombre: document.getElementById("nombre-producto").value,
            descripcion: document.getElementById("descripcion-producto").value,
            precio: document.getElementById("precio-producto").value,
            categoria: document.getElementById("categoria-producto").value
        })
    }).then(() => {
        this.reset();
        cargarProductos();
    });
});

// mostrar proveedores
function cargarProveedores() {
    fetch(apiProveedores)
        .then(respuesta => respuesta.json())
        .then(proveedores => {
            let tabla = document.getElementById("tabla-proveedores");
            tabla.innerHTML = "";

            proveedores.forEach(proveedor => {
                tabla.innerHTML += `
                    <tr>
                        <td>${proveedor.id}</td>
                        <td>${proveedor.nombre}</td>
                        <td>${proveedor.telefono}</td>
                        <td>${proveedor.correo}</td>
                        <td>
                            <button onclick="editarProveedor(${proveedor.id})">Editar</button>
                            <button onclick="eliminarProveedor(${proveedor.id})">Eliminar</button>
                        </td>
                    </tr>
                `;
            });
        });
}

// guardar proveedor
document.getElementById("form-proveedor").addEventListener("submit", function(evento) {
    evento.preventDefault();

    fetch(apiProveedores, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            nombre: document.getElementById("nombre-proveedor").value,
            telefono: document.getElementById("telefono-proveedor").value,
            correo: document.getElementById("correo-proveedor").value
        })
    }).then(() => {
        this.reset();
        cargarProveedores();
    });
});

// editar proveedor
function editarProveedor(id) {
    fetch(apiProveedores + id + "/")
        .then(respuesta => respuesta.json())
        .then(proveedor => {
            let nombre = prompt("Nombre:", proveedor.nombre);
            let telefono = prompt("Telefono:", proveedor.telefono);
            let correo = prompt("Correo:", proveedor.correo);

            if (nombre === null || telefono === null || correo === null) return;

            fetch(apiProveedores + id + "/", {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    nombre: nombre,
                    telefono: telefono,
                    correo: correo
                })
            }).then(() => cargarProveedores());
        });
}

// eliminar proveedor
function eliminarProveedor(id) {
    if (confirm("¿Eliminar proveedor?")) {
        fetch(apiProveedores + id + "/", {
            method: "DELETE"
        }).then(() => cargarProveedores());
    }
}

// cargar datos
cargarCategorias();
cargarProductos();
cargarProveedores();