import React from 'react';
import { Product } from './productAddtoCart';
import './shopAddtoCart.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const URI = 'https://tienda-virtual-5kf44zl6k-santiocampo01.vercel.app//products/'; //aqui se hacen las peticiones 

export const ShopAddtoCart = () => {

    const[products, setProducts] = useState([])//aqui se guardan todos los productos
    useEffect(() => {
        getProducts()
    }, []);

    const getProducts = async () => {//aqui se hace la solicitud 
        const res = await axios.get(URI)
        setProducts(res.data)
    }

    return (
        <div className="shop">
            <div className="shopTitle">
            </div>
            <div className="products"> 
                {products.map((product) => (

                    <Product data={product} key={product.id} />//aqui por todo el arreglo de productos se imprimen los productos
                ))}
            </div>
        </div>
    )
};