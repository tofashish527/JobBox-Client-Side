import React from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {
    const {user}=useAuth()
    const handleAddJob=e=>{
        e.preventDefault();
        const form=e.target;
        const formdata=new FormData(form)
        //console.log(formdata)
        const data=Object.fromEntries(formdata.entries());
        console.log(data)

        //process salary range
        const {max,min,currency, ...newJob}=data;
        newJob.salaryRange = {
  min: Number(min),
  max: Number(max),
  currency
};

        //const {max,min,currency, ...newJob}=data;
        //newJob.salaryRange={max,min,currency}

        //process requirements
        const requirementsString=newJob.requirements;
        const requirementsMessy=requirementsString.split(',')
        const requirementsClean=requirementsMessy.map(req=>req.trim());
        newJob.requirements=requirementsClean;

        newJob.responsibilities=newJob.responsibilities.split(',').map(res=>res.trim())

        newJob.status="active";

        console.log(newJob)

        //save job to the database
        axios.post('http://localhost:3000/jobs',newJob)
        .then(res=>{
            console.log(res);
            if(res.data.insertedId)
            {
                Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <h1 className='text-2xl font-semibold mt-3 mb-3'>Add Job Form Info:</h1>
            <form action="" className='bg-blue-100 rounded-2xl' onSubmit={handleAddJob}>
                <fieldset className="fieldset bg-blue-100 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend text-xl">Basic details</legend>

                    <label className="label text-lg">Title</label>
                    <input type="text" name='title' className="input  w-full" placeholder="Job Title" />

                    <label className="label text-lg">Company</label>
                    <input type="text" name='company' className="input  w-full" placeholder="Company Name" />

                    <label className="label text-lg">Company Location</label>
                    <input type="text" name='location' className="input w-full" placeholder="Company Location" />

                    <label className="label text-lg">Company Logo</label>
                    <input type="text" name='companylogourl' className="input w-full" placeholder="Company Logo URL" />
                </fieldset>
                {/* Job Type  */}
                <fieldset className="fieldset bg-blue-100 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend text-lg">Job Type</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobtype" aria-label="All" />
                        <input className="btn" type="radio" name="jobtype" aria-label="On-site" />
                        <input className="btn" type="radio" name="jobtype" aria-label="Remote" />
                        <input className="btn" type="radio" name="jobtype" aria-label="Hybrid" />
                    </div>

                </fieldset>

                {/* Job Category */}
                <fieldset className="fieldset bg-blue-100 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend text-lg">Job Category</legend>
                    <select defaultValue="Pick your choice" name='category' className="select w-full">
                        <option disabled={true}>Pick one</option>
                        <option>Enginerring</option>
                        <option>Sales</option>
                        <option>Marketing</option>
                    </select>
                </fieldset>

                {/* Job Application deadline  */}
                <fieldset className="fieldset bg-blue-100 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend text-lg">Application deadline</legend>
                    <input type="date" name='deadline' className="input w-full" />
                </fieldset>

                {/* Job Salary Range  */}
                <fieldset className="fieldset bg-blue-100 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend text-lg">Salary Range</legend>
                     <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 space-x-2'> 
                        <div className='flex flex-col'> 
                         <label className="label text-sm font-semibold mb-1">Maximum salary</label>
                    <input type="text" name='max' className="input" placeholder="Max-salary" />
                        </div>
                        <div className='flex flex-col'>  
                    <label className="label text-sm font-semibold mb-1">Minimum salary</label>
                    <input type="text" name='min' className="input" placeholder="Min-salary" />
                        </div>
                        <div className='flex flex-col'>
                       <label className="label text-sm font-semibold mb-1">Currency</label>
                    <select defaultValue="Pick your choice" name='currency' className="select">
                        <option disabled={true}>Pick one</option>
                        <option>BDT</option>
                        <option>USD</option>
                        <option>EU</option>
                    </select>
                        </div>
                     </div>
                </fieldset>

                {/* Job Description */}
                <fieldset className="fieldset bg-blue-100 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend text-lg">Job description</legend>
                     <textarea name='description' className="textarea w-full" placeholder="Job description"></textarea>
                </fieldset>

                 {/* Job Requirements */}
                <fieldset className="fieldset bg-blue-100 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend text-lg">Job requirements</legend>
                     <textarea name='requirements' className="textarea w-full" placeholder="Job Requirements(separated with comma)"></textarea>
                </fieldset>

                 {/* Job Responsibilities */}
                <fieldset className="fieldset bg-blue-100 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend text-lg">Job responsibilities</legend>
                     <textarea name='responsibilities' className="textarea w-full" placeholder="Job responsibilities"></textarea>
                </fieldset>

                {/* HR Info  */}
                 <fieldset className="fieldset bg-blue-100 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend text-lg">HR details</legend>

                    <label className="label text-sm font-semibold">HR Name</label>
                    <input type="text" name='HRname' className="input w-full" placeholder="HR Name" />

                    <label className="label text-sm font-semibold">HR E-mail</label>
                    <input type="text" name='HRemail' defaultValue={user.email} className="input w-full" placeholder="HR E-mail" />
                </fieldset>

                <input type="submit" value="ADD JOB" className='btn m-5 mx-auto w-full ' />
            </form>
        </div>
    );
};

export default AddJob;