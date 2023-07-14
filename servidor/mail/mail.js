import express from "express";
import nodemailer from 'nodemailer'; //se improta la libreria nodemailer que permite el facil envio de correo
import ProductModel from "../models/ProductModel.js";


//El transportador, simplemente una receta de cocina en la cual SMTP protocolo simple de transferencia de correo
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 's.jaramillo4@utp.edu.co',
        pass: 'yyyyyyyyyyyyyyyyyyyyyy'
    }
});

export const sendMail =   () => {

    transporter.sendMail({
        from: "ecommerce <ecommerce@gmail.com",
        to: ["s.jaramillo4@utp.edu.co", "santimejiaok@gmail.com", "rafael.urrea@utp.edu.co"],
        subject: "Stock at its minimun",
        text: `One of your products is almost empty, please check it ${product.amount}`
    }).then(console.info)
    .catch(console.catch)
}

export const sendEmailBuy =  (req, res) => {
    // Obtén los datos necesarios de la solicitud POST
    const { product } = req.body;
  
    transporter.sendMail({
        from: "ecommerce <ecommerce@gmail.com>",
        to: ["s.jaramillo4@utp.edu.co", "santimejiaok@gmail.com", "rafael.urrea@utp.edu.co"],
        subject: "Succesful Purchase",
        text: `Congratulations your purchased by ${product.name.nombre}, for an amount of ${product.amount}`,
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
  


