import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SelectedClasses = () => {

    const { user } = useAuth();

    const [axiosSecure] = useAxiosSecure();
    const { data: studentClasses = [], refetch } = useQuery(['studentClasses'], async () => {
        const res = await axiosSecure.get(`selected-classes/${user?.email}`)
        return res.data;
    })

    const handleDeleteClass = studentClass => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-12-server-xi-three.vercel.app/selected-classes/${studentClass._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your selected class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div className="w-full space-y-4 my-8  py-8">
            <h1 className="font-semibold text-5xl text-center mb-8 uppercase">My Selected Classes</h1>
            <div className="overflow-x-auto mx-4">
                <table className="table table-zebra w-full border-2 border-slate-500">
                    {/* head */}
                    <thead className='bg-slate-700 text-white'>
                        <tr>
                            <th className='text-lg'>No.</th>
                            <th className='text-lg uppercase'>Class Image</th>
                            <th className='text-lg uppercase'>Class Name</th>
                            <th className='text-lg uppercase pl-8'>Price</th>
                            <th className='text-lg uppercase'>Payment</th>
                            <th className='text-lg uppercase'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            studentClasses.map((studentClass, index) => <tr key={studentClass._id}>
                                <th>{index + 1}.</th>
                                <td className='pl-12'><div className="avatar">
                                    <div className="w-16 rounded-xl">
                                        <img src={studentClass.image} />
                                    </div>
                                </div></td>
                                <td>{studentClass.className}</td>
                                <td className='pl-12'>${studentClass.price}</td>
                                <td><Link to={`/dashboard/payment?price=${studentClass.price}&className=${studentClass.className}`}><button className="btn btn-success px-6 text-white">Pay</button></Link></td>
                                <td><button onClick={() => handleDeleteClass(studentClass)} className="btn btn-warning  text-white">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClasses;