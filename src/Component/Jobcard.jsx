import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { NavLink } from 'react-router';

const Jobcard = ({job}) => {
    const {title,company_logo,company,_id,description,jobType,location,salaryRange,requirements,applicationDeadline}=job
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <div className='flex gap-3 mt-4'>
    <img
      src={company_logo}
      alt="Shoes" 
      className='ml-4'/>
  <div>
    <h2 className='font-bold text-l mt-3'>{company}</h2>
    <h2 className='font-bold text-l flex'><CiLocationOn size={20} />{location}</h2>
  </div>
  </div>
  <div className="card-body">
    <h2 className="card-title">
      {title}
      <div className="badge badge-secondary">{jobType}</div>
    </h2>
    <p className='font-semibold'>ApplicationDeadline : {applicationDeadline}</p>
    <p>{description}</p>
    <p className='font-semibold'>Requirements: {requirements.join(', ')}</p>
    <div className='font-bold flex'>
      <p>
  Salary: 
  {salaryRange?.min != null && salaryRange?.max != null
    ? `${salaryRange?.currency || ''} ${Number(salaryRange.min).toLocaleString()} - ${Number(salaryRange.max).toLocaleString()}`
    : 'Not specified'}
</p>

         {/* <p>Salary: ${salaryRange.min.toLocaleString()} - ${salaryRange.max.toLocaleString()}</p> */}
         <NavLink to={`/jobs/${_id}`} className='btn'>Show Details</NavLink>
    </div>
  </div>
</div>
        </div>
    );
};

export default Jobcard;