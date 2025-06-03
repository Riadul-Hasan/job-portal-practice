import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const {_id, title} = useLoaderData()
    // console.log(data)
    return (
        <div>
            Job details of {title}

           <Link to={`/jobApply/${_id}`}> <button className='btn btn-primary'>Apply Now</button></Link>
        </div>
    );
};

export default JobDetails;