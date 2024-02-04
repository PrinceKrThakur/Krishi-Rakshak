import React from 'react';
import './ComponentCSS/Modal.css'; // Import CSS file for modal styling

const Modal = ({ showModal, closeModal, apiResponse, handleDownload, handleMarketplace }) => {
  // Function to replace underscores with spaces
  const normalizeDiseaseName = (name) => {
    return name.replace(/_/g, ' ');
  };

  // Function to find the key with the highest value in an object
  const findMaxValueKey = (obj) => {
    let maxValue = -Infinity;
    let maxKey = '';
    for (const key in obj) {
      if (obj[key] > maxValue) {
        maxValue = obj[key];
        maxKey = key;
      }
    }
    return maxKey;
  };

  return (
    <div className="modal" style={{ display: showModal ? 'block' : 'none' }}>
      <div className="modal-content">
        <h2>Result</h2>
        {apiResponse && (
          <div className="api-response">
            {/* Display healthiness */}
            {/* <div className="key-value-pair">
              <span className="key">Healthiness:</span>
              <span className="value">{apiResponse.healthiness}%</span>
            </div> */}
            {/* Display disease with highest probability */}
            <div className="key-value-pair">
              <span className="key">Probably Infected by: </span>
              <span className="value">{normalizeDiseaseName(findMaxValueKey(apiResponse))}</span>
            </div>
          </div>
        )}

        <div className="modal-buttons">
          <button onClick={closeModal} className="button">
            Close
          </button>
          {/* <button onClick={handleDownload} className="button">
            Download
          </button> */}
          {/* <button onClick={handleMarketplace} className="button">
            Marketplace
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
