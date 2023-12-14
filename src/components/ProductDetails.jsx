import { useLoaderData } from "react-router-dom";
import { Navbar } from './../shared/Navbar';
import { Link } from "react-router-dom";
import {AiFillStar} from 'react-icons/ai'; 
import { Helmet } from 'react-helmet-async';
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";
const ProductDetails = () => {
const {

    user
}= useContext(AuthContext)
const details = useLoaderData()
// console.log(details);


const handleAddToCart=(id,image,name,price)=>{
    const cartitems={id:user.email ,image,name,price }
    // console.log(cartitems);
    
fetch('https://brand-shop-server-gamma-two.vercel.app/cart',
{
method: 'POST',
headers: { 
       'content-type': 'application/json'
},
body: JSON.stringify( cartitems)

})
.then(res=>res.json())
.then(data=>{
    console.log(data);
    if(data.insertedId){
        Swal.fire({
            title: 'Success',
            text: 'Product Added to Cart successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          })
    }
})
}

    return (
        <div>
            <Navbar></Navbar>
<Helmet>
    <title>Details</title>
</Helmet>

   <section className="py-10">

    <div className="card lg:card-side bg-base-100 shadow-xl ">
  <figure><img className="bg-cover w-48 p-5" src={details?.image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{details?.name}</h2>
    <p>{details?.brandname}</p>
    <p className=" text-sm"> <b>Price: </b>  <span className="text-red-500 font-bold ">
        { details?.price} </span>  $</p>
  <p className="text-sm flex items-center "> <b>Rating: </b> 
    {Array(Number(details?.rating)).fill().map((_, index) => (
    <AiFillStar className="text-xl text-yellow-400" key={index}></AiFillStar>
  ))}
    </p>
    <p className="text-sm">Details: { details?.desc }</p>
  

   <div className="card-actions justify-end">
    
    <div className="card-actions justify-start">
    {/* <Link to={`/cart/${details._id}`}> */}
     <button onClick={()=>handleAddToCart(details?._id,details?.image,details?.name, details?.price)} className="btn rounded-full hover:rounded-lg capitalize 
          text-white
          bg-gradient-to-t
          hover:from-green-400 hover:to-blue-500 from-green-500 to-yellow-300 
 ">Add To Cart</button> 
 {/* </Link> */}
 
  </div>
  </div>
</div>
</div>
    </section>
        </div>
    );
};

export default ProductDetails;