import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
  const {logOut,user}=use(AuthContext);
  const handleLogOut=()=>{
    logOut().
    then(() => {
      console.log("Log Out Successfully!")
}).catch((error) => {
  console.log(error)
});
  }
    const links=<>
    <li><NavLink to='/'>Home</NavLink></li>
    {/* for applicant /Roll Based in future */}
    {
      user && <>
          <li><NavLink to='/myapplications'>MyApplications</NavLink></li>
      </>
    }
    {/* for recruiter/Roll based in future */}
    {
      user && <>
          <li><NavLink to='/addjob'>Add Job</NavLink></li>
          <li><NavLink to='/mypostedjobs'>MyPosted Jobs</NavLink></li>
      </>
    }
    </>
    return (
                <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    {
      user ? <button className='btn' onClick={handleLogOut}>LogOut</button> :
    <> 
    <NavLink to='/register' className='btn'>Register</NavLink>
    <NavLink to='/login' className='btn'>Login</NavLink> 
    </>
}
  </div>
</div>
    );
};

export default Navbar;