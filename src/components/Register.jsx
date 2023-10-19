import {FcGoogle} from 'react-icons/fc';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {useContext, useState} from 'react';

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 
import { AuthContext } from '../Providers/AuthProvider';

import { updateProfile } from 'firebase/auth';


 
  

const Register = () => {

   

  const [hidepass, setHidepass] = useState (true);
// 
const [errorMsg, setErrorMsg] = useState (null)
const [errorCapitalMsg, setErrorCapitalMsg] = useState (null)
const [specialErrorMsg, setSpecialErrorMsg] = useState (null)
  

// console.log(password);
const {
    
    signUp
,signUpGoogle
,
  
} = useContext(AuthContext)



  const location = useLocation()
  const navigate = useNavigate()

  const handleRegister = (e) => {
  
    e.preventDefault()
const name = e.target.name.value
const email = e.target.email.value
const password = e.target.password.value
console.log(name,email,password);
setErrorMsg('')
setErrorCapitalMsg('')
setSpecialErrorMsg('')


if(password.length<6){
  return  setErrorMsg('Password must be at least 6 characters')
} 


  if(!/[A-Z]/.test(password)){
   return setErrorCapitalMsg('Password must be at least one capital letters')

}
  if(!/[!@#$%^&*_+;<>,.?~\\-]/.test(password)){
  return  setSpecialErrorMsg('Password must have one special characters eg:$,#')
}
  
{
signUp(  email,password)
.then( result=>{
    console.log(result.user)
    updateProfile(result?.user,{
        displayName: name, photoURL: 'https://i.ibb.co/60y05cV/user.png'
    }).then(
        r=>{
            console.log(r.user);
  
        }
    ).catch(e=>{
        console.error(e.message)
    }) 
    toast.success('Account Has Successfully Created')
    
    
    setTimeout(()=>{
        navigate( location?.state ? location.state : '/'     )
        },1000) 
})
.catch(err => {
    console.error(err.message)
})

}
}
const handleGoogleLogin =()=>{
    console.log('hit');
signUpGoogle()
.then(result=>{
 
    console.log(result.user);
    toast.success('Account Has Successfully Created')
    
    navigate( location?.state ? location?.state : '/')

  })
  .catch((error)=>{
    toast.success(error.message)
    
    console.log(error);
  })
  }
  return (
    <div className='mx-auto overflow-x-hidden'>
      {' '}  <Helmet>
        <title>Yoga Vitality | Register</title>
      </Helmet>
      <ToastContainer/>
     
 
      <div className="hero min-h-screen bg-base-200    "
      style={{backgroundImage:'url("https://img.freepik.com/free-vector/gradient-particle-wave-background_23-2150428788.jpg?w=996&t=st=1696814594~exp=1696815194~hmac=f58ea2775daf19728a41126728f211db392132d444f19a837b11b4c41b4aa699")'}}
      >
        <div className="hero-content  mx-auto">

          <div className="card flex-shrink-0 w-[30rem] max-sm:w-[23rem] max-w-lg shadow-2xl bg-white">
           <div className="text-center  ">
                <h1 className="text-3xl font-bold pt-3">Sign Up</h1>
                <button onClick={handleGoogleLogin} className="btn m-5 capitalize">
                  {' '}<FcGoogle className="text-2xl" /> Google{' '}
                </button>
                <p className="py-6 max-sm:px-4 divider"> or </p>
              </div>
 <form onSubmit={handleRegister} className="card-body">
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text" name='name'
                  placeholder="Enter your full name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  "
                  onClick={() => setHidepass (!hidepass)}
                >
                  {hidepass ? <AiFillEye /> : <AiFillEyeInvisible />}    {' '}
                </p>
                {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
          {/* ===password error msg ====*/}
             <p className= ' bg-slate-300 text-red-600 text-sm font-bold absolute top-[33rem] ' >
               
               {errorMsg ? errorMsg : ''} {errorCapitalMsg? errorCapitalMsg: ''}   {specialErrorMsg ? specialErrorMsg :''}
                </p>
              </div>
              <div className="form-control mt-6">
                <p className="pb-4 text-sm">
                  by continuing signup you agree to our
                  <Link to="#" className="text-teal-400 font-bold">
                    {' '}terms{' '}
                  </Link>
                  {' '}
                  &
                  {' '}
                  <Link to="#" className="text-teal-400 font-bold">
                    {' '}conditions{' '}
                  </Link>
                  {' '}
                </p>
                <button className="btn btn-primary capitalize">Sign Up</button>
              </div>
           
            <div className="text-center ">
              <p className="py-6  ">
                {' '}
                already have an account?
                {' '}
                <Link to="/login" className="text-teal-400 font-bold">
                  Login
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

export default Register;
