import React from 'react';
import {Elements} from "@stripe/react-stripe-js";//Los elementos de Stripe son componentes de interfaz de usuario que facilitan la recopilación de información de tarjetas de crédito de forma segura
import { loadStripe } from '@stripe/stripe-js'; // para crear instancias de los elementos de Stripe, como el campo de número de tarjeta, campo de fecha de vencimiento, campo de código CVC, etc.
import PaymentForm from './PaymentForm';

const PUBLIC_KEY="pk_test_51NJ7RVIppCBXGZn9kiYqZRMwPJRCESR3tv7sk2WkxQ7v0omnLIxfEziakcNnOLxn8JfzU975WG10AE8c8OPIWpab00AAAu6FNH" //se coloca la llave publica

const stripeTestPromise = loadStripe(PUBLIC_KEY); //se crea una variable en la que se almacena la key

export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>{/*se llama al elemento al formulario de del pago  */}
                <PaymentForm />
        </Elements>
    )
}