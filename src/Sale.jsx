import React from 'react';

const Sale = () => {
  return (
    <div className="container-fluid mt-5 bg-warning">
      <div className="contents">
        <h2 style={{color:'darkred'}} className="heading">EXTRA SMOKY BEEF </h2>
        <h2 className="heading">EXCITE YOUR TASTE </h2>
        <h2 className="heading">BUDS <span style={{color:'red'}}>NOW!</span> </h2>

        <p className="text">Dive into daily savings with Deal of the Day. <br /> Unbeatable offers await every 24 hours. <br /> Choose from Same Day Delivery, Drive Up or Order Pickup.</p>
      <h1 className='text-warning'>Rs.100</h1>
      <button className="shop-now-button mt-5">Shop Now!</button>

      </div>
      <img 
        src="http://hdqwalls.com/download/1/hot-spicy-burger-ys.jpg" 
        alt="Description" 
        className="images" 
      />
      
    </div>
    
  );
}

export default Sale;
