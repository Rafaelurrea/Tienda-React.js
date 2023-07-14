import React from 'react';
import { Product } from './Product';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import './editProduct.css';


const URI = 'https://tienda-virtual-k237.onrender.com/'; //direccion donde se haran  las peticiones

export const EditProduct = () => {

    const[products, setProducts] = useState([]) // aqui se guardan los productos de la base de datos
    useEffect(() => {
        getProduct()
    }, []);

    const getProduct = async () => {//aqui se hace la solicitud para obtener los productos
        const res = await axios.get(URI)
        setProducts(res.data)
    }
    return (
        <div className="shop">
            <div className="shopTitle">
                <h2>Edit Products</h2>
            </div>
            <div className="products"> 
                {products.map((product) => (
                    <Product data={product} />// se muestran todos los productos que estan en el arreglo
                ))}
            </div>
        </div>
    )
};