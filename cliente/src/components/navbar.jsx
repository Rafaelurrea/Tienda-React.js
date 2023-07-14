import React, { useContext } from "react";//se importa react y el usecontext para poder usar el context que se usa globalmente
import { Link } from "react-router-dom";//se importa para darle direcciones a las paginas
import "../style/navbar.css";//se importa el cssde la navbar
import { ShopContext } from "../context/shop-context";//se importa el Shopcontext que contiene funciones utilizadas en todas muchas partes de  la aplicacion

//Definimos nuestro componente principal llamado Navbar
 const Navbar = () => {
    const context = useContext(ShopContext);//le damos las funciones del shop context a la variable context
    
    return (
        <div className="navbar">
        <div className="LogoInicio">
              <a href="/" ><img src={require("../imagenes/c3bca1a1-4bb1-4b2f-8ad1-118a37dcfcc5.jpg")} /> </a> {/*redirige a la ruta raiz cuando se le da clic al texto de shop*/}
            </div>
        <h1>COE GAMES 🎮</h1>
        { !context.admin ? /*se hace esta pregunta para saber si el usuario registrado es un admin y saber las opciones que se ofrecen*/
            !context.logged ? /*es para saber si hay un usuario logeado y por lo tanto al darle click en el carrito, poder redireccionar al login o al carrito */
                <div className="links">  

                    <Link to="/login"> {/*se redirige al login si se le da clic al carrito*/}
                        <img src={require("../imagenes/carrito.png")} className="carrito"/>
                    </Link>
                </div>
                :
                <div className="links"> {/*en caso de que este logeado se redirige igualmente al shop pero ahora cuando se le da clic al carrito redirecciona hacia el carrito*/}
                    <Link to="/shop" >
                    Shop
                      </Link>
                    <Link to="/cart">
                    <img src={require("../imagenes/carrito.png")} className="carrito"/>
                    </Link>
                </div>
            :
            <div className="links"> {/*si el usuario es admin envia hacia el editor del inventario y hacia el editor del perfil del administrador*/}
                    <Link to="/editInventory"> Products </Link>
                    <Link to="/editAdmin"> Admin Profile </Link>
                </div>
        }
        </div>
    )
};

export default Navbar;