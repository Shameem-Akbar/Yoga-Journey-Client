import React, { useState } from 'react';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const ClassCard = ({ singleClass }) => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { user } = useAuth();

    const { image, className, instructorName, availableSeats, price, _id } = singleClass;

    const navigate = useNavigate();
    const location = useLocation();

    const [isClassSelected, setIsClassSelected] = useState(false);

    const handleSelectedClass = singleClass => {
        setIsClassSelected(true)
        console.log(singleClass);
        if (user && user.email) {
            const selectedClass = { selectedClassId: _id, className, image, price, email: user.email }
            fetch('https://assignment-12-server-xi-three.vercel.app/selected-classes', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Class is Selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    //for available seat count to zero
    const cardStyle = {
        background: availableSeats === 0 ? 'red' : 'none',
        color: availableSeats === 0 ? 'white' : 'inherit'
    };

    return (
        <div className="card w-96 glass" style={cardStyle}>
            <figure>
                <img src={image} alt="" />
            </figure>
            <div className='px-4 pb-4'>
                <h2 className="card-title mt-2">Name: <span className=' font-normal'>{className}</span></h2>
                <p className='my-0.5'><span className='font-semibold'>Instructor Name:</span> <span>{instructorName}</span></p>
                <p><span className='font-semibold'>Available Seats:</span> <span>{availableSeats}</span></p>
                <p className='mt-0.5'><span className='font-semibold'>Price:</span> <span>${price}</span></p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleSelectedClass(singleClass)} disabled={isClassSelected || isAdmin || isInstructor || singleClass.availableSeats === 0} className="btn btn-sm text-white btn-primary mt-6">Select Class</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;