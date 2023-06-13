import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import ClassCard from './ClassCard';

const Classes = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })

    return (
        <div className='mb-4'>
            <div className='bg-primary'>
                <h1 className='font-semibold text-5xl text-center py-8 text-white'>Classes</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-16 py-2 md:py-8 md:px-28'>
                {
                    classes.map(singleClass => <ClassCard
                        singleClass={singleClass}
                        key={singleClass._id}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;