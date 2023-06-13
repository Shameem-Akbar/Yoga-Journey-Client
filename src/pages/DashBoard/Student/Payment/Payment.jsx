import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useLocation } from 'react-router-dom';
const Payment = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const price = searchParams.get('price');
    const className = searchParams.get('className');
    console.log(price, className);

    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div>
            <h1 className="font-semibold text-5xl text-center mb-8 uppercase">Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} className={className}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;