import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useLoaderData } from "react-router-dom";


const BrandBanner = () => {
  
    const brandbanner = useLoaderData()
    const bannerdata = brandbanner.brandBanner
     const {bg_1, bg_2, bg_3}= bannerdata[0];
    console.log(bannerdata[0])
    // const responsive = {
    //     superLargeDesktop: {
    //       // the naming can be any, depends on you.
    //       breakpoint: { max: 4000, min: 3000 },
    //       items: 5
    //     },
    //     desktop: {
    //       breakpoint: { max: 3000, min: 1024 },
    //       items: 3
    //     },
    //     tablet: {
    //       breakpoint: { max: 1024, min: 464 },
    //       items: 2
    //     },
    //     mobile: {
    //       breakpoint: { max: 464, min: 0 },
    //       items: 1
    //     }
    //   };
       return (
        <div >
                <Carousel
                //  responsive={responsive} 
       infinite={true} 
  autoPlay={true }
  autoPlaySpeed={2000}> 
   
     <div > <img src={bg_1}/> </div>
         <div> <img src={bg_2}/> </div>
         <div> <img src={bg_3}/> </div>
 
    
     
   
        
      </Carousel>  

   
        </div>
    );
};

export default BrandBanner;