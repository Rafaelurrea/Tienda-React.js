import nodemailer from 'nodemailer'; //se improta la libreria nodemailer que permite el facil envio de correo
import ProductModel from "../models/ProductModel.js";

//El transportador, simplemente una receta de cocina en la cual SMTP protocolo simple de transferencia de correo
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 's.jaramillo4@utp.edu.co',
        pass: 'ivtxjavfrfulcpfv'
    }
});

//funcion que envia el correo con el contenido usando la libreria de mailerconst updateContent = async (product, quantity) => {



export const sendMail = async (product, id) => {
    const productos = await ProductModel.findAll({
        attributes: ["id", "name"],
        where: {id: product,
        nombre: product}
    })
    transporter.sendMail({
        from: "ecommerce <ecommerce@gmail.com",
        to: ["s.jaramillo4@utp.edu.co", "santimejiaok@gmail.com", "rafael.urrea@utp.edu.co"],
        subject: "Stock at its minimun",
        text: `The following product's stock which id's is${productos[0].dataValues.nombre}. is almost empty`
    }).then(console.info)
    .catch(console.catch)
}

export const sendMailBuy = product => {
    const productos =  ProductModel.findAll({
        attributes: ['id', 'stock', 'nombre'],
        where:{ id: productos }
    })
    console.log("este e" + product.id)
    transporter.sendMail({
        from: "ecommerce <ecommerce@gmail.com",
        to: ["s.jaramillo4@utp.edu.co", "santimejiaok@gmail.com", "rafael.urrea@utp.edu.co"],
        subject: "Succesful Purchase",
        text: `A purchase was made, product is${prod.id}`
    }).then(console.info)
    .catch(console.catch)
}


