import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
  return (
    <div style={{backgroundImage:'linear-gradient(to right, #000000, #388E3C)', color:'white'}}>
      <Navbar expand="lg" className="bg-body-info">
      <Container>
        <Navbar.Brand href="#home" style={{color:'red'}} className='fw-bolder border'>BURGER<span className='text-warning'>LOUNGE</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link style={{color:'white'}} href="#home">HOME</Nav.Link>
            <Nav.Link style={{color:'white'}} href="#link">MENU</Nav.Link>
            <Nav.Link style={{color:'white'}} href="#link">OFFER</Nav.Link>
            <Nav.Link style={{color:'white'}} href="#link">REVIEWS</Nav.Link>
            <Nav.Link style={{color:'white'}} href="#link">SHOP</Nav.Link>



            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header