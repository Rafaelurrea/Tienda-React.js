import React, { useState } from "react";
import axios from 'axios';
import { EditProduct } from "./editProduct.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const URI = 'http://localhost:3001/products/';

export const Product = (props) => {
  const { id, nombre, precio, img1, img2, img3, stockMax, stockMin, stock } = props.data;

  const [priceHook, setPrice] = useState(precio);
  const [maxStock, setMaxStock] = useState(stockMax);
  const [minStock, setMinStock] = useState(stockMin);
  const [actualStock, setActualStock] = useState(stock);

  const updateProduct = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`${URI}${id}`, {
        precio: priceHook,
        stockMax: maxStock,
        stockMin: minStock,
        stock: actualStock,
      });

      // Realizar cualquier otra acción después de la actualización exitosa, como mostrar una notificación, etc.
    } catch (error) {
      // Manejar errores de actualización aquí
    }
  }

  function handleStock() {
    alert("Stock changed");
    window.location.reload();
  }
  

  return (
    <div className="product">
      <div className="slide-var">
        <ul>
          <li><img src={img1} alt={nombre} /></li>
          <li><img src={img2} alt={nombre} /></li>
          <li><img src={img3} alt={nombre} /></li>
        </ul>
      </div>
      <div className="description">
        <p>
          <b>{nombre}</b>
        </p>
        <p>${precio}</p>
        <p>Max Stock: {stockMax}</p>
        <p>Min Stock: {stockMin}</p>
        <p>Stock: {actualStock}</p>
        <form onSubmit={updateProduct} method="post">
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            name="price"
            id="price"
            placeholder="New Price"
      
          />
          <input
            onChange={(e) => setMaxStock(e.target.value)}
            type="text"
            name="maxStock"
            id="maxStock"
            placeholder="New Max Stock"
    
          />
          <input
            onChange={(e) => setMinStock(e.target.value)}
            type="text"
            name="minStock"
            id="minStock"
            placeholder="New Min Stock"
           
          />
          <input
            onChange={(e) => setActualStock(e.target.value)}
            type="text"
            name="stock"
            id="stock"
            placeholder="New stock"
            value={actualStock}
          />
          <input type="submit" className="btn-login" value="Edit" onClick={handleStock} target/>
        </form>
      </div>
    </div>
  );
};