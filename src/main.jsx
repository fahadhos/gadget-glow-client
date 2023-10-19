import React from 'react'
import ReactDOM from 'react-dom/client'
 
import './index.css'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Main from './Main/Main';
import AuthProvider from './Providers/AuthProvider';
import {HelmetProvider} from 'react-helmet-async';
import Home from './components/Home';
import Register from './components/Register';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import PrivateRoute from './Providers/PrivateRoute';
import AddBrand from './components/AddBrand';
import ViewProducts from './components/ViewProducts';
import ProductDetails from './components/ProductDetails';
import UpdateProduct from './components/UpdateProduct';
import Contact from './components/Contact';

const router = createBrowserRouter([


  {


      path: "/",


      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
      {
      path:'/',
      element:<Home></Home>,
  loader: ()=> fetch('http://localhost:5001/addbrand')


      },
      {
        path:'login',
        element :<Login></Login>,
   },
      {
        path:'register',
        element :<Register></Register>,
      },
      {
        path:'addproduct',
        element :<PrivateRoute><AddProduct></AddProduct></PrivateRoute> ,
      },
      {
        path:'/view/:brand',
        element :<PrivateRoute><ViewProducts></ViewProducts></PrivateRoute> ,
        loader: ({params})=> fetch(`http://localhost:5001/addproduct/${params.brand}`)
      },
      {
        path:'/details/:id',
        element: <PrivateRoute> <ProductDetails></ProductDetails>
</PrivateRoute> ,
   loader: ({params})=> fetch(`http://localhost:5001/details/${params.id}`)   

},
{
  path:'/update/:id',
  element: <PrivateRoute> <UpdateProduct></UpdateProduct></PrivateRoute>,
  loader: ({params})=> fetch(`http://localhost:5001/addproduct/update/${params.id}`)

},
      {
        path:'addbrand',
        element :<PrivateRoute><AddBrand></AddBrand></PrivateRoute> ,
      },
      {
        path:'cart',
        element : <PrivateRoute><Cart></Cart></PrivateRoute> ,
        loader: ()=> fetch('http://localhost:5001/cart/')
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      },
      ]
   },


 ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
 <AuthProvider>
  <HelmetProvider>

 <RouterProvider router={router}></RouterProvider>
</HelmetProvider>
 </AuthProvider>

  </React.StrictMode>,
)
