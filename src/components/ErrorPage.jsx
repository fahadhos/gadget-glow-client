import {useRouteError} from 'react-router-dom';
import errorbg from  '../../public/error.gif'
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const ErrorPage = () => {
  const error = useRouteError ();
  console.error (error);
  return (

    <div

    className="grid place-content-center bg-black text-center text-white h-[40rem]"
  
    >
        
    <Helmet>
        <title> | 404 Error</title>
    </Helmet>
      <div className='relative -top-10 text-2xl'>

        <h1 className='grid place-content-center text-4xl m-5'><img className='  w-48' src={errorbg} alt="erroranimation" /></h1>
        <p className='m-5 font-poppin'>Sorry, an unexpected error has occurred.</p>
        <p className='m-5 font-poppin'>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <button className="btn capitalize 
          text-white
          bg-gradient-to-t
          hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 
          ">Go Back Home</button>
        </Link>
      </div>
      </div>
  );
};

export default ErrorPage;
