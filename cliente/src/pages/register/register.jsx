import React from "react";
import './register.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from "react";

const URI = 'https://api.render.com/deploy/srv-ciolfp6nqqlfegd927e0?key=i0Gz58yml08/'; //direccion en la que se hacen peticiones 

const Register = () => {
    const [name, setName] = useState(''); //todo esto son valores que se registran en la base de datos
    const [password, setPassword] = useState('');
    const [adress, setAdress] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate(`/login`);//envia al login
    }

    const navigateRegister = () => {
        navigate(`/register`);//envia al register
    }

    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async() => {//se obtienen todos los usuarios
        const res = await axios.get(URI)
        setUsers(res.data)
    }

    const store = async (e) => { //hace un metodo post para ingresar el usuario a la base de taods
        e.preventDefault();
        await axios.post(URI, {user_name: name, password: password, adress: adress, telephone: telephone, email: email });
        navigateLogin();
    }

        //Diseño de nuestro formulario de register
    return (
        <div className="RegisterBackground">
            <div className="RegisterForm">
                <h2>Register 🌐</h2>
                <form onSubmit={store} action="/auth" method="post"> {/*se llama a store en el momento de enviar el formulario */}
                    <h4 className="text">Enter your username 👥</h4>
                    <input
                        value={name}
                        onChange={(e) => {
                            const text = e.target.value.replace(/[^A-Za-z]/g, ""); // Filtra solo letras
                            if (text === e.target.value) {
                            setName(text); // Actualiza el estado name solo si solo contiene letras
                            }
                        }}
                        type="text"
                        name="user"
                        id="user"
                        placeholder="Username" 
                        required
                    />
                    <h4 className="text">Enter your password 🔑</h4>
                    <input 
                    value={password}
                    onChange={ (e) => setPassword((e.target.value))}
                    type="password" name="pass" id="pass" placeholder="Password" required/>
                    <h4 className="text">Enter your adress 📫</h4>
                    <input 
                    value={adress}
                    onChange={ (e) => setAdress(e.target.value)}
                    type="text" name="pass" id="pass" placeholder="Adress" required/>
                    <h4 className="text">Enter your telephone number 📞</h4>
                    <input
                    value={telephone}
                    onChange={(e) => {
                        const numericValue = e.target.value.replace(/\D/g, ""); // Filtra solo caracteres numéricos
                        setTelephone(numericValue);
                    }}
                    type="text"
                    name="pass"
                    id="pass"
                    placeholder="Telephone"
                    pattern="[0-9]*" // Acepta solo números
                    required/>
                    <h4 className="text">Enter your E-mail 📧</h4>
                    <input 
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                    type="text" name="pass" id="pass" placeholder="E-mail" required/>
                    <input type="submit" className="BtnLogin" value="Register" />
                </form>
            </div>
        </div>
    )
}

export default Register;