import React from 'react';
import gpt3Logo from '../../aissemble.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Dive into the Race of making daily tasks easier!</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Explore</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p> <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <h4>X</h4>
        <h4>Facebook</h4>
        <h4>LinkedIN</h4>

        
        <h4>Instagram</h4>
        
        <h4>Contact</h4>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <h4>Terms & Conditions </h4>
        <h4>Privacy Policy</h4>
        <h4>Contact</h4>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <h4>Sumit Singh Raghuwanshi</h4>
        <h4>+91 877*******</h4>
        <h4>work.sumit12@gmail.com</h4>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 aiSSemble. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
