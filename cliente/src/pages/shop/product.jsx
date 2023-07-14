import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../login/login.jsx";
import { useNavigate } from "react-router-dom";


const URI = "https://tienda-virtual-5kf44zl6k-santiocampo01.vercel.app//"; //direccion en la que se hacen peticiones

export const Product = (props) => {
    const { nombre, precio, descripcion, img1, img2, img3 } = props.data; //se le da valor a las variables en funcion de lo que se saca de la base de datos
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login"); //se hace la peticion para agregar al carrito
    };

    return (
        <div className="product"> {/*aqui se muestran las informaciones de los productos en la pagina principal */}
            <div className="slide-var">
                <ul>
                         <li><img src={img1} alt={nombre}/></li>  {/*este es el carrusel para las imagenes */}
                    <li><img src={img2} alt={nombre}/></li>
                    <li><img src={img3} alt={nombre}/></li>
                </ul>
            </div>
 
            <div className="name">
            <p> 
                <b>{nombre}</b> 
            </p>

            </div>
            <div className="description"> 
            <p>{descripcion}</p>
                <p> ${precio}</p>
            </div>
            <div className="buttonContainer">
            <button onClick={handleClick} className="addToCartBtn">Add To Cart</button> 
            </div>
       </div> 
    );
};