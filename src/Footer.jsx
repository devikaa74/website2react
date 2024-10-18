import React from 'react';

const Footer = () => {
  return (
    <div style={{height:'auto', color:'white'}} className='container mt-5 w-100'>
      <div className="row">
        {/* Intro Section */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <h5 style={{color:'red'}} className='fw-bolder'>BURGER<span className='text-warning'>LOUNGE</span></h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ratione asperiores quisquam obcaecati nam dolorum a laborum! Repellat quasi illum atque? Quas, minus! Impedit facere ea eos iure, sunt error!</p>
          {/* <p>Code licenced Lipstick, docs CC by 3.0.</p>
          <p>Currently v5.3.2.</p> */}
                <p className='d-flex align-items-center justify-content-center mt-3'>Copyright &copy; All India brand, Burger Lounge.</p>

        </div>
        
        {/* Links Section */}
        <div className="col-12 col-md-6 col-lg-2 mb-4">
          <h5>Links</h5>
          <a href="#" className='text-decoration-none text-white d-block'>Home</a>
          <a href="#" className='text-decoration-none text-white d-block'>Menu</a>
          <a href="#" className='text-decoration-none text-white d-block'>Offer</a>

          <a href="#" className='text-decoration-none text-white d-block'>About</a>
          <a href="#" className='text-decoration-none text-white d-block'>Shop</a>
        </div>

        {/* Guides Section */}
        <div className="col-12 col-md-6 col-lg-2 mb-4">
          <h5>Guides</h5>
          <a href="#" className='text-decoration-none text-white d-block'>React</a>
          <a href="#" className='text-decoration-none text-white d-block'>React Bootstrap</a>
        </div>

        {/* Contact Us Section */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <h5>Contact Us</h5>
          {/* <div className="d-flex">
            <input placeholder='Enter your email here' type="text" className='form-control' />
            <button className='btn btn-info ms-2'> 
              <i className='fa-solid fa-arrow-right'></i> 
            </button>
          </div> */}
          <div className="icons d-flex justify-content-between mt-3">
            <a href="#" className='text-decoration-none text-white' target='_blank'><i className='fa-brands fa-twitter'></i></a>
            <a href="#" className='text-decoration-none text-white' target='_blank'><i className='fa-brands fa-instagram'></i></a>
            <a href="#" className='text-decoration-none text-white' target='_blank'><i className='fa-brands fa-facebook'></i></a>
            <a href="#" className='text-decoration-none text-white' target='_blank'><i className='fa-brands fa-linkedin'></i></a>
            <a href="#" className='text-decoration-none text-white' target='_blank'><i className='fa-brands fa-github'></i></a>
            <a href="#" className='text-decoration-none text-white' target='_blank'><i className='fa-solid fa-phone'></i></a>
          </div>
        </div>
      </div>
      
      {/* <p className='d-flex align-items-center justify-content-center mt-3'>Copyright &copy; All world brand, Lipstick.</p> */}
    </div>
  )
}

export default Footer;
