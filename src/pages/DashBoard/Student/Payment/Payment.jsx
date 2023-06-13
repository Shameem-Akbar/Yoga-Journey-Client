import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
const Payment = () => {

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div>
            <h1 className="font-semibold text-5xl text-center mb-8 uppercase">Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;