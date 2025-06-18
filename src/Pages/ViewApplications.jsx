import React from 'react';
import { useParams } from 'react-router';

const ViewApplications = () => {
    const{job_id}=useParams()
    return (
        <div>
            <h2>Applications For Job:{job_id}</h2>
        </div>
    );
};

export default ViewApplications;