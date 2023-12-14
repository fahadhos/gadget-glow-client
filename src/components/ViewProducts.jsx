import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { Navbar } from './../shared/Navbar';
import {AiFillStar} from 'react-icons/ai'
 import { Link } from "react-router-dom";
import BrandBanner from './BrandBanner';


const ViewProducts = () => {

const product = useLoaderData()


const brandProducts = product.product

// console.log(product.product);
    return (
        <div>
            <Navbar></Navbar>
            
        <><Helmet>
    <title  >{brandProducts.length != 0 ?  brandProducts[0]?.brandname : 'Not Availabe' }</title>
</Helmet></>

<section>

<BrandBanner></BrandBanner>
</section>
     <section className="py-10 font-poppin">
     {brandProducts.length == 0 ?   <><h2 className="capitalize text-3xl font-rancho text-center">
Not Available </h2></> : <h2 className='capitalize text-3xl font-rancho text-center  ' >
  {'Available '+ brandProducts[0]?.brandname + ' Products'}        
            </h2> 
            }

      {
        brandProducts.length ==0 ? 
        <div className=" items-center justify-center mx-auto text-center">
       
       <div className="grid place-content-center py-10 mx-auto ">
           <img className=" " src={'https://media.tenor.com/CO5U3IOpD84AAAAj/uh-oh-eric-cartman.gif'} alt="" />
           </div>
            <h2 className="capitalize text-3xl font-rancho   text-orange-600">
Sorry!! Products are not available at the moment  </h2>
        </div>:<div className="max-sm:grid-cols-1 grid grid-cols-2 mx-5 gap-5">

{
    brandProducts.map(product=><>
    <div key={product._id} className="card card-side bg-base-100 shadow-xl">
  <figure><img className="bg-cover pl-5" src={product?.image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{product?.name}</h2>
    <p className="capitalize text-sm"> <b>Brand: </b> { product?.brandname}</p>
      <p className=" text-sm"> <b>Price: </b>  <span className="text-red-500 font-bold ">{ product?.price} </span>  $</p>
  <p className="text-sm flex items-center "> <b>Rating: </b> 
  {Array(Number(product?.rating)).fill().map((_, index) => (
    <AiFillStar className="text-xl text-yellow-400" key={index}></AiFillStar>
  ))}
   
    </p>
    <p className="text-sm">Details: { product?.desc.slice(0,40)+'...' }</p>
    <div className="card-actions justify-end">
    
    <Link to={`/details/${product._id}`}>
     <button className="btn rounded-full hover:rounded-lg capitalize 
          text-white
          bg-gradient-to-t
          hover:from-green-400 hover:to-blue-500 from-green-500 to-yellow-300 
 ">Details</button> </Link>
    <Link to={`/update/${product?._id}`}>
     <button className="btn  capitalize 
          text-white rounded-full hover:rounded-lg
          bg-gradient-to-t
          hover:from-green-400 hover:to-blue-500 from-pink-400 to-blue-500 
 ">Update</button> 
  </Link>
    
   
   
    </div>
  </div>
</div>
    </>)
}
</div>
      }      


</section>

        </div>
    );
};

export default ViewProducts;
