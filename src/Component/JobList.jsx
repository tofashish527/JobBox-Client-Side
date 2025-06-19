import React, { use } from 'react';
import { Link } from 'react-router';

const JobList = ({jobsCreatedByPromise}) => {
    const jobs=use(jobsCreatedByPromise)
    return (
        <div>
            <h2>Jobs Created By You:{jobs.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>Deadline</th>
        <th>Count</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {/* rows  */}
      {
        jobs.map((job,index)=><tr job={job} key={job._id}>
        <th>{index+1}</th>
        <td>{job.title}</td>
        <td>{job.deadline}</td>
        <td>{job.applicationCount}</td>
        <td><Link to={`/applications/${job._id}`}>View Applications</Link></td>
      </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default JobList;