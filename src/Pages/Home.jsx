import React from 'react';
import Banner from '../Component/Banner';
import HotJobs from '../Shared/HotJobs';

const Home = () => {
    //const jobsPromise=fetch('http://localhost:3000/jobs').then(res=>res.json())
    return (
        <div>
            <Banner></Banner>
            <HotJobs></HotJobs> 
        </div>
    );
};

export default Home;