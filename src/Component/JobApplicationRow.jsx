// import React from 'react';
// import { Link } from 'react-router';

// const JobApplicationRow = ({application,index}) => {
//     const{company,resume,company_logo,title,jobId}=application;
//     return (
//              <tr>
//         <th>
//           <label>
//             {index+1}
//           </label>
//         </th>
//         <td>
//           <div className="flex items-center gap-3">
//             <div className="avatar">
//               <div className="mask mask-squircle h-12 w-12">
//                 <img
//                   src={company_logo}
//                   alt="Avatar Tailwind CSS Component" />
//               </div>
//             </div>
//             <div>
//               <div className="font-bold">{company}</div>
//             </div>
//           </div>
//         </td>
//         <td className='font-semibold text-xl'>
//           {title}
//           <br />
//         </td>
//         <td className="btn btn-sm btn-outline btn-primary mt-4"><Link to={resume} target='blank'>Resume</Link></td>
//         <th>
//           <button className="btn btn-ghost btn-xs"><Link to={`/jobs/${jobId}`} className="text-blue-600 underline font-bold text-sm hover:text-blue-800">
//                     View Job Details
//                   </Link></button>
//         </th>
//       </tr>
//     );
// };

// export default JobApplicationRow;

import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const JobApplicationRow = ({ application, index }) => {
  const { company,company_logo, title, resume, jobId, _id } = application;

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/applications/${_id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your application has been deleted.', 'success').then(() => {
                window.location.reload();
              });
            }
          })
          .catch((error) => {
            console.error(error);
            Swal.fire('Error', 'Failed to delete application', 'error');
          });
      }
    });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={company_logo} alt="Company Logo" />
            </div>
          </div>
          <div>
            <div className="font-bold">{company}</div>
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View Resume
        </a>
      </td>
      <td>
        <a
          href={`/jobs/${jobId}`}
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm"
        >
          Details
        </a>
      </td>
      <td className="flex flex-col lg:flex-row gap-2 mt-3">
        <Link to={`/jobapply/${jobId}`} className="btn btn-outline btn-info btn-xs">
          Edit
        </Link>
        <button onClick={handleDelete} className="btn btn-outline btn-error btn-xs">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default JobApplicationRow;
