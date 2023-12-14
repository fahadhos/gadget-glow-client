import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';

const AddBrand = () => {
  const handleAddBrand = e => {
    e.preventDefault ();
    const form = e.target;
    const brand = form.brand.value.toLowerCase ();
    const image = form.image.value;

    const newbrand = {brand, image};
    console.log (newbrand);

    // send data to server

    fetch ('https://brand-shop-server-gamma-two.vercel.app/addbrand', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify (newbrand),
    })
      .then (res => res.json ())
      .then (data => {
        console.log (data);
        if (data.insertedId) {
          Swal.fire ({
            title: 'Success',
            text: 'Brand Added successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
        form.reset ();
      });
  };
  return (
    <div>
      <form onSubmit={handleAddBrand}>

        <div className="card shadow-md bg-orange-100 p-10 grid place-content-center">
          <h2 className="text-3xl font-rancho text-center">
            Add Brands
          </h2>
          <select name="brand" className="select w-full max-w-xs">
            <option disabled selected>Please Choose Brand</option>
            <option>Apple</option>
            <option>Samsung</option>
            <option>Asus</option>
            <option>Motorola</option>
            <option>LG</option>
            <option>Huawei</option>
          </select>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter product image link"
              className="input input-bordered w-full max-w-xs"
            />
          </div>

          <div className=" grid place-content-center pt-5">
            <input
              type="submit"
              className="btn 
capitalize 
text-white
bg-gradient-to-t
hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 
btn-block
"
              value="App Brand"
            />
            <Link to="/">
              <button className="btn capitalize 
          text-white
          bg-gradient-to-t
          hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 
          ">
                Go Back Home
              </button>
            </Link>
          </div>
        </div>

      </form>

    </div>
  );
};

export default AddBrand;
