import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const InstructorCard = ({ instructor }) => {
    const { instructorImage, instructorName, instructorEmail } = instructor
    return (
        <div className="card w-96 glass">
            <figure>
                <img src={instructorImage} alt="car!" />
            </figure>
            <div className='px-4 pb-4'>
                <h2 className="card-title mt-2">Name: <span className=' font-normal'>{instructorName}</span></h2>
                <p className='my-0.5'><span className='font-semibold'>Email:</span> <span className='text-slate-500'>{instructorEmail}</span></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-sm text-white btn-primary mt-6">See Classes<FaArrowRight /> </button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;