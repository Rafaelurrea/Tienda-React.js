import express from "express";//Se importa express para facilitar la comunicacion con el servidor
import { bookProduct, buyProducts,getAllProducts,getProduct,createProduct,updateProducts,deleteProduct } from "../controllers/ProductControllers.js";//obtenemos todos los controladores ya creados para ser usados 
const router = express.Router(); //definimos un enrotador para ayudar con las direccion


//generacion de rutas para usa la api creada para interactuar con la base de datos
//diferentes rutas a usar con las diferentes funcionalidades
router.get('/', getAllProducts)
router.put('/buy', buyProducts)
router.get('/book/:id', bookProduct)
router.get('/:id', getProduct)
router.post('/', createProduct)
router.put('/:id', updateProducts)
router.delete('/:id', deleteProduct)


export default router;