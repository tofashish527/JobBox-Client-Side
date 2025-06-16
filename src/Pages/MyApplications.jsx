import React, { Suspense } from 'react';
import ApplicationStat from '../Component/ApplicationStat';
import ApplicationList from '../Component/ApplicationList';
import useAuth from '../hooks/useAuth';
import { myApplicationsPromise } from '../ApplicationsApi';


const MyApplications = () => {
    const {user}=useAuth();
    return (
        <div>
            <ApplicationStat></ApplicationStat>
            <Suspense fallback={'loading Your Applications!!'}>
            <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}></ApplicationList>
            </Suspense>
        </div>
    );
};

export default MyApplications;