import React from 'react';
import { Link, useParams } from 'react-router';
//import useAuth from '../hooks/useAuth';

const JobApply = () => {
    const {id: jobId}=useParams()
    //const {user}=useAuth();
    console.log(jobId)
    const handleJobApply=e=>{
        e.preventDefault();
        const form=e.target;
        const linkedin=form.linkedin.value;
        const github=form.github.value;
        const resume=form.resume.value;
        console.log(linkedin,github,resume);
    }
    return (
        <div>
            <h3>Apply Job For : <Link className='btn' to={`/jobs/${jobId}`}>Details</Link> </h3>
            <form onSubmit={handleJobApply}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  <legend className="fieldset-legend">Applicant's Details</legend>

  <label className="label">Linkedin Profile</label>
  <input type="url" className="input" name="linkedin" placeholder="Your Linkedin Profile Link" />

  <label className="label">Github Profile</label>
  <input type="url" className="input" name='github' placeholder="Your Github Profile Link" />

  <label className="label">Resume</label>
  <input type="url" className="input" name='resume' placeholder="Your Resume Link" />

  <input type="submit" className="btn" value="Apply" />
</fieldset>

            </form>
        </div>
    );
};

export default JobApply;