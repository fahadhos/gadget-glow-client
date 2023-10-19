import {Link, useNavigate} from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';
import {Helmet} from 'react-helmet-async';
import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider'; 
 
const Login = () => {

    
  const [hidepass, setHidepass] = useState (true);
const {
    
    signIn,
    signUpGoogle,
      
}= useContext(AuthContext)
  
const [passErrorMsg, setPassErrorMsg] = useState ()

  const navigate = useNavigate()
  const handleLogin =e =>{
      e.preventDefault()
      const email = e.target.email.value;
      const password = e.target.password.value;
      console.log(email, password);
 
//  if( user.password!=password){
//     return setPassErrorMsg('Invalid Password')
//  }
 

signIn(email, password)
.then(result=>{
  console.log(result.user)

toast.success('Successfully signed in')
  navigate( location?.state ? location.state : '/')
})
.catch(error=>{
     console.log(error.message);
 toast.error('Your Email/Password is wrong')
})
  } 

  
const handleGoogleLogin =()=>{
    console.log('hit');
signUpGoogle()
.then(result=>{
    console.log(result.user);
  
    toast.success('Account Has been Logged in Successfully')
    setTimeout(()=>{

        navigate( location?.state ? location.state : '/')
    },1000)

  })
  .catch((error)=>{
    toast.error('Invalid email/password credentials')
    
    console.log(error);
  })
  }
  return (
    <div className='mx-auto overflow-x-hidden'>
      <Helmet>
        <title>Yoga Vitality | Login</title>
      </Helmet>
      
      <ToastContainer/>
      <div className="hero min-h-screen bg-base-200    "
      style={{backgroundImage:'url("https://img.freepik.com/free-vector/gradient-particle-wave-background_23-2150428788.jpg?w=996&t=st=1696814594~exp=1696815194~hmac=f58ea2775daf19728a41126728f211db392132d444f19a837b11b4c41b4aa699")'}}
      >  <div className="hero-content  mx-auto ">

<div className="card flex-shrink-0 w-[30rem] max-sm:w-[23rem] max-w-lg shadow-2xl bg-white">
           <div className="text-center  ">
                <h1 className="text-3xl font-bold py-5">Sign In</h1>
                <button onClick={handleGoogleLogin} className="btn m-5 capitalize">
                      {' '}<FcGoogle className="text-2xl" /> Google{' '}
                </button>
                <p className="py-6 divider"> or </p>
              </div>
  <form onSubmit={handleLogin} className="card-body">
        
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name='password'
                  type={hidepass ? 'password' : 'text'}
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
               <p
                  className="relative -top-8 text-xl left-[24rem]
                  max-sm:left-[16rem]
                  "      onClick={() => setHidepass (!hidepass)}
                >
                  {hidepass ? <AiFillEye /> : <AiFillEyeInvisible />}    {' '}
                </p>
                <p className= ' bg-slate-300 text-red-600 text-sm font-bold absolute top-[33rem] ' >
               
               {passErrorMsg ? passErrorMsg : ''}  
               
                  </p>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary capitalize">Sign In</button>
              </div>
        
            <div className="text-center ">
              <p className="py-6  ">
                {' '}
                create an account?
                {' '}
                <Link to="/register" className="text-teal-400 font-bold">
                  Register
                </Link>
                {' '}
              </p>
            </div>
    </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
