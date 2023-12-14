 const Banner = () => {
 
    return (
        <div >
   

      <div className="overflow-x-hidden  mx-auto   min-h-screen bg-cover" 
       style={{
        backgroundSize: '100% auto',  
  // backgroundPosition: 'center',  
    backgroundRepeat: 'no-repeat', 

        backgroundImage: 'url(https://i.ibb.co/WprCZfN/main-banner.png)'}}>
  <div className="hero-overlay bg-opacity-10"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
          {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>     
        </div>
    );
};

export default Banner;