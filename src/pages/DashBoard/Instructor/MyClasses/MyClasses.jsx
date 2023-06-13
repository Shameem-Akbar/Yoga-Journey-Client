import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { useState } from 'react';
import { useEffect } from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const MyClasses = () => {
    const { user } = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get(`my-classes/${user?.email}`)
        return res.data;
    })

    console.log(classes);



    return (
        <div className="w-full space-y-4 my-8  py-8">
            <h1 className="font-semibold text-5xl text-center mb-8">My Classes</h1>
            <div className="overflow-x-auto mx-4">
                <table className="table table-zebra w-full border-2 border-slate-500">
                    {/* head */}
                    <thead className='bg-slate-700 text-white'>
                        <tr>
                            <th className='text-lg'>No.</th>
                            <th className='text-lg uppercase'>Class Name</th>
                            <th className='text-lg uppercase'>Available Seats</th>
                            <th className='text-lg uppercase'>Enrolled Students</th>
                            <th className='text-lg uppercase pl-8'>Price</th>
                            <th className='text-lg uppercase pl-6'>Status</th>
                            <th className='text-lg uppercase'>Feedback</th>
                            <th className='text-lg uppercase'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((myClass, index) => <tr key={myClass._id}>
                                <th>{index + 1}.</th>
                                <td>{myClass.className}</td>
                                <td className='pl-20'>{myClass.availableSeats}</td>
                                <td className='pl-24'>{myClass.enrolledStudents}</td>
                                <td className='pl-12'>${myClass.price}</td>
                                <td><button className='btn btn-primary text-white'>{myClass.status}</button></td>
                                <td>{myClass.feedback}</td>
                                <td><button className="btn btn-ghost bg-red-600  text-white">Update</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;