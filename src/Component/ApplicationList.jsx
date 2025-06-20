
// import React, { use } from 'react';
// import JobApplicationRow from './JobApplicationRow';

// const ApplicationList = ({ myApplicationsPromise }) => {
//   const applications = use(myApplicationsPromise);

//   return (
//     <div className="max-w-5xl mx-auto px-4 py-6">
//       <h2 className="text-2xl font-semibold mb-4 text-center">
//         Jobs Applied: <span className="text-blue-600">{applications.length}</span>
//       </h2>

//       <div className="overflow-x-auto rounded-lg shadow border">
//         <table className="table w-full table-zebra">
//           <thead className="bg-gray-100">
//             <tr>
//               <th>
//                 <label>
//                   <input type="checkbox" className="checkbox checkbox-primary" />
//                 </label>
//               </th>
//               <th>Company</th>
//               <th>Job Title</th>
//               <th>Resume File</th>
//               <th>Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             {applications.map((application, index) => (
//               <JobApplicationRow
//                 key={application._id}
//                 index={index}
//                 application={application}
//               />
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ApplicationList;

import React, { use } from 'react';
import JobApplicationRow from './JobApplicationRow';

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">

     {applications.length==0 && <h2 className="text-2xl font-semibold mb-4 text-center">You Havn't Applied For Any Job Yet.</h2>}
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Jobs Applied: <span className="text-blue-600">{applications.length}</span>
      </h2>
      {applications.length>0 && <div className="overflow-x-auto rounded-lg shadow border">
        <table className="table w-full table-zebra">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Company</th>
              <th>Job Title</th>
              <th>Resume File</th>
              <th>Details</th>
              <th>Actions</th> {/* New column */}
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <JobApplicationRow
                key={application._id}
                index={index}
                application={application}
              />
            ))}
          </tbody>
        </table>
      </div>}
      
    </div>
  );
};

export default ApplicationList;
