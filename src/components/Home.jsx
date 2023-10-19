 
import { Navbar } from './../shared/Navbar';
import Footer from './../shared/Footer';
import Marquee from "react-fast-marquee";
import Banner from '../components/Banner';
import { Link, useLoaderData } from 'react-router-dom';
 const Home = () => {


    const brands = useLoaderData()

    const {_id,brand,image}= brands
  return (
    <div>
         
  <Navbar></Navbar>
<Banner></Banner>

{/* our brand show */}
<section className='py-10'>

<div className='mx-auto pl-10'>
<h2  className="text-3xl font-rancho ">
    Our Brands
</h2>

<div className='py-10 mr-5 grid lg:grid-cols-3 max-sm:grid-cols-1 md:grid-cols-2  '>
{/* <Marquee pauseOnHover={true} className=''> */}
 
 {
    brands.map(brand=> <>
    <Link  to={`/view/${brand.brand.toLowerCase()}`}>
  
    <div key={brand._id} className="card w-[24rem] my-10 mr-10 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img className='bg-cover rounded-xl w-[10rem]' src={brand.image} alt="Shoes"  />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-serif">{brand.brand}</h2>
    
  </div>
</div>
  </Link>
</>)
 }

{/* </Marquee> */}
</div>
</div>
</section>



  <Footer></Footer>
    </div>
  );
};

export default Home;
