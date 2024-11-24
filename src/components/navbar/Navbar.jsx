import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../aissemble.png';
import './navbar.css';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img className='logo-logo' src={logo} />
          <p className='ai'> Take it Easy!</p>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><Link to="/chatgpt">ChatGPT</Link></p>
          <p><a href="#Gemini">Gemini</a></p>
          <p><a href="#Claude">Claude</a></p>
          <p><a href="#Copilot">Copilot</a></p>
        </div>
      </div>
      {/* <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> */}
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
          
            <p><a href="#home">Home</a></p>
           
            <p> <Link to="/chatgpt">ChatGPT</Link> </p>
               
            <p><a href="#Gemini">Gemini</a></p>
            <p><a href="#Claude">Claude</a></p>
            <p><a href="#Copilot">Copilot</a></p>
          </div>
          {/* <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div> */}
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
