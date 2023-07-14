//Importamos express para manejar solicitudes
import express from "express";

//se improta la libreria nodemailer que permite el facil envio de correo
import nodemailer from 'nodemailer';

//Importamos la tabla del producto en nuestra base de datos
import ProductModel from "../models/ProductModel.js";


//El transportador, se encargara de ser el conducto para pasar el correo
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 's.jaramillo4@utp.edu.co',
        pass: 'bwxcnqtrmneotees'
    }
});

//sendEmail es una funcion que no recibe ningun parametro, pero que se encargara de enviar el email de cuando el stock este bajo, junto con su asunto y mensaje
export const sendMail =   () => {

    transporter.sendMail({
        from: "ecommerce <ecommerce@gmail.com",
        to: ["s.jaramillo4@utp.edu.co", "santimejiaok@gmail.com", "rafael.urrea@utp.edu.co"],
        subject: "Stock at its minimun",
        text: `One of your products is almost empty, please check it ${product.amount}`
    }).then(console.info)
    .catch(console.catch)
}


//sendEmailBuy es igual a senMail, pero esta se encargara de enviar el email cuando una compra se realice en la pagina
export const sendEmailBuy =  (req, res) => {
    // Obtén los datos necesarios de la solicitud POST
    const { product } = req.body;
  
    transporter.sendMail({
        from: "ecommerce <ecommerce@gmail.com>",
        to: ["s.jaramillo4@utp.edu.co", "santimejiaok@gmail.com", "rafael.urrea@utp.edu.co"],
        subject: "Succesful Purchase",
        text: `Congratulations,a purchase has been made, product name: , for an amount of:  ${product.amount}`,
      })
      .then(() => {
        console.info("Correo enviado correctamente");
        res.sendStatus(200);
      })
      .catch((error) => {
        console.error("Error al enviar el correo", error);
        res.sendStatus(500);
      });
  };
  


