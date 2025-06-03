import React, { use } from 'react';
import JobsCard from './JobsCard';

const TopJobs = ({jobsPromise}) => {
     const jobs = use(jobsPromise)
    return (
        <div>
            <h1 className='text-4xl font-bold text-center py-16'>Top Trending Jobs</h1>
            <div className='container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    jobs.map(job => <JobsCard key={job._id} job={job}></JobsCard>)
                }
            </div>
        </div>
    );
};

export default TopJobs;