
import { Navbar } from './../shared/Navbar';
import Footer from './../shared/Footer';
import { Helmet } from 'react-helmet-async';
const Contact = () => {
    return (
        <div className='mx-auto  '>
        <Navbar></Navbar>
        <Helmet>  
        <title>GadgetGlow  | Contact Us</title>
      </Helmet>
<div className='grid place-content-center py-12
  bg-gradient-to-t
  hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500

'
// style={{backgroundSize:'1200px',backgroundImage:`url(${bg})`}}
>
    <div className='card shadow-xl w-[32rem] max-sm:w-[22rem] max-sm:pr-3 bg-base-100  space-y-5'>
<h1 
className=' text-center bg-gradient-to-r text-transparent  
bg-clip-text pt-5 from-cyan-500 to-blue-500 text-3xl  font-bold'>
    Contact
</h1>

<div className='pl-10'>

   <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">What is your name?</span> 
  </label>
  <input type="text" placeholder="Type Your Name" className="input input-bordered w-full max-w-xs" />
   
</div>
   
   
   <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Your Subject</span> 
  </label>
  <input type="text" placeholder="Type Your Subject" className="input input-bordered w-full max-w-xs" />
</div>
   <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Your Email</span> 
  </label>
  <input type="email" placeholder="Type Your Email" className="input input-bordered w-full max-w-xs" />
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text">Your Message</span> 
  </label>
  <textarea className="textarea textarea-bordered h-24 w-full  max-w-xs" placeholder="Your Message"></textarea>
</div>
</div>
<div className='grid place-content-center py-10'>
  <button className='w-[14rem] btn hover:border-black hover:bg-red-200  capitalize border-1 bg-gradient-to-r text-white  
     from-cyan-500 to-blue-500 text-xl   font-bold'> Send Message</button>
  
</div>

   </div>   


</div>


      

  <Footer></Footer>
        </div>
    );
};

export default Contact;