import React, { use } from 'react';


const ApplicationList = ({myApplicationsPromise}) => {
    const applications = use(myApplicationsPromise);
   
    return (
        <div>
            <h2>Job apply so far: {applications.length}</h2>
            
             <h4>Hello list</h4>
        </div>
    );
};

export default ApplicationList;