import React, { use } from 'react';
import loginLottie from './../assets/lottifiles/Login-lottiJSON';
import { AuthContext } from '../Context/AuthContext';
import Lottie from 'lottie-react';
import SocialLogin from '../Component/SocialLogin';
import { useLocation, useNavigate } from 'react-router';

const Login = () => {
    const {loginUser}=use(AuthContext);

    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state||'/';
     const handleLogin=e=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        //console.log(email,password);

        //create user
      loginUser(email, password)
        .then((result) => {
          console.log(result.user);
          //setLoading(false)
          navigate(from);
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
           <Lottie animationData={loginLottie} loop={true} style={{width:'500px'}}></Lottie>
    </div>
    <div className="card bg-base-100 w-full p-5 max-w-sm shrink-0 shadow-2xl">  
      <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <div className="card-body">
        <form onSubmit={handleLogin}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
        <SocialLogin from={from}></SocialLogin>
      </div>
      </div>
    </div>
  </div>
    );
};

export default Login;