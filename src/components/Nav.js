import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/logo.png';

const Navigation = () => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      setColor(window.scrollY >= 50);
    };

    // Add the event listener on mount
    window.addEventListener('scroll', changeColor);
console.log(color)
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, [color]);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        fixed="top"
        className={color ? 'bg-[#028fcc] mb-[50px]' : 'mb-[50px] bg-transparent'}
      >
 
          <Navbar.Brand href="#home" className="active text-[30px] font-bold">
            <img src={logo} width={200} height={100} className="pl-[60px]" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="bg-[#252627] lg:bg-transparent p-[10px]">
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="#services" className="text-white">
                Services
              </Nav.Link>
              <Nav.Link href="#portfolio" className="text-white">
                Portfolio
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
       
      </Navbar>
    </div>
  );
};

export default Navigation;
