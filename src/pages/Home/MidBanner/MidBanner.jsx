import React from 'react';

const MidBanner = () => {
    return (
        <div className='my-4' style={{ backgroundColor: "#038c73", color: "white" }}>
            <div className='flex flex-wrap justify-evenly md:justify-around pt-3 pb-2 md:py-4'>
                <div className='flex items-center'>
                    <img style={{ width: "4rem", height: '4rem', color: "white" }} className='mr-3' alt="" />
                    <div>
                        <h1 className='mb-0'>30+</h1>
                        <p className='mb-0 fs-5'>Cooks</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MidBanner;