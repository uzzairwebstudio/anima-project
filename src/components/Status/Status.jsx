/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Status = ({ property1, className }) => {
  return (
    <div
      className={`w-[32px] h-[32px] rounded-[16px] ${
        property1 === "idle" ? "bg-[#2ee456]" : property1 === "busy" ? "bg-[#ed5555]" : "bg-[#d9d9d9]"
      } ${className}`}
    />
  );
};
