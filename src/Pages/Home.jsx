import React from 'react';
import Banner from '../Component/Banner';
import HotJobs from '../Shared/HotJobs';

const Home = () => {
    //const jobsPromise=fetch('http://localhost:3000/jobs').then(res=>res.json())
    return (
        <div>
            <Banner></Banner>
            <div>
                <p className='text-center text-4xl bg-base-200 font-bold pb-5 pt-5'>Hot Job Offers!!!</p>
                <HotJobs></HotJobs>
            </div> 
        </div>
    );
};

export default Home;