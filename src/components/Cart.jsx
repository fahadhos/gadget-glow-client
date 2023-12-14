 
import { useLoaderData, Link } from 'react-router-dom';
import { Navbar } from './../shared/Navbar';
import { useState, useContext } from 'react';
import {AiFillDelete} from 'react-icons/ai'
import Swal from 'sweetalert2';  
import { AuthContext } from '../Providers/AuthProvider';
const Cart = () => {

 const {user}=useContext(AuthContext)
 const loadedcarts = useLoaderData()
 const filteredCarts = loadedcarts.filter(
  // cartItem.id is actually a user email id
  cartItem => cartItem.id === user.email);
console.log(filteredCarts)
const [carts, setCart]= useState(filteredCarts)
console.log(carts);
const handeleDelete=(_id)=>{
    Swal.fire({
        title: 'Confirm Deletion',
        text: 'Are you sure you want to delete this product from your cart?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it',
        cancelButtonText: 'No, cancel',
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`https://brand-shop-server-gamma-two.vercel.app/cart/${_id}`, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = carts.filter((cart) => cart?._id !== _id);
                        setCart(remaining);
                    }
                });
        }
    });
}

    return (
        <div>
       
<Navbar></Navbar>

<section className='py-10'>
  <h1 className='text-3xl font-rancho py-5 text-center '>My Cart</h1>
      <div className="overflow-x-auto">
  <table className="table table-zebra border-4">
    {/* head */}
  
    <thead>
      <tr>
        <th>Photo</th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Delete </th>
      </tr>
    </thead>
    <tbody>
      {
      carts.map(cart=> <>
       <tr>
        <th><img className='bg-cover bg-center  h-[2rem] rounded' src={cart?.image} alt="" /></th>
        <td>{cart?.name}</td>
        <td>{cart?.price}</td>
        <td> 
   
             <button onClick={()=>handeleDelete(cart?._id)}
              className='
              btn  capitalize
              text-white
              bg-gradient-to-t
              hover:from-red-400 hover:to-blue-500 from-pink-500 to-red-500
    
        '>Delete <AiFillDelete/></button>  
          
        </td>
      </tr>  </>
    
     
      )
      }
     
    </tbody>
  </table>
</div> 
</section>
         



        </div>
    );
};

export default Cart;