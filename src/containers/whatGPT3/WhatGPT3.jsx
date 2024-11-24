import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is aiSSemble" text="Welcome to AI.SSEMBLE, your one-stop platform for accessing multiple AI tools in one place. We've eliminated the need to visit multiple websites by integrating diverse AI functionalities into a seamless and intuitive experience. Discover the convenience of exploring the full potential of AI, all under one roof!" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text=" a unified platform designed to bring multiple AI tools together in one place. Say goodbye to the hassle of navigating multiple websites for different AI functionalities" />
      <Feature title="Productivity" text="Built with a user-centric approach, our platform empowers you to unlock the true potential of AI technology in a streamlined and intuitive environment. Join us today and explore the limitless possibilities of a unified AI ecosystem!" />
      <Feature title="Efficiency" text=" Our platform integrates diverse AI capabilities, allowing users to explore, experiment, and excel without the frustration of switching between various sites. With a focus on accessibility and efficiency, AI Hub ensures a smooth and productive journey for users of all skill levels." />
    </div>
  </div>
);

export default WhatGPT3;
