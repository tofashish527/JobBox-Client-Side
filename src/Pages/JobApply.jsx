import axios from 'axios';
import React from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleJobApply = e => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedin,
      github,
      resume
    };

    axios.post('http://localhost:3000/applications', application)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Application submitted successfully!",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset();
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white border rounded-xl shadow-md p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Apply for Job</h2>
        <Link to={`/jobs/${jobId}`} className="text-blue-600 underline font-bold text-sm hover:text-blue-800">
          View Job Details
        </Link>
      </div>

      <form onSubmit={handleJobApply} className="space-y-5">
        <div>
          <label htmlFor="linkedin" className="block mb-1 font-medium text-gray-700">LinkedIn Profile</label>
          <input
            type="url"
            name="linkedin"
            id="linkedin"
            className="w-full input input-bordered"
            placeholder="https://linkedin.com/in/yourprofile"
            required
          />
        </div>

        <div>
          <label htmlFor="github" className="block mb-1 font-medium text-gray-700">GitHub Profile</label>
          <input
            type="url"
            name="github"
            id="github"
            className="w-full input input-bordered"
            placeholder="https://github.com/yourusername"
            required
          />
        </div>

        <div>
          <label htmlFor="resume" className="block mb-1 font-medium text-gray-700">Resume (Google Drive / PDF Link)</label>
          <input
            type="url"
            name="resume"
            id="resume"
            className="w-full input input-bordered"
            placeholder="https://drive.google.com/yourresume"
            required
          />
        </div>

        <div className="text-right">
          <input
            type="submit"
            className="btn btn-primary px-6"
            value="Submit Application"
          />
        </div>
      </form>
    </div>
  );
};

export default JobApply;
