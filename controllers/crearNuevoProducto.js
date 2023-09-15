import { productosService } from "../Service/productosService.js";

document.addEventListener("DOMContentLoaded", () => {
  const formularioAgregarProducto = document.querySelector("[data-form]");
  const modal = document.getElementById("myModal");

  // Función para mostrar el modal
  function showModal() {
    modal.style.display = "block";
  }
  // Función para ocultar el modal
  function closeModal() {
    modal.style.display = "none";
  }
  // Mostrar el modal cuando se agrega un producto
  function mostrarModalProductoAgregado() {
    showModal();

    // Botón "Agregar Otro Producto"
    const agregarOtroBtn = document.getElementById("agregarOtro");
    agregarOtroBtn.addEventListener("click", () => {
      closeModal();
      formularioAgregarProducto.reset(); // Limpia el formulario
    });
    // Botón "Ver Productos"
    const verProductosBtn = document.getElementById("verProductos");
    verProductosBtn.addEventListener("click", () => {
      closeModal();
      window.location.href = "../pages/productos.html";
    });
  }

  formularioAgregarProducto.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector("[data-name]").value;
    const image = document.querySelector("[data-imageUrl]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    productosService
      .crearProdutos(nombre, image, descripcion)
      .then(() => {
        mostrarModalProductoAgregado();
        // Cierra el modal después de 5 segundos
        setTimeout(() => {
          closeModal();
          formularioAgregarProducto.reset(); // Limpia el formulario
        }, 1000000); // Cambia el valor a la cantidad de milisegundos que deseas
      })
      .catch((error) => {
        console.log(error);
      });
  });
});
