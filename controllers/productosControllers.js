import { productosService } from "../Service/productosService.js";

// Función para agregar un nuevo producto a la página web
const agregarProducto = ( imageUrl, name, descripcion ) => {
    const card = document.createElement("div");
  
    const contenidoProducto = `
      <article>
        <figure>
            <img src="${imageUrl}" alt="Preview" title="Preview"/>
        </figure>
        <div class="article-preview">
            <h2>${name}</h2>
            <p>${descripcion}</p>
        </div>
      </article>
    `;

  card.innerHTML += contenidoProducto; //'+=' para agregar, no reemplazar
  return card;
};

const sectionProducto = document.querySelector('[data-producto]');
// Obtén la lista de productos y agrégalos a la página
async function cargarProductos() {
  try {
    const dataProducto = await productosService.listaProductos();
    if (Array.isArray( dataProducto )) {
      dataProducto.forEach( ({ imageUrl, name, descripcion }) => {
        sectionProducto.appendChild(agregarProducto(
          imageUrl,
          name,
          descripcion
          )
        );

      });
    } else {
      alert("No se pudo obtener la lista de productos.");
    }
  } catch (error) {
    alert("Ha ocurrido un error: " + error);
  }
}

cargarProductos();


