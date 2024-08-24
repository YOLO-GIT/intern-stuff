import React, { useEffect } from "react";

const BuyMeACoffeeButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="">
      <a
        href="https://www.buymeacoffee.com/YOLOGIT"
        className="bmc-button font-bold"
        style={{
          backgroundColor: "#FF5F5F",
          color: "#ffffff",
          border: "1px solid #000000",
          fontFamily: "Cookie",
          padding: "10px 20px",
          textDecoration: "none",
          borderRadius: "5px",
          display: "inline-block",
          marginTop: "10px",
        }}
      >
        Buy me a coffee 🐝
      </a>
    </div>
  );
};

export default BuyMeACoffeeButton;
