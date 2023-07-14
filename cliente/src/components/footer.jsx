import React from "react";
import "../style/footer.css"


const Footer = ({ nombre }) => {
  return (
    <div className="footer">
        <footer>
        <p>Realizado por: <a href="https://github.com/santiagoaramillo" target="_blank">ING (c) Santiago Jaramillo Duque</a> - <a href="https://github.com/santiOcampo01" target="_blank">ING (c)Santiago Mejia Ocampo</a> - <a href="https://github.com/Rafaelurrea" target="_blank">ING (c) Rafael Urrea Gaviria</a></p>
        </footer>
    </div>
  );
};

export default Footer;
