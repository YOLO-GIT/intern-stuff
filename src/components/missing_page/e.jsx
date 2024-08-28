import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Four from "../../assets/p.png";

const ErrorPage_Four = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const navigate = useNavigate(); // Initialize useNavigate

  const handleButtonClick = () => {
    navigate("/null_five"); // Redirect to the target route
  };

  // Function to set a random position for the button
  const setRandomPosition = () => {
    const randomTop = Math.floor(Math.random() * 80); // Random top position (0-80% of screen height)
    const randomLeft = Math.floor(Math.random() * 80); // Random left position (0-80% of screen width)
    setButtonPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
  };

  return (
    <div className="relative w-screen h-screen flex flex-col justify-center items-center">
      {/* Full-screen image */}
      <img className="w-full h-full object-cover" src={Four} alt="mockup" />

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
            className="bg-red-900 text-white text-center font-semibold p-3 rounded-lg transition-all duration-300 ease-in-out hover:bg-red-800"
          >
            S̴̢̛͔͇̪̬͔̠͍̟̗̘͉͈̣͎͋̊͊͗͑̎̉̅͂̏͝͝T̸̛̼̗̀̾̈́̽̍̀̇̋̀̌̚̕O̴̲̯̱̣̥͖͓̖͕̱̬͉̝̭̹̿̾̈́͂̀͛̾͌̈́́̈͠P̵̧̛̣̹͔̗͖͈̪̻̠̯̫̤̤̣̏̀̐̽͌̋̉͆̈́̍͠P̶̡̪̻̣̺̯̳̪̫̞̋͑̍͗͊͝P̵̜̻̭͕̳̠̯̫̤͚̹̗̣͒͌̆̊͌̐̆̈̀̀́͜P̸̨̧̩͍͇̟͉̻̟͇͍̊̂͜P̸̧̛͍̫͈̹̱̞̦̹̲̊͒̀́͛͜ͅP̵͈̰͓̞̯̭͖͚̯̹̹̈͒̀̄̑̒̈́ͅͅP̵̧̨̜̦͉̔̓͑͋̒͒P̶̦͇̗̗̫̦͖͚̞͍͇͎̍̃͜͝P̶̫̖̲̠̯͎̖̓͝P̵̢͈̭̝̫̬͉̥̙̱̱͍̱̱̕P̴̤̠͇̦̣͈̗̲̝̞̞̖̪̫̿̓̃͛̄̂̍̃̚̕̕͜͝P̷̣̐̀͗̄͘P̸̡̛̫̳͔̰̦̫̜̹͓̿̍̚ͅ
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage_Four;
