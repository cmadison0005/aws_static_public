import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './App.css'; // Import the CSS file

// Main App component
const App = () => {
  // State for real-time date and time display
  const [dateTime, setDateTime] = useState(new Date().toLocaleString());

  // Effect to update date and time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date().toLocaleString());
    }, 1000);
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div> {/* A wrapper div to contain the header and the new content */}
      <div className="header">
        {/* Logo Section */}
        <div className="logo">
          Astral Enterprises
        </div>

        {/* Navigation Buttons Section */}
        <div className="nav-buttons-container">
          <button
            className="nav-button"
            onClick={() => console.log('Products clicked')}
          >
            Home
          </button>
          <button
            className="nav-button"
            onClick={() => console.log('Solutions clicked')}
          >
            Bio
          </button>
          <button
            className="nav-button"
            onClick={() => console.log('Pricing clicked')}
          >
            Contact
          </button>          
        </div>

        {/* Call to Action Button Section */}
        <div className="call-to-action-container">
          <button
            className="call-to-action-button"
            onClick={() => console.log('Buy me a drink clicked!')}
          >
            Buy Me a Drink
          </button>
        </div>
      </div>

      {/* Content area below the header */}
      <div className="content-area">
        <p className="datetime-display">Current Time: {dateTime}</p>        
      </div>
    </div>
  );
};

export default App;
