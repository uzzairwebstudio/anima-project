/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const HeroText = ({ className, divClassName, text = "Hero text" }) => {
  return (
    <div className={`relative w-[209px] h-[64px] ${className}`}>
      <div
        className={`absolute w-[1261px] -top-px left-0 [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-black text-[42px] text-justify tracking-[0] leading-[64px] ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};
