import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {

    const { user } = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const { data: paymentHistory = [], refetch } = useQuery(['payments'], async () => {
        const res = await axiosSecure.get(`payments/${user?.email}`)
        return res.data;
    })

    return (
        <div className="w-full space-y-4 my-8  py-8">
            <h1 className="font-semibold text-5xl text-center mb-8 uppercase">Payment History</h1>
            <div className="overflow-x-auto mx-4">
                <table className="table table-zebra w-full border-2 border-slate-500">
                    {/* head */}
                    <thead className='bg-slate-700 text-white'>
                        <tr>
                            <th className='text-lg'>No.</th>
                            <th className='text-lg uppercase'>Transaction Id</th>
                            <th className='text-lg uppercase'>Class Name</th>
                            <th className='text-lg uppercase pl-8'>Price</th>
                            <th className='text-lg uppercase pl-16'>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymentHistory.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}.</th>
                                <td>{payment.
                                    transactionId}</td>
                                <td className='pl-8'>{payment.className}</td>
                                <td className='pl-12'>${payment.price}</td>
                                <td>{payment.date}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;