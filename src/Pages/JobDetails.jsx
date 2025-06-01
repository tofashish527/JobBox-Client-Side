import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const {title}=useLoaderData();
    return (
        <div>
            {title}
        </div>
    );
};

export default JobDetails;