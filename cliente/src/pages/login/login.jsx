import React, { useState, useEffect, useContext } from "react";
import './login.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ShopContext } from "../../context/shop-context";

const URI = 'http://localhost:3001/users/';

const Login = () => {
  const context = useContext(ShopContext);
  const navigate = useNavigate();

  const navigateRegister = () => {
    navigate(`/register`);
  };

  const navigateShopAddtoCart = () => {
    navigate(`/shop`);
  };

  const navigateEditInventory = () => {
    navigate(`/editInventory`);
  };

  const [entrada, setEntrada] = useState('');
  const [entradaP, setEntradaP] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const res = await axios.get(URI);
      setUsers(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const compare = () => {
    return users.some(user => user.user_name === entrada && user.password === entradaP);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (compare()) {
      if (entrada === 'admin') {
        navigateEditInventory();
        context.AdminChanger(true);
      } else {
        navigateShopAddtoCart();
      }
      context.loggedChanger(true);
    } else {
      alert("INVALID LOGIN CREDENTIALS, PLEASE TRY AGAIN");
    }
  };

  return (
    <div className="LoginBackground">
      <div className="LoginForm">
        <h2>Login ➡️</h2>
        <form onSubmit={handleFormSubmit}>
          <h4>Enter Your Username 👥</h4>
          <input
            value={entrada}
            onChange={(e) => setEntrada(e.target.value)}
            type="text"
            name="user"
            id="user"
            placeholder="Username"
          />
          <h4>Enter Your Password 🔑</h4>
          <input
            value={entradaP}
            onChange={(e) => setEntradaP(e.target.value)}
            type="password"
            name="pass"
            id="pass"
            placeholder="Password"
          />
          <button type="submit" className="BtnLogin">
            Login
          </button>
        </form>
        <h4>You still do not have an account? 👇</h4>
        <div
          className="BtnRegister"
          onClick={navigateRegister}
        >
          Register
        </div>
      </div>
    </div>
  );
};

export default Login;