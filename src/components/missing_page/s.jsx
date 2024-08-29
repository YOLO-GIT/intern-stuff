import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Error_One from "../../assets/error404.png";

const ErrorPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate("/null_one"); // Redirect to the target route
  };

  // Use useEffect to log messages only once when the component mounts
  useEffect(() => {
    console.log("ATTEMPTING RECONNECT");
    console.log("SUCCESS");
    console.log("-- WELCOME BACK, USER Eyebollz123 --");
    console.log("Whatever you do, DO NOT CLICK THE BUTTON!");
    console.log("Eyebollz123 GOT DISCONNECTED");
  }, []); // Empty dependency array means this runs once after the initial render

  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center">
      {/* Full-screen image */}
      <img
        className="w-full h-full object-cover"
        src={Error_One}
        alt="mockup"
      />

      {/* Hidden secret button */}
      <div
        className="absolute bottom-10 w-40 h-24 flex justify-center items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <button
            onClick={handleButtonClick} // Attach click handler
            className="bg-blue-600 text-white text-center font-semibold p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-800"
          >
            You Found Me :D
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
