import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import error from '../../assets/icons/error.gif'

const PageNotFound = () => {
    return (
        <div className='bg-base-200 pb-16
        '>
            <div className='flex justify-center max-h-screen'>
                <img src={error} alt="" />
            </div>
            <div className='flex justify-center'>
                <Link to='/'>
                    <button className='btn btn-primary btn-wide text-white text-lg font-semibold'><FaArrowLeft className='mr-1'></FaArrowLeft>Back To Home</button>
                </Link>
            </div>
        </div> //test
    );
};

export default PageNotFound;