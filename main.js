const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cerrarModal = document.getElementById("cerrarModal");
const searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");

let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

const saludoElement = document.getElementById("saludo");

const userId = 7; 

const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;

fetch(apiUrl)
  .then((response) => response.json())
  .then((userData) => {
    const username = userData.username; 
    saludoElement.textContent = `Hola ${username}, estas por acceder a la mejor oferta de vinos del mercado!`; 
  })
  .catch((error) => {
    console.error("Hubo un error al obtener los datos del usuario", error);
  });

searchButton.addEventListener("click", () => {
    const searchTerm = searchBar.value.toLowerCase();
    filterProducts(searchTerm);
});

function filterProducts(searchTerm) {
    const filteredProducts = productos.filter((producto) => {
        const nombre = producto.nombre.toLowerCase();
        const tipo = producto.varietal.toLowerCase();
        return nombre.includes(searchTerm) || tipo.includes(searchTerm);
    });

    shopContent.innerHTML = "";

    filteredProducts.forEach((producto) => {
        const content = createProductCard(producto);
        shopContent.append(content);
    });
}

searchBar.addEventListener("input", () => {
    const searchTerm = searchBar.value.toLowerCase();
    filterProducts(searchTerm);
});

function createProductCard(producto) {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
        <img src="${producto.imagen}" alt="Imagen del producto">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p class="price">$${producto.precio}</p>
        `; /*`
        <h3>Nombre: ${producto.nombre}</h3>
        <p>Variedad: ${producto.varietal}</p>
        <p>Descripción: ${producto.descripcion}</p>
        <p class ="price">Precio: $${producto.precio}</p>
        <img src= "${producto.imagen}" alt="Imagen del producto">
    `*/;

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    comprar.addEventListener("click", () => {
        Swal.fire({
            title: "Genial!",
            text: "Producto agregado con éxito!",
            icon: "success",
            confirmButtonText: "Sí",
        });
        carrito.push({
            codigo: producto.codigo,
            img: producto.imagen,
            nombre: producto.nombre,
            varietal: producto.varietal,
            precio: producto.precio
        });

        sessionStorage.setItem("carrito", JSON.stringify(carrito));
    });

    content.append(comprar);

    return content;
}

productos.forEach((producto) => {
    const content = createProductCard(producto);
    shopContent.append(content);
});

verCarrito.addEventListener("click", () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    modalContainer.innerHTML = "";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
    `;
    modalContainer.append(modalHeader);
    cerrarModal.addEventListener("click", () => {
        modalContainer.innerHTML = "";
    });

    const modalButton = document.createElement("h1");
    modalButton.innerText = "❎";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalButton);

    carrito.forEach((producto, index) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
            <img src="${producto.img}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
        `;
        modalContainer.append(carritoContent);

        let eliminar = document.createElement("button");
        eliminar.innerText = "Eliminar";
        eliminar.className = "eliminar";

        carritoContent.append(eliminar);
        eliminar.addEventListener("click", () => {
            Swal.fire({
                title: "¿Está seguro de eliminar el producto?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Sí",
                cancelButtonText: "No",
            }).then((result) => {
                if (result.isConfirmed) {
                    carrito.splice(index, 1);
                    sessionStorage.setItem("carrito", JSON.stringify(carrito));

                    modalContainer.innerHTML = "";
                    verCarrito.click();
                }
            });
        });
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalSumado = document.createElement("div");
    totalSumado.className = "total-content";
    totalSumado.innerHTML = `total a pagar: $${total}`;
    modalContainer.append(totalSumado);
});
