import React from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";
import "./editProfileAdmin.css";

const URIADMIN = 'https://tienda-virtual-k237.onrender.com/users/3/'; //aqui se hacen las peticiones para el admin

const EditAdmin = () => {
    const [password, setPassword] = useState('');//se guarda la contraseña
    const [adress, setAdress] = useState('');//nueva direccion
    const [telephone, setTelephone] = useState('');//nuevo telefono
    const [email, setEmail] = useState('');//nuevo email
    const navigate = useNavigate(); //El navigate nos permite movernos estre URLs
    const navigateShop = () => {
        navigate(`/editInventory`);//redirecciona a editar el inventario
    }

    const update = async (e) => { //se hace una peticion para actualizar al admin
        e.preventDefault();
        await axios.put(URIADMIN, { password: password, adress: adress, telephone: telephone, email: email });
        navigateShop();
    }


    return (
        <div className="AdminEditBackground">
            <div className="AdminRegisterForm"> {/*este es el formulario que pide la info del admin para poder cambiar su info */}
                <h2>Edit Profile 📋</h2>
                <form onSubmit={update} action="/auth" method="post">
                    <h4>Enter the password 🔑</h4>
                    <input 
                    value={password}
                    onChange={ (e) => setPassword((e.target.value))}
                    type="password" name="pass" id="pass" placeholder="password"/>
                    <h4>Enter the adress 📫</h4>
                    <input 
                    value={adress}
                    onChange={ (e) => setAdress(e.target.value)}
                    type="text" name="pass" id="pass" placeholder="adress"/>
                    <h4>Enter the thelephone 📞</h4>
                    <input 
                    value={telephone}
                    onChange={ (e) => setTelephone(e.target.value)}
                    type="text" name="pass" id="pass" placeholder="telephone"/>
                    <h4>Enter the Email 📧</h4>
                    <input 
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                    type="text" name="pass" id="pass" placeholder="email"/>
                    <input type="submit" className="BtnLogin" value="Edit" />
                </form>
            </div>
        </div>
    )
}

export default EditAdmin;