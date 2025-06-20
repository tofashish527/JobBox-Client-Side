
import React from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddJob = () => {
  const { user } = useAuth();

  const handleAddJob = e => {
    e.preventDefault();
    const form = e.target;
    const formdata = new FormData(form);
    const data = Object.fromEntries(formdata.entries());

    const { max, min, currency, ...newJob } = data;

    newJob.salaryRange = {
      min: Number(min),
      max: Number(max),
      currency
    };

    newJob.requirements = newJob.requirements.split(',').map(req => req.trim());
    newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim());
    newJob.status = "active";

    axios.post('http://localhost:3000/jobs', newJob)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Job added successfully!",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset();
        }
      })
      .catch(console.log);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-indigo-50 mb-10 rounded-xl shadow-md mt-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Add a New Job</h1>

      <form onSubmit={handleAddJob} className="space-y-6">
        {/* Basic Info */}
        <fieldset className="border rounded-md p-4">
          <legend className="text-lg font-semibold mb-2">Basic Information</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="title" placeholder="Job Title" className="input input-bordered w-full" required />
            <input type="text" name="company" placeholder="Company Name" className="input input-bordered w-full" required />
            <input type="text" name="location" placeholder="Company Location" className="input input-bordered w-full" />
            <input type="text" name="companylogourl" placeholder="Company Logo URL" className="input input-bordered w-full" />
          </div>
        </fieldset>

        {/* Job Type */}
        <fieldset className="border rounded-md p-4">
          <legend className="text-lg font-semibold mb-2">Job Type</legend>
          <div className="flex gap-3">
            {['On-site', 'Remote', 'Hybrid'].map(type => (
              <label key={type} className="flex items-center gap-1">
                <input type="radio" name="jobtype" value={type} required />
                {type}
              </label>
            ))}
          </div>
        </fieldset>

        {/* Job Category */}
        <fieldset className="border rounded-md p-4">
          <legend className="text-lg font-semibold mb-2">Category</legend>
          <select name="category" defaultValue="" className="select w-full" required>
            <option value="" disabled>Select a category</option>
            <option>Engineering</option>
            <option>Sales</option>
            <option>Marketing</option>
          </select>
        </fieldset>

        {/* Deadline */}
        <fieldset className="border rounded-md p-4">
          <legend className="text-lg font-semibold mb-2">Application Deadline</legend>
          <input type="date" name="deadline" className="input input-bordered w-full" required />
        </fieldset>

        {/* Salary Range */}
        <fieldset className="border rounded-md p-4">
          <legend className="text-lg font-semibold mb-2">Salary Range</legend>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="number" name="min" placeholder="Min Salary" className="input input-bordered w-full" required />
            <input type="number" name="max" placeholder="Max Salary" className="input input-bordered w-full" required />
            <select name="currency" defaultValue="" className="select w-full" required>
              <option value="" disabled>Select currency</option>
              <option>BDT</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </div>
        </fieldset>

        {/* Description */}
        <fieldset className="border rounded-md p-4">
          <legend className="text-lg font-semibold mb-2">Description</legend>
          <textarea name="description" className="textarea textarea-bordered w-full" placeholder="Job description" rows={4} required />
        </fieldset>

        {/* Requirements */}
        <fieldset className="border rounded-md p-4">
          <legend className="text-lg font-semibold mb-2">Requirements</legend>
          <textarea name="requirements" className="textarea textarea-bordered w-full" placeholder="Comma-separated skills or qualifications" rows={3} required />
        </fieldset>

        {/* Responsibilities */}
        <fieldset className="border rounded-md p-4">
          <legend className="text-lg font-semibold mb-2">Responsibilities</legend>
          <textarea name="responsibilities" className="textarea textarea-bordered w-full" placeholder="Comma-separated responsibilities" rows={3} required />
        </fieldset>

        {/* HR Info */}
        <fieldset className="border rounded-md p-4">
          <legend className="text-lg font-semibold mb-2">HR Contact Info</legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="HRname" placeholder="HR Name" className="input input-bordered w-full" required />
            <input type="email" name="HRemail" defaultValue={user.email} placeholder="HR Email" className="input input-bordered w-full" readOnly />
          </div>
        </fieldset>

        {/* Submit */}
        <div className="text-center">
          <input type="submit" value="Add Job" className="btn btn-primary w-full md:w-1/2 mt-4" />
        </div>
      </form>
    </div>
  );
};

export default AddJob;
