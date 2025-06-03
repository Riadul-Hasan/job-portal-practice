import React from "react";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router";

const JobsCard = ({job}) => {
    const {title, location,_id, requirements,salaryRange,company, description, company_logo} = job
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="flex p-2 gap-4">
        <figure>
        <img
          src={company_logo}
          className="w-16"
          alt="Shoes"
        />
      </figure>
     <div >
         <p className="text-xl font-bold">{company}</p>
      <p className="flex gap-1 items-center"><IoLocation />{location}</p>
     </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>Salary:  {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
        <p>
        {description}
        </p>
        <div className="card-actions ">
            {
                requirements.map((skill, index) => <div key={index} className="badge badge-outline">{skill}</div>)
            }          
        </div>
        <div className="justify-end card-actions">
     <Link to={`jobs/${_id}`}> <button className="btn btn-primary">Apply Now</button></Link>
    </div>
      </div>
    </div>
  );
};

export default JobsCard;
