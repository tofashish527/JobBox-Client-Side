import React, { Suspense } from 'react';
import useAuth from '../hooks/useAuth';
import JobList from '../Component/JobList';
import { jobsCreatedByPromise } from '../API/JobApi';

const MyPostedJobs = () => {
    const {user}=useAuth();
    return (
        <div>
            <h2>My Posted Jobs:</h2>
            <Suspense>
                <JobList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;