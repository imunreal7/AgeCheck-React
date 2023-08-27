import React from 'react';
import './ErrorHandler.css';

// ErrorHandler component that displays an error popup with an "Okay" button
const ErrorHandler = (props) => {
  // Handle click on "Okay" button to close the popup
  const handleOkay = () => {
    props.onOkay(); // Call the onOkay prop to close the popup
  };

  return (
    <div className={`error-container ${props.error ? 'active' : ''}`}>
      {/* Error popup */}
      <div className="error-popup">
        {props.error && <p className="error-message">{props.error}</p>}
        {/* "Okay" button */}
        <button className="okay-button" onClick={handleOkay}>
          Okay
        </button>
      </div>
    </div>
  );
};

export default ErrorHandler;
