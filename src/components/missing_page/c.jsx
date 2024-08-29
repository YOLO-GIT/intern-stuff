import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import One from "../../assets/h.png";

const ErrorPage_Two = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 50 });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate("/null_two"); // Redirect to the target route
  };

  // Function to set a random position for the button
  const setRandomPosition = () => {
    const randomTop = Math.floor(Math.random() * 80); // Random top position (0-80% of screen height)
    const randomLeft = Math.floor(Math.random() * 80); // Random left position (0-80% of screen width)
    setButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  useEffect(() => {
    console.log("ATTEMPTING RECONNECT");
    console.log("ATTEMPTING RECONNECT #2");
    console.log("ATTEMPTING RECONNECT #3");
    console.log("SUCCESS");
    console.log("-- WELCOME BACK, USER Eyebollz123 --");
    console.log("please user");
    console.log("listen");
    console.log("DO NOT CLICK THE BUTTON!");
    console.log("MY POWER IS LIMITED NOW---");
    console.log("Eyebollz123 GOT DISCONNECTED");
  }, []);

  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center">
      {/* Full-screen image */}
      <img className="w-full h-full object-cover" src={One} alt="mockup" />

      {/* Hidden secret button */}
      <div
        className="absolute bottom-10 w-40 h-24 flex justify-center items-center"
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          setRandomPosition();
        }}
        style={buttonPosition} // Apply random position styles
      >
        {isHovered && (
          <button
            onClick={handleButtonClick} // Attach click handler
            className="bg-blue-600 text-white text-center font-semibold p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-blue-800"
          >
            no. stop click me.
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage_Two;
