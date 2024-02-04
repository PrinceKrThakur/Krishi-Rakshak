import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Modal'; // Import the Modal component
import './ComponentCSS/DragAndDrop.css';

const DragAndDrop = ({ selectedCrop }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    previewFile(file);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log('Selected Image:', file);
    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageSrc({
        file: file,
        dataURL: reader.result,
      });
    };
  };

  const handleShowResult = () => {
    if (imageSrc && imageSrc.file) {
      const formData = new FormData();
      formData.append('file', imageSrc.file);

      const apiEndpoint = `https://diseasedetect.web-project.in/${selectedCrop.toLowerCase()}`;

      axios
        .post(apiEndpoint, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          setShowModal(true);
          setApiResponse(response.data);
        })
        .catch((error) => {
          console.error('API Error:', error);
        });
    }
  };

  const handlePreview = () => {
    if (imageSrc && imageSrc.dataURL) {
      const newWindow = window.open();
      newWindow.document.write(`<img src="${imageSrc.dataURL}" style="max-width: 100%; height: auto;">`);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDownload = () => {
    // Implement download functionality if needed
  };

  const handleMarketplace = () => {
    // Implement navigation to Marketplace if needed
  };

  return (
    <div className="container">
      <h2 className="heading">Add Image for Analysis</h2>
      <div className="dropzone" onDragOver={onDragOver} onDrop={onDrop}>
        {imageSrc ? (
          <img src={imageSrc.dataURL} alt="Preview" className="image-preview" />
        ) : (
          <p>Drag and drop an image here, or click to select an image</p>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <label htmlFor="fileInput" className="button">
        Select from Device
      </label>

      <button onClick={handlePreview} className="button">
        Preview
      </button>

      <button onClick={handleShowResult} className="button">
        Show Result
      </button>

      <Modal
        showModal={showModal}
        closeModal={closeModal}
        apiResponse={apiResponse}
        handleDownload={handleDownload}
        handleMarketplace={handleMarketplace}
      />
    </div>
  );
};

export default DragAndDrop;
