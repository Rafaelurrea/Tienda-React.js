import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";//importamos el contexto 


//Este componente nos ayudara a tener un manejo del producto cuando esta en el carrito
export const CartItem = (props) => {
    const { id, nombre, precio, img1, img2, img3 } = props.data; //con los props recibimos los datos extraidos de los productos y los almacenamos en las variables
    const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);//almacenamos el context dentro de esas variables
    return  (
        <div className="cartItem">
            <div className="slide-var">
                <ul>
                         <li><img src={img1} alt={nombre}/></li>  {/*este es el carrusel para las imagenes */}
                    <li><img src={img2} alt={nombre}/></li>
                    <li><img src={img3} alt={nombre}/></li>
                </ul>
            </div>
            <div className="description">
                <p> 
                    <b> {nombre} </b>{/*se muestra el nombre del producto */}
                </p>
                <p> ${precio} </p>{/*se muestra el precio del producto */}
                <div className="countHandler">
                    <button onClick={() => removeFromCart(id)}> - </button>{/*se llama a la funcion para bajar y subir la cantidad del producto comprado y igualmente para el + */}
                    <input value={cartItems[id]} />
                    <button onClick={() => addToCart(id)}> + </button>
                </div>
            </div>
        </div>
    );
};