import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaRegTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(`https://assignment-12-server-xi-three.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => {
                console.error(error);
            });
    }
    const handleMakeInstructor = user => {
        fetch(`https://assignment-12-server-xi-three.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className="w-full px-8">
            <Helmet>
                <title>Manage Users | Yoga Journey</title>
            </Helmet>
            <h1 className="font-semibold text-5xl text-center mb-8">Manage Users</h1>
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full border-2 border-slate-500">
                    {/* head */}
                    <thead className='bg-slate-700 text-white'>
                        <tr>
                            <th className='text-lg'>No.</th>
                            <th className='text-lg uppercase'>Name</th>
                            <th className='text-lg uppercase'>Email</th>
                            <th className='text-lg uppercase pl-20'>Role</th>
                            <th className='text-lg uppercase'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}.</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user.role === 'admin' || user.role === 'instructor' ? (
                                        <div>
                                            <button
                                                className="btn btn-primary btn-sm text-white"
                                                disabled={true}
                                            >
                                                Admin
                                            </button>
                                            <button
                                                className="btn btn-secondary btn-sm text-white ml-2"
                                                disabled={true}
                                            >
                                                Instructor
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn btn-primary btn-sm text-white"
                                            >
                                                Admin
                                            </button>
                                            <button
                                                onClick={() => handleMakeInstructor(user)}
                                                className="btn btn-secondary btn-sm text-white ml-2"
                                            >
                                                Instructor
                                            </button>
                                        </>
                                    )}
                                </td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaRegTrashAlt></FaRegTrashAlt></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;