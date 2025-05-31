import React from 'react';
import { motion } from "motion/react"
import team1 from './../assets/BannerImg/team-1.jpg'
import team2 from './../assets/BannerImg/team-2.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1'>
        <motion.img
      src={team1}
       animate={{y:[100,150,100]}}
       transition={{duration:4,repeat:Infinity}}
      className="max-w-sm border-s-8 border-b-8 border-blue-900 rounded-t-[40px] rounded-b-[40px] shadow-2xl"
    />
     <motion.img
      src={team2}
       animate={{x:[100,150,100]}}
       transition={{duration:8,delay:5,repeat:Infinity}}
      className="max-w-sm border-s-8 border-b-8 border-blue-900 rounded-t-[40px] rounded-b-[40px] shadow-2xl"
    />
    </div>
    <div className='flex-1'>
      {/* <motion.h1 animate={{rotate:180,
    transition:
    { duration:4}
    }} className="text-5xl font-bold">Latest Job Offer!</motion.h1> */}
      <motion.h1 initial={{scale:0}} animate={{scale:1,
    transition:
    {duration:4}
    }} className="text-5xl font-bold">Remote <motion.span animate={{
        color:['#eab294','#c7ea94','#94eae6','#c494ea'],
        transition:{duration:2,repeat:Infinity}
    }}>Job</motion.span> Offer!</motion.h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;