import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FrontPage.css';

function FrontPage() {
  const steps = [
    "Step 1: It will take the input of a Crop leaf for analyzing it",
    "Step 2: Our algorithms analyze the imagery to identify different crop types",
    "Step 3: Receive detailed reports on crop health and potential issues",
    "Step 4: Make informed decisions to improve agricultural productivity"
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (currentStep === steps.length - 1) {
      navigate('/home');
    } else {
      setCurrentStep(currentStep + 1);
    }
  };


  return (
    <div className="front-page">
      <header className="header">
        <h1>Welcome to the Agricultural Crop Detection Project</h1>
      </header>
      <div className="carousel">
        <div className="step">{steps[currentStep]}</div>
        <button className="next-button" onClick={handleNextStep}>
          {currentStep === steps.length - 1 ? 'Start Now' : 'Next'}
        </button>
      </div>
    </div>
  );
}

export default FrontPage;
