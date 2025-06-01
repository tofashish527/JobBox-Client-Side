import React, {  useEffect, useState } from 'react';
import Jobcard from '../Component/Jobcard';

const HotJobs = () => {
    
   const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-3'>
            {jobs.map(job=><Jobcard key={job._id}job={job}></Jobcard>)}
        </div>
    );
};

export default HotJobs;




