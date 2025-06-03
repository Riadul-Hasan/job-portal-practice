import React, { Suspense } from 'react';
import ApplicationStats from './ApplicationStats';
import ApplicationList from './ApplicationList';
import useAuth from '../../hook/useAuth';
import { myApplicationsPromise } from '../../api/applicationApi';


const MyApplications = () => {
    const {user} = useAuth()
    return (
        <div>
            <h2 className='text-3xl font-bold text-center py-10'>My Job Applications</h2>
            <ApplicationStats></ApplicationStats>
            <Suspense fallback={"Loading your applications....."}>
                <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;