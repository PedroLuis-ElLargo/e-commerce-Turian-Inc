import { productosService } from "../Service/productosService.js";

const formularioProductoActualizar = document.querySelector("[data-form]");
const url = new URL(window.location);
const idParams = url.searchParams.get("id");

const nameInput = document.querySelector("[data-name]");
const imageUrlPreview = document.getElementById("image-preview");
const descripcionInput = document.querySelector("[data-descripcion]");
const modal = document.getElementById("myModal");

// Función para mostrar el modal
function showModal() {
  modal.style.display = "block";
}

// Función para ocultar el modal
function closeModal() {
  modal.style.display = "none";
}

const obtenerInformacionProducto = () => {
  productosService.detalleProducto(idParams)
    .then((producto) => {
      nameInput.value = producto.name;
      imageUrlPreview.src = producto.imageUrl;
      descripcionInput.value = producto.descripcion;
    })
    .catch((error) => {
      console.log(error);
    });
};

obtenerInformacionProducto();

formularioProductoActualizar.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const name = nameInput.value;
  const imageUrl = imageUrlPreview.src;
  const descripcion = descripcionInput.value;

  productosService.actualizarProducto(name, imageUrl, descripcion, idParams)
    .then(() => {
      // Muestra el modal con el mensaje
      showModal();
      // Cierra el modal después de 5 segundos y redirecciona
      formularioProductoActualizar.reset(); // Limpia el formulario
      setTimeout(() => {
        closeModal();
        window.location.href = "../pages/productos.html"; // Redirecciona
      }, 500000); // 10000 ms = 10 segundos
    })
    .catch(() => {
      alert("HA OCURRIDO UN ERROR EN LA EDICIÓN DE ESTE PRODUCTO");
    });
});
