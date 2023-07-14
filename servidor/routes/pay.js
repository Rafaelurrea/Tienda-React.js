import Stripe from "stripe";//portal de pagos para conectarse a su api
const striper = Stripe('sk_test_51NJ7RVIppCBXGZn9L5S9Tko1n9zO4SnMgpq0RGokS4VWu6kxcpgly5VhGqNDPrckYDEAQFyAdvhJ4VbyEJte8Y4P003AbHuC5x');//clave de acceso stripe para recibir el pago

//funcion que permite conectarse a la api y realizar los pagos, recibe una promesa
export const pay = async (req,res) => {
    let {amount, id} = req.body
    try {
        const payment = await striper.paymentIntents.create({
            amount,
            currency: 'COP',
            description: 'shop',
            payment_method: id,
            confirm: true
        })

        console.log('payment', payment);
        res.json({
            message: 'payment succesful',
            succes: true
        }
        
        
        )
    } catch (error) {
        console.log('error', error);
        res.json({
            message:'payment failed',
            succes: false
        })
    }
}