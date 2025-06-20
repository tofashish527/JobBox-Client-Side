import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { NavLink, useLoaderData } from 'react-router';

const JobDetails = () => {
  const {
    title,
    company_logo,
    company,
    _id,
    description,
    jobType,
    location,
    salaryRange,
    requirements,
    applicationDeadline,
  } = useLoaderData();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-purple-200 border border-gray-300 rounded-xl shadow-md p-6 space-y-6">
        {/* Header: Company Info */}
        <div className="flex items-center gap-5">
          <img
            src={company_logo}
            alt="Company Logo"
            className="w-20 h-20 object-contain border p-2 rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{company}</h2>
            <p className="text-gray-600 flex items-center mt-1">
              <CiLocationOn size={20} className="text-blue-600 mr-1" />
              {location}
            </p>
          </div>
        </div>

        {/* Title + Type */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700 font-medium">
            {jobType}
          </span>
        </div>

        {/* Application Deadline */}
        <p className="text-gray-700">
          <span className="font-semibold">Application Deadline:</span>{' '}
          {applicationDeadline}
        </p>

        {/* Job Description */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Job Description</h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </section>

        {/* Requirements */}
        <section>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Requirements</h3>
          <ul className="list-disc list-inside text-gray-700">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </section>

        {/* Salary and Apply Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t">
          <p className="text-lg font-semibold text-gray-900">
            Salary:{' '}
            {salaryRange?.min != null && salaryRange?.max != null
              ? `${salaryRange.currency || '$'} ${Number(salaryRange.min).toLocaleString()} - ${Number(
                  salaryRange.max
                ).toLocaleString()}`
              : 'Not specified'}
          </p>
          <NavLink
            to={`/jobapply/${_id}`}
            className="btn btn-primary px-6 py-2 rounded-md text-white text-sm font-medium hover:scale-105 transition"
          >
            Apply Now
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
