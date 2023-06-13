import React from 'react';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import PopularClassesCard from './PopularClassesCard';

const PopularClasses = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: popularClasses = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/popular-classes')
        return res.data;
    })

    return (
        <div className='mt-6 mb-6'>
            <h2 className='text-center text-3xl md:text-5xl font-bold uppercase'>Our Popular Classes</h2>
            <div className='px-4 md:px-72 mt-2 md:mt-3 md:text-lg text-slate-500'>
                <p className='text-center'>Our popular class is designed to challenge your strength, stretch your body, and help you find peace through easy, mindful breathing. Led by our exceptional team of world-class instructors.</p>
            </div>
            <div className='flex justify-center mt-3'>
                <Link to="/classes">
                    <button className='btn btn-primary btn-outline'>View Classes</button>
                </Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6  py-2 md:py-8 md:px-28'>
                {
                    popularClasses.map(popularClass => <PopularClassesCard
                        popularClass={popularClass}
                        key={popularClass._id}
                    ></PopularClassesCard>)
                }

            </div>
        </div>
    );
};

export default PopularClasses;