import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const EnrolledClasses = () => {
    const { user } = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const { data: studentClasses = [], refetch } = useQuery(['payments'], async () => {
        const res = await axiosSecure.get(`payments/${user?.email}`)
        return res.data;
    })
    return (
        <div className="w-full space-y-4 my-8  py-8">
            <h1 className="font-semibold text-5xl text-center mb-8 uppercase">My Enrolled Classes</h1>
            <div className="overflow-x-auto mx-4">
                <table className="table table-zebra w-full border-2 border-slate-500">
                    {/* head */}
                    <thead className='bg-slate-700 text-white'>
                        <tr>
                            <th className='text-lg'>No.</th>
                            <th className='text-lg uppercase'>Class Name</th>
                            <th className='text-lg uppercase pl-8'>Price</th>
                            <th className='text-lg uppercase pl-8'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentClasses.map((studentClass, index) => <tr key={studentClass._id}>
                                <th>{index + 1}.</th>
                                <td>{studentClass.className}</td>
                                <td className='pl-12'>${studentClass.price}</td>
                                <td className='pl-8'><button className='btn btn-primary text-white'>Paid</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClasses;