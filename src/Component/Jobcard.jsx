import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { NavLink } from 'react-router';

const Jobcard = ({ job }) => {
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
  } = job;

  return (
    <div className="card w-96 bg-fuchsia-200 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all">
      {/* Header: Logo + Company Info */}
      <div className="flex items-center gap-4 px-5 pt-5">
        <img
          src={company_logo}
          alt="Company Logo"
          className="w-14 h-14 object-contain border rounded-md p-1"
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800">{company}</h3>
          <p className="flex items-center text-sm text-gray-500 mt-1">
            <CiLocationOn className="text-blue-600 mr-1" size={18} />
            {location}
          </p>
        </div>
      </div>

      {/* Body: Details */}
      <div className="card-body pt-3 px-5 pb-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
            {jobType}
          </span>
        </div>

        <div className="text-sm text-gray-600">
          <span className="font-medium">Deadline:</span> {applicationDeadline}
        </div>

        <p className="text-gray-700 text-sm">{description}</p>

        <div>
          <p className="text-sm font-medium text-gray-800">
            <span className="font-semibold">Requirements:</span> {requirements.join(', ')}
          </p>
        </div>

        <div className="flex justify-between items-center pt-2 border-t mt-2">
          <p className="text-base font-semibold text-gray-900">
            Salary:{' '}
            {salaryRange?.min != null && salaryRange?.max != null
              ? `${salaryRange.currency || ''} ${Number(salaryRange.min).toLocaleString()} - ${Number(
                  salaryRange.max
                ).toLocaleString()}`
              : 'Not specified'}
          </p>
          <NavLink
            to={`/jobs/${_id}`}
            className="btn btn-sm btn-primary hover:scale-105 transition"
          >
            Show Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Jobcard;

