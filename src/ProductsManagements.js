import React, { useState } from 'react';
// import mockProducts from '../mockData';

const mockProducts = [
  { id: 1, name: 'Lamps', category: 'Category 1 ', price: 100, stock: 10 },
  { id: 2, name: 'Apple', category: 'Category 2 ', price: 50, stock: 20 },
  { id: 3, name: 'Tables', category: 'Category 3 ', price: 200, stock: 60 },
  { id: 4, name: 'Oil', category: 'Category 4 ', price: 150, stock: 40 },
  { id: 5, name: 'Hair Cleaner', category: 'Category 5 ', price: 80, stock: 90 },

  // Add more products as needed
 ];
 
const ProductsManagement = () => {
 const [products, setProducts] = useState(mockProducts);
 const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', stock: '' });

 const handleAddProduct = () => {
    const newId = products.length + 1;
    const newProductWithId = { ...newProduct, id: newId };
    setProducts([...products, newProductWithId]);
    setNewProduct({ name: '', category: '', price: '', stock: '' });
 };

 const handleEditProduct = (id, updatedProduct) => {
    setProducts(products.map(product => product.id === id ? { ...product, ...updatedProduct } : product));
 };

 const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
 };

 return (
    <div>
      <h2>Products Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.stock}</td>
              <td>
                <button onClick={() => handleEditProduct(product.id, { name: 'Updated Product' })}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Add New Product</h2>
      <input
        type="text"
        placeholder="Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Category"
        value={newProduct.category}
        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
      />
      <input
        type="number"
        placeholder="Stock"
        value={newProduct.stock}
        onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
 );
};

export default ProductsManagement;
