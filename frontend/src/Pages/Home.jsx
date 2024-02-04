// Home.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SelectCrop from '../components/SelectCrop';
import DragAndDrop from '../components/DragAndDrop';
import AgricultureNews from '../components/AgricultureNews';
import Footer from '../components/Footer';

const Home = () => {
  const [selectedCrop, setSelectedCrop] = useState('');

  const handleCropSelected = (crop) => {
    setSelectedCrop(crop);
  };

  return (
    <>
      <Navbar />
      <AgricultureNews />
      <SelectCrop onCropSelected={handleCropSelected} />
      <DragAndDrop selectedCrop={selectedCrop} />
      <Footer/>
    </>
  );
};

export default Home;
