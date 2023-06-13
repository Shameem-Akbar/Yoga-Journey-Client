import React from 'react';

import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import InstructorCard from './InstructorCard';

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: Instructors = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })
    return (
        <div className='mb-4'>
            <div className='bg-primary'>
                <h1 className='font-semibold text-5xl text-center py-8 text-white'>Instructors</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 py-2 md:py-8 md:px-28'>
                {
                    Instructors.map(instructor => <InstructorCard
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;