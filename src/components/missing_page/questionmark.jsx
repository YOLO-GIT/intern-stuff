import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Fatal_Error_img from "../../assets/fatal_error.png";

const Fatal_Error = () => {
  const [isHovered, setIsHovered] = useState(false);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/secret_link"); // Redirect to the target route
  };

  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center">
      {/* Full-screen image */}
      <img
        className="w-full h-full object-cover"
        src={Fatal_Error_img}
        alt="mockup"
      />

      {/* Hidden secret button */}
      <div
        className="absolute bottom-10 w-48 h-24 flex justify-center items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered && (
          <button
            className="bg-black text-white text-center font-semibold p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-red-800"
            onClick={handleButtonClick}
          >
            long time no see ☺
          </button>
        )}
      </div>
    </div>
  );
};

export default Fatal_Error;
