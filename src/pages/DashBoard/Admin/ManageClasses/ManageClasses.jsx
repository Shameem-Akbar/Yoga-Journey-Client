import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('classes')
        return res.data;
    })

    console.log(classes);

    const handleApprove = manageClass => {
        fetch(`http://localhost:5000/classes/${manageClass._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `${manageClass.className} is Approved!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleDeny = manageClass => {
        fetch(`http://localhost:5000/classes/${manageClass._id}/deny`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `${manageClass.className} is Denied!`,
                        showConfirmButton: false,
                        timer: 1500

                    })
                }
            })
    }

    const handleFeedBack = () => {

    }

    return (
        <div className="w-full px-8">
            <Helmet>
                <title>Manage Classes | Yoga Journey</title>
            </Helmet>
            <h1 className="font-semibold text-5xl text-center mb-8">Manage Classes</h1>
            <div className="overflow-x-auto mx-4">
                <table className="table table-zebra w-full border-2 border-slate-500">
                    {/* head */}
                    <thead className='bg-slate-700 text-white'>
                        <tr>
                            <th className='text-lg'>No.</th>
                            <th className='text-lg uppercase'>Class Image</th>
                            <th className='text-lg uppercase'>Class Name</th>
                            <th className='text-lg uppercase'>Instructor Name</th>
                            <th className='text-lg uppercase'>Instructor Email</th>
                            <th className='text-lg uppercase'>Available Seats</th>
                            <th className='text-lg uppercase pl-8'>Price</th>
                            <th className='text-lg uppercase pl-6'>Status</th>
                            <th className='text-lg uppercase'>Approve</th>
                            <th className='text-lg uppercase'>Deny</th>
                            <th className='text-lg uppercase'>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((manageClass, index) => <tr key={manageClass._id}>
                                <th>{index + 1}.</th>
                                <td className='pl-12'><div className="avatar">
                                    <div className="w-16 rounded-xl">
                                        <img src={manageClass.image} />
                                    </div>
                                </div></td>
                                <td>{manageClass.className}</td>
                                <td>{manageClass.instructorName}</td>
                                <td>{manageClass.instructorEmail}</td>
                                <td className='pl-20'>{manageClass.availableSeats}</td>
                                <td className='pl-12'>{manageClass.price}</td>
                                <td><button className='btn btn-primary text-white'>{manageClass.status}</button></td>
                                {
                                    manageClass.status === 'approved' || manageClass.status === "denied" ? (
                                        <td>
                                            <button disabled className="btn btn-success text-white"
                                            >Approve</button>
                                        </td>

                                    ) : (

                                        <td>
                                            <button onClick={() => handleApprove(manageClass)} className="btn btn-success text-white"
                                            >Approve</button>
                                        </td>
                                    )
                                }
                                {
                                    manageClass.status === 'approved' || manageClass.status === "denied" ? (
                                        <td>
                                            <button disabled className="btn btn-success text-white"
                                            >Deny</button>
                                        </td>

                                    ) : (

                                        <td>
                                            <button onClick={() => handleDeny(manageClass)} className="btn btn-success text-white"
                                            >Deny</button>
                                        </td>
                                    )
                                }
                                <td><button onClick={() => handleFeedBack(manageClass)} className="btn btn-error  text-white">Send</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageClasses;