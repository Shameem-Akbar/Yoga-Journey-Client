import React from 'react';

const PopularClassesCard = ({ popularClass }) => {

    const { image, className, instructorName, availableSeats, price, enrolledStudents } = popularClass;

    return (
        <div className="card w-96 glass">
            <figure>
                <img src={image} alt="car!" />
            </figure>
            <div className='px-4 pb-4'>
                <h2 className="card-title mt-2">Name: <span className=' font-normal'>{className}</span></h2>
                <p><span className='font-semibold'>Instructor Name:</span> <span>{instructorName}</span></p>
                <p><span className='font-semibold'>Available Seats:</span> <span>{availableSeats}</span></p>
                <p><span className='font-semibold'>No. of Students:</span> <span>{enrolledStudents}</span></p>
                <p><span className='font-semibold'>Price:</span> <span>${price}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm text-white btn-primary mt-6">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassesCard;