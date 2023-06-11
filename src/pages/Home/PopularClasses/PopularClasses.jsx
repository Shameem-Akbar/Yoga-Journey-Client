import React from 'react';

const PopularClasses = () => {
    return (
        <div className='mt-12 mb-6'>
            <h2 className='text-center text-5xl font-bold uppercase'>Our Popular Classes</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6  py-2 md:py-8 md:px-28'>
                <div className="card w-96 glass">
                    <figure>
                        <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" />
                    </figure>
                    <div className='px-4 pb-4'>
                        <h2 className="card-title mt-2">Name: <span className=' font-normal'>Yoga Dance</span></h2>
                        <p><span className='font-semibold'>Instructor Name:</span> <span className='text-slate-500'>Rahim Mia</span></p>
                        <p><span className='font-semibold'>Available Seats:</span> <span className='text-slate-500'>500</span></p>
                        <p><span className='font-semibold'>No. of Students:</span> <span className='text-slate-500'>3333</span></p>
                        <p><span className='font-semibold'>Price:</span> <span className='text-slate-500'>$40</span></p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm text-white btn-primary mt-6">Select Class</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PopularClasses;