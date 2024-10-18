import React, { useEffect, useState } from "react";
import "./App.css"; // Link to the CSS you created
import img1 from './assets/bun.png';
import img2 from './assets/bun2.png';
import img3 from './assets/lettuce.png';
import img4 from './assets/cheese.png';
import img5 from './assets/cutlet.png';

const BurgerParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="burger-container" style={{backgroundImage:'linear-gradient(to right, #000000, #388E3C)'}}>
      {/* Heading and Button */}
      <div className="header-container">
        <h1 style={{color:'#FF6F61'}}>Burger Lounge</h1>
        <p className="mt-5" style={{fontSize:'1.2rem'}}>CATERING DESIGNED TO MAKE YOU LOOK <br />
         GOOD! WE KEEP THINGS PRETTY SIMPLE-BURGERS <br />
         WE OFFER PICK-UP & DELIVERY <br />
         </p>
        <button className="shop-now-button mt-5" >Order Now              <i className='fa-solid fa-arrow-right'></i> 
        </button>
      </div>

      {/* Add each layer as an individual image */}
      <div
        className="burger-layer bun-top"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <img src={img1} alt="Top Bun" />
      </div>
      <div
        className="burger-layer lettuce"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <img src={img3} alt="Lettuce" />
      </div>
      <div
        className="burger-layer cheese"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <img src={img4} alt="Cheese" />
      </div>
      <div
        className="burger-layer cutlet"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <img src={img5} alt="Cutlet" />
      </div>
      <div
        className="burger-layer bun-bottom"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <img src={img2} alt="Bottom Bun" />
      </div>

      <div className="service-container">
        <h2 className="text-info">RECIEVE GREAT FOOD</h2>
        <h1>AND <span style={{color:'red'}}>HIGH</span> <span style={{color:'greenyellow'}}> QUALITY</span> SERVICE</h1>
      </div>
    </div>
  );
};

export default BurgerParallax;
