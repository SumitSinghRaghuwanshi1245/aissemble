import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'ChatGPT',
    text: ' A conversational AI designed for natural, human-like interactions, capable of answering questions, generating creative content, and assisting in various tasks.',
  },
  {
    title: 'Claude A',
    text: 'An advanced AI focused on in-depth reasoning, summarization, and context-aware decision-making for businesses and individuals.',
  },
  {
    title: 'Gemini AI',
    text: "Google's cutting-edge AI designed for multimodal tasks, combining text, image, and data processing for comprehensive solutions.",
  },
  {
    title: 'Copilot AI',
    text: ' A developer’s assistant that streamlines coding, offers intelligent suggestions, and automates repetitive tasks, boosting productivity.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Specialties of AI Tools</h1>
      
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
