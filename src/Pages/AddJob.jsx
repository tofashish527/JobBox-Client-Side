import React from 'react';

const AddJob = () => {
    return (
        <div>
            <h1>Please Add Job</h1>
            <form action="">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Basic details</legend>

                    <label className="label">Title</label>
                    <input type="text" name='title' className="input  w-full" placeholder="Job Title" />

                    <label className="label">Company</label>
                    <input type="text" name='company' className="input  w-full" placeholder="Company Name" />

                    <label className="label">Company Location</label>
                    <input type="text" name='location' className="input w-full" placeholder="Company Location" />

                    <label className="label">Company Logo</label>
                    <input type="text" name='companylogourl' name='location' className="input w-full" placeholder="Company Logo URL" />
                </fieldset>
                {/* Job Type  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Type</legend>
                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobtype" aria-label="All" />
                        <input className="btn" type="radio" name="jobtype" aria-label="On-site" />
                        <input className="btn" type="radio" name="jobtype" aria-label="Remote" />
                        <input className="btn" type="radio" name="jobtype" aria-label="Hybrid" />
                    </div>

                </fieldset>

                {/* Job Category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job Category</legend>
                    <select defaultValue="Pick your choice" name='category' className="select w-full">
                        <option disabled={true}>Pick one</option>
                        <option>Enginerring</option>
                        <option>Sales</option>
                        <option>Marketing</option>
                    </select>
                </fieldset>

                {/* Job Application deadline  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Application deadline</legend>
                    <input type="date" className="input w-full" />
                </fieldset>

                {/* Job Salary Range  */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>
                     <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 space-x-2'> 
                        <div className='flex flex-col'> 
                         <label className="label">Maximum salary</label>
                    <input type="text" name='salarymax' className="input" placeholder="Max-salary" />
                        </div>
                        <div className='flex flex-col'>  
                    <label className="label">minimum salary</label>
                    <input type="text" name='salarymin' className="input" placeholder="Min-salary" />
                        </div>
                        <div className='flex flex-col'>
                       <label className="label">Currency</label>
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
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job description</legend>
                     <textarea className="textarea w-full" placeholder="Job description"></textarea>
                </fieldset>

                 {/* Job Requirements */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job requirements</legend>
                     <textarea className="textarea w-full" placeholder="Job Requirements(separated with comma)"></textarea>
                </fieldset>

                 {/* Job Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">Job responsibilities</legend>
                     <textarea className="textarea w-full" placeholder="Job responsibilities"></textarea>
                </fieldset>

                {/* HR Info  */}
                 <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
                    <legend className="fieldset-legend">HR details</legend>

                    <label className="label">HR Name</label>
                    <input type="text" name='HRname' className="input w-full" placeholder="HR Name" />

                    <label className="label">HR E-mail</label>
                    <input type="text" name='HRemail' className="input w-full" placeholder="HR E-mail" />
                </fieldset>

                <input type="submit" value="ADD JOB" className='btn mt-3 mb-3 w-full' />
            </form>
        </div>
    );
};

export default AddJob;