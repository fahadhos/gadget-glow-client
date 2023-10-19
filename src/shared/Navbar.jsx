import { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link ,NavLink} from 'react-router-dom';
import logo from '../assets/logo-new.png'

import   '../shared/nav.css'

export const Navbar = () => {

const {user
,logOut
}= useContext(AuthContext)


    const [navprofilehider, setNavProfileHider] = useState(true);

    
    const navlinks=<>
       <li><NavLink to='/'>Home</NavLink></li>
 
    
           <li> <NavLink to='/addproduct'>Add Products      </NavLink>   </li>     
     
   
 { user && <li> <NavLink to='/addbrand'>Add Brands</NavLink>  </li>
 }
       
       <li><NavLink to='/cart'>My Cart</NavLink></li>
       <li><NavLink to='/contact'>Contact Us</NavLink></li>
    </>
const handleLogout=()=>{

    logOut().then(r=>{
        console.log(r.message);
    }).catch(e=>{
        console.log(e.message)
    })
}
    return (
        <div   >
            <div className="navbar z-10 bg-orange-100 sticky top-0 pb-5">
                <div className="flex-1">
                    <button className="btn hover:bg-orange-100 hover:border-none  bg-transparent normal-case text-xl">   <NavLink  to='/'>
           <img className="max-sm:left-4 relative  w-[14rem] max-sm:w-[7rem]" src={logo} alt="logo" />
          </NavLink></button>
                </div>
                <div className="navbar-start relative -left-10">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul id="sidebar" tabIndex={0} className="menu menu-sm
             dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52
           
            ">
            
            {
                navlinks
            }
            </ul>
          </div>
         
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul id="sidebar" className="menu menu-horizontal px-1">
           {
           navlinks}
                  
          </ul> 
         
                 
        </div>
   
   {
     user ? <>
                 <div className="flex-none">

{ user && 'Welcome '+user?.displayName}
<div onClick={() => setNavProfileHider(!navprofilehider)} className="dropdown dropdown-end">

   <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
       <div className="w-10 rounded-full">
           
           <img src={user?.photoURL} />
       </div>
   </label>

<span className={`${navprofilehider ?'hidden':'visible'}`}>

         <ul tabIndex={0} className= "menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-base-100 rounded-box w-52"
>

   <li >
       <a className="justify-between md:hidden lg:hidden">
         { user && 'Welcome '+ user?.displayName}
       </a>
   </li>
   
   <li><Link ><button className='btn' onClick={handleLogout}>Logout </button></Link></li>

</ul>
</span>



</div>
</div>
 </> :<>
 <Link to='/login' >
     <button className="btn capitalize
      text-white
      bg-gradient-to-t
      hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 
      
      ">Login</button>
     </Link> 
     <Link to='/register' >
     <button className="btn capitalize
      text-white
      bg-gradient-to-t
      hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 
      
      ">Sign up for free</button>
     </Link> 
 </>

   }
   

            </div>
        </div>
        
        );
};
