import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import './CheckoutForm.css'

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('error', error)
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setProcessing(true);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary btn-sm btn-wide mt-4 text-white" type="submit" >
                    Pay
                </button>
            </form>
            {cardError && <p className="text-warning ml-4">{cardError}</p>}
            {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
        </div>
    );
};

export default CheckoutForm;

/* disabled={!stripe || !clientSecret || processing} */