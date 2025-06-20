// import axios from 'axios';
// import React from 'react';
// import { useLoaderData, useParams } from 'react-router';
// import Swal from 'sweetalert2';

// const ViewApplications = () => {
//     const{job_id}=useParams()
//     const applications=useLoaderData();

//     const handleStatusChange=(e,app_id)=>{
//         console.log(e.target.value,app_id);

//         axios.patch(`http://localhost:3000/applications/${app_id}`,{status:e.target.value})
//         .then(res=>{
//             //console.log(res.data);
//              if(res.data.insertedId)
//                         {
//                             Swal.fire({
//               position: "top-end",
//               icon: "success",
//               title: "Your work has been saved",
//               showConfirmButton: false,
//               timer: 1500
//             });
//         }
//                         })
//         .catch(error=>console.log(error));
//     }
//     return (
//         <div>
//             <h2>{applications.length} Applications For Job:{job_id}</h2>
//             <div className="overflow-x-auto">
//   <table className="table">
//     {/* head */}
//     <thead>
//       <tr>
//         <th></th>
//         <th>Name</th>
//         <th>Job</th>
//         <th>Status</th>
//       </tr>
//     </thead>
//     <tbody>
//       {/* row */}
//       {
//         applications.map((application,index)=><tr key={application._id} application={application}>
//         <th>{index+1}</th>
//         <td>{application.applicant}</td>
//         <td>Quality Control Specialist</td>
//         <td><select onChange={e=>{handleStatusChange(e,application._id)}} defaultValue={application.status} className="select">
//   <option disabled={true}>Update</option>
//   <option>Under Review</option>
//   <option>Call For Interview</option>
//   <option>Hired</option>
//   <option>Rejected</option>
// </select></td>
//       </tr>)
//       }
//     </tbody>
//   </table>
// </div>
//         </div>
//     );
// };

// export default ViewApplications;

import axios from 'axios';
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, app_id) => {
    axios
      .patch(`http://localhost:3000/applications/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Application status updated',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">
        {applications.length} Applications for Job ID: <span className="text-blue-600 font-bold">{job_id}</span>
      </h2>

      <div className="overflow-x-auto rounded-xl shadow-md border">
        <table className="table w-full table-zebra">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="py-3">#</th>
              <th>Applicant Email</th>
              <th>Applicant Resume</th>
              <th>Job Title</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <tr key={application._id}>
                <td className="font-medium">{index + 1}</td>
                <td>{application.applicant}</td>
                   <td>
        <a
          href={application.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View Resume
        </a>
      </td>
                <td className="font-semibold text-blue-600">Quality Control Specialist</td>
                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, application._id)}
                    defaultValue={application.status}
                    className="select select-bordered w-full max-w-xs"
                  >
                    <option disabled>Update</option>
                    <option>Under Review</option>
                    <option>Call For Interview</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
