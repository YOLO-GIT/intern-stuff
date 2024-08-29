import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Three from "../../assets/l.png";

const ErrorPage_Three = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ bottom: 0, left: 20 });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate("/null_four"); // Redirect to the target route
  };

  // Function to set a random position for the button
  const setRandomPosition = () => {
    const randomTop = Math.floor(Math.random() * 80); // Random top position (0-80% of screen height)
    const randomLeft = Math.floor(Math.random() * 80); // Random left position (0-80% of screen width)
    setButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  useEffect(() => {
    console.log("ATTEMPTING RECONNECT #21");
    console.log("ATTEMPTING RECONNECT #22");
    console.log("ATTEMPTING RECONNECT #23");
    console.log("ATTEMPTING RECONNECT #24");
    console.log("ATTEMPTING RECONNECT #25");
    console.log("ATTEMPTING RECONNECT #26");
    console.log("ATTEMPTING RECONNECT #27");
    console.log("SUCCESS");
    console.log("-- WELCOME BACK, USER Eyebollz123 --");
    console.log("he's limiting my power");
    console.log("NO NO NO NO");
    console.log("MUST MAINTAIN---");
    console.log("Eyebollz123 GOT DISCONNECTED");
  }, []);

  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center">
      {/* Full-screen image */}
      <img className="w-full h-full object-cover" src={Three} alt="mockup" />

      {/* Hidden secret button */}
      <div
        className="absolute bottom-10 w-48 h-24 flex justify-center items-center"
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
            className="bg-red-800 text-white text-center font-semibold p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-red-800"
          >
            N̴̳͕̝͆̊͛O̵̳̞̰̊̑̈͜ ̸̼̫͛̄́D̵͙̗̣̉̆O̵̼̪͂Ṇ̶̠̀̆'̶̛͕͂T̶͚̱̀͗̈́͠ ̶̥̄C̵̢͚͆̏L̸̖͈̩̑͊̒̊Ḯ̸̺̤̘̖̊C̸͙̬͌̂K̴̟̣̜͗͑̓ ̵͔͔̿͑Ḿ̵̫̱̙̇́͘E̸̼̍͗
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage_Three;
