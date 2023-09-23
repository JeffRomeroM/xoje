import React, { useState, useEffect } from 'react';
import './Prod.css'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: 0, rating: 0, color: ''});
  const [editProduct, setEditProduct] = useState(null);
  const url = 'http://192.168.100.121:3001/products';

  useEffect(() => {
    // Obtener la lista de productos desde la API de Nest.js en el puerto 3000
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error al obtener productos:', error));
  }, []);

  const handleCreate = () => {
    // Enviar una solicitud POST a la API para crear un nuevo producto
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((createdProduct) => {
        setProducts([...products, createdProduct]);
        setNewProduct({ name: '', description: '', price: 0, rating: 0, color: '' });
      })
      .catch((error) => console.error('Error al crear producto:', error));
  };

  const handleEdit = (product) => {
    // Iniciar la edición de un producto
    setEditProduct(product);
  };

  const handleUpdate = () => {
    // Enviar una solicitud PUT a la API para actualizar un producto
    fetch(`${url}/${editProduct.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editProduct),
    })
      .then(() => {
        const updatedProducts = products.map((product) =>
          product.id === editProduct.id ? editProduct : product
        );
        setProducts(updatedProducts);
        setEditProduct(null);
      })
      .catch((error) => console.error('Error al actualizar producto:', error));
  };

  const handleDelete = (product) => {
    // Enviar una solicitud DELETE a la API para eliminar un producto
    fetch(`${url}/${product.id}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedProducts = products.filter((p) => p.id !== product.id);
        setProducts(updatedProducts);
      })
      .catch((error) => console.error('Error al eliminar producto:', error));
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      
      <h2>Nuevo Producto</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Descripcion"
        value={newProduct.description}
        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Precio"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
      />
      <input
        type="number"
        placeholder="Estrellas"
        value={newProduct.rating}
        onChange={(e) => setNewProduct({ ...newProduct, rating: parseFloat(e.target.value) })}
      />
      <input
        type="text"
        placeholder="Color"
        value={newProduct.color}
        onChange={(e) => setNewProduct({ ...newProduct, color: e.target.value })}
      />
      <button onClick={handleCreate}>Crear</button>
      {editProduct && (
        <div>
          <h2>Editar Producto</h2>
          <input
            type="text"
            placeholder="Nombre"
            value={editProduct.name}
            onChange={(e) => setEditProduct({ ...editProduct, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Descripcion"
            value={editProduct.description}
            onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })}
          />
          <input
            type="number"
            placeholder="Precio"
            value={editProduct.price}
            onChange={(e) => setEditProduct({ ...editProduct, price: parseFloat(e.target.value) })}
          />
          <input
            type="number"
            placeholder="Estrellas"
            value={editProduct.rating}
            onChange={(e) => setEditProduct({ ...editProduct, rating: parseFloat(e.target.value) })}
          />
          <input
            type="text"
            placeholder="Color"
            value={editProduct.color}
            onChange={(e) => setEditProduct({ ...editProduct, color: e.target.value })}
          />
          <button onClick={handleUpdate}>Actualizar</button>
        </div>
      )}
      <ul className='produ'>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.description}- ${product.price}- ${product.rating} -{product.color}
            <button onClick={() => handleEdit(product)}>Editar</button>
            <button onClick={() => handleDelete(product)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
