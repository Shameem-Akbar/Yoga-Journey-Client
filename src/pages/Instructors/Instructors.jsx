import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Instructors = () => {
    return (
        <div className='mb-4'>
            <div className='bg-primary'>
                <h1 className='font-semibold text-5xl text-center py-8 text-white'>Instructors</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-2 md:py-8 md:px-28'>
                <div className="card w-96 glass">
                    <figure>
                        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" />
                    </figure>
                    <div className='px-4 pb-4'>
                        <h2 className="card-title mt-2">Name: <span className=' font-normal'>Shameem Akbar</span></h2>
                        <p className='my-0.5'><span className='font-semibold'>Email:</span> <span className='text-slate-500'>shameemakbar789@gmail.com</span></p>
                        <p><span className='font-semibold'>No. of Classes Taken:</span> <span className='text-slate-500'>40</span></p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm text-white btn-primary mt-6">See Classes <FaArrowRight /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructors;