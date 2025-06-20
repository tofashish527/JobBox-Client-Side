// import React from 'react';

// const ApplicationStat = () => {
//     return (
//         <div>
//             <div className="stats shadow">
//   <div className="stat">
//     <div className="stat-figure text-primary">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         className="inline-block h-8 w-8 stroke-current"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//         ></path>
//       </svg>
//     </div>
//     <div className="stat-title">Total Likes</div>
//     <div className="stat-value text-primary">25.6K</div>
//     <div className="stat-desc">21% more than last month</div>
//   </div>

//   <div className="stat">
//     <div className="stat-figure text-secondary">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         className="inline-block h-8 w-8 stroke-current"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth="2"
//           d="M13 10V3L4 14h7v7l9-11h-7z"
//         ></path>
//       </svg>
//     </div>
//     <div className="stat-title">Page Views</div>
//     <div className="stat-value text-secondary">2.6M</div>
//     <div className="stat-desc">21% more than last month</div>
//   </div>

//   <div className="stat">
//     <div className="stat-figure text-secondary">
//       <div className="avatar avatar-online">
//         <div className="w-16 rounded-full">
//           <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
//         </div>
//       </div>
//     </div>
//     <div className="stat-value">86%</div>
//     <div className="stat-title">Tasks done</div>
//     <div className="stat-desc text-secondary">31 tasks remaining</div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default ApplicationStat;

import React from 'react';

const ApplicationStat = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <div className="stats stats-vertical lg:stats-horizontal shadow-lg border rounded-xl bg-base-100">

        {/* <div className="stat">
          <div className="stat-figure text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <div className="stat-title text-gray-500">Total Likes</div>
          <div className="stat-value text-blue-600">25.6K</div>
          <div className="stat-desc text-gray-400">↑ 21% from last month</div>
        </div> */}

        {/* <div className="stat">
          <div className="stat-figure text-purple-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
          <div className="stat-title text-gray-500">Page Views</div>
          <div className="stat-value text-purple-600">2.6M</div>
          <div className="stat-desc text-gray-400">↑ 21% from last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure">
            <div className="avatar online">
              <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" alt="User" />
              </div>
            </div>
          </div>
          <div className="stat-value text-green-600">86%</div>
          <div className="stat-title text-gray-500">Tasks Completed</div>
          <div className="stat-desc text-gray-400">31 tasks remaining</div>
        </div> */}

      </div>
    </div>
  );
};

export default ApplicationStat;
