import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const AddProduct = () => {

    const handleAddProduct=e=>{
        e.preventDefault()
const form = e.target;

const image = form.image.value;

const name= form.name.value;
const brandname= form.brandname.value;
const type= form.type.value;
const price = form.price.value;
const desc = form.desc.value;
const rating = form.rating.value;
const product ={
    image, name, brandname, type, price,desc,rating
}
console.log(product);

// send data to server

fetch('https://brand-shop-server-gamma-two.vercel.app/addproduct',
{
method: 'POST',
headers: { 
       'content-type': 'application/json'
},
body: JSON.stringify(product)

})
.then(res=>res.json())
.then(data=>{
    console.log(data);
    if(data.insertedId){
        Swal.fire({
            title: 'Success',
            text: 'Product Added successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
    form.reset()
})
    }
    return (
        <>
       <div className="border grid  place-content-center py-10 ">
            <h2 className="text-3xl font-rancho text-center">
                Add New Products
            </h2>
             <form onSubmit={handleAddProduct} >
<div className="card shadow-md bg-orange-100 p-10">
    <div className="grid grid-cols-2 gap-4">
   
 <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Image</span>
     </label>
  <input type="text" name="image" placeholder="Enter product image link" className="input input-bordered w-full max-w-xs" />
</div>       
 <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Name</span>
     </label>
  <input type="text" name="name" placeholder="Enter product name" className="input input-bordered w-full max-w-xs" />
</div>       
 <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Brand Name</span>
     </label>
  <input type="text" name="brandname" placeholder="Enter brand name" className="input input-bordered w-full max-w-xs" />
</div>  
     
 <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Type</span>
     </label>
  <input type="text" name="type" placeholder="Enter brand type" className="input input-bordered w-full max-w-xs" />
</div>       
 <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Price</span>
     </label>
  <input type="text" name="price" placeholder="Enter Product Price" className="input input-bordered w-full max-w-xs" />
</div>       
 <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Short Description  </span>
     </label>
  <input type="text" name="desc" placeholder="Enter short description" className="input input-bordered w-full max-w-xs" />
</div>       
 <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Rating</span>
     </label>
  <input type="number" min='1' max='5' name="rating" placeholder="Enter rating" className="input input-bordered w-full max-w-xs" />
</div> 
  </div>
        
<div className=" grid place-content-center pt-5">
   <input type="submit" className="btn 
capitalize 
text-white
bg-gradient-to-t
hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 
btn-block
" value="App Product" />  
  <Link to="/">
          <button className="btn capitalize 
          text-white
          bg-gradient-to-t
          hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 
          ">Go Back Home</button>
        </Link>
</div>

</div>
           

             </form>
        </div>   </>
      
    );
};

export default AddProduct;