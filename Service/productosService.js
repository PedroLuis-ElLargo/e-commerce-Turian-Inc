// productos servivios crud

//GET
// Función para listar todos los productos
const listaProductos = () => fetch("http://localhost:3000/productos").then((respuesta) => 
respuesta.json()).catch((error) => console.log(error));

//POST
const crearProdutos = ( name, imageUrl, descripcion ) => {
  return fetch( `http://localhost:3000/productos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      descripcion,
      id:uuid.v4(),
    }),
  })
};

// PUT/PATCH
const actualizarProducto = async ( name, imageUrl, descripcion, id ) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      descripcion,
    }),
  })
    .then( (respuesta) => respuesta )
    .catch((error) => console.log(error));
};

// Función para listar un producto por su ID
const detalleProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${ id }`)
    .then((respuesta) => {
      return respuesta.json();
    });
};

// DELETE
const deleteProducto = async (id) => {
  return await fetch(`http://localhost:3000/productos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const productosService = {
  listaProductos,
  crearProdutos,
  actualizarProducto,
  detalleProducto,
  deleteProducto,
};