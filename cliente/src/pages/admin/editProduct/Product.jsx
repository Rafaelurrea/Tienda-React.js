import React, { useState } from "react";
import axios from 'axios';
import { EditProduct } from "./editProduct.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const URI = 'https://tienda-virtual-k237.onrender.com/';//Direccion a donde se ralizaran las peticiones

//Funcion que nos permitira actualizar los productos d ela base de datos
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
    } catch (error) {
      alert("Update Failed")
    }
  }
     
      //Funcion que nos recargara la ventana al actualizar un producto
  function handleStock() {
    //window.location.reload();
  }

 //Asi es como estara compuesta  nuestra modalidad de editar un producto
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
        <p>${priceHook}</p>
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
            value={priceHook}
          />
          <input 
            onChange={(e) => setMaxStock(e.target.value)}
            type="text"
            name="maxStock"
            id="maxStock"
            placeholder="New Max Stock"
            value={maxStock}
          />
          <input 
            onChange={(e) => setMinStock(e.target.value)}
            type="text"
            name="minStock"
            id="minStock"
            placeholder="New Min Stock"
            value={minStock}
           
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