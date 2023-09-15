import { productosService } from "../Service/productosService.js";

// Función para agregar un nuevo producto a la página web
const agregarProducto = ( imageUrl, name, descripcion, id ) => {      
    const card = document.createElement("div");

    const contenidoProducto = `
        <article>
            <figure>
                <img src="${imageUrl}" alt="Preview" title="Preview"/>
            </figure>
            <div class="article-preview">
                <h2>${name}
                    <div class="iconosCrud">
                        <a class="fa-solid fa-trash" style="color: #ff0000;" id="${id}"></a>
                        <a href="../pages/editarProductos.html?id=${id}" class="fa-solid fa-pen"></a>
                    </div>
                </h2>
                <p>${descripcion}
                </p>
            </div>
        </article>
    `;

    card.innerHTML += contenidoProducto;
    
    // Botón para eliminar un producto
    let btnEliminarProducto = card.querySelector('.fa-trash');
    btnEliminarProducto.addEventListener('click', ()=>{
        const id = btnEliminarProducto.id;
        productosService.deleteProducto( id ).then( respuesta => {
            console.log( respuesta );
        }).catch( (error) => alert("HA OCURRIDO UN ERROR AL INTENTAR ELIMINAR ESTE PRODUCTO", error))
    });
    
    return card;
}
// Obtén la lista de productos y agrégalos a la página
const sectionProducto = document.querySelector('[data-producto]');
const cargarProductos = async () => {
    try {
        const dataProducto = await productosService.listaProductos();
        dataProducto.forEach(({ imageUrl, name, descripcion, id }) => {
            sectionProducto.appendChild(
                agregarProducto(
                    imageUrl,
                    name,
                    descripcion,
                    id
                )
            )
        });
      
    }catch (error) {
      alert("Ha ocurrido un error: " + error.message);
    }
  };
  
  cargarProductos();
