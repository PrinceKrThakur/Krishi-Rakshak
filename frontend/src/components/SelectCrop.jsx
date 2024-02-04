import React, { useState } from 'react';
import './ComponentCSS/SelectCrop.css';

const crops = ['Corn', 'Wheat', 'Potato', 'Rice', 'Apple', 'Tomato', 'Tea']; // Added three more crops

const SelectCrop = ({ onCropSelected }) => {
  const [selectedCrop, setSelectedCrop] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCropClick = (cropType) => {
    setIsLoading(true);
    setSelectedCrop((prevCrop) => {
      const newCrop = prevCrop === cropType ? '' : cropType;
      console.log('Selected Crop:', newCrop);
      return newCrop;
    });
    onCropSelected(cropType);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const isSelected = (crop) => selectedCrop === crop;

  return (
    <div className="crop-container">
      <h2 className="crop-heading">Select Crop for Analysis</h2>
      <div>
        {crops.map((crop) => (
          <button
            key={crop}
            className={`crop-button ${isSelected(crop) ? 'crop-button-selected' : ''}`}
            onClick={() => handleCropClick(crop)}
          >
            {crop}
          </button>
        ))}
      </div>
      {isLoading && <div className="loader"></div>}
    </div>
  );
};

export default SelectCrop;
