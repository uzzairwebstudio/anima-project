/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Skill = ({ className, text = "Skill 1" }) => {
  return (
    <div className={`relative w-[78px] h-[64px] ${className}`}>
      <div className="absolute -top-px left-0 [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-[#7f7f7f] text-[28px] tracking-[0] leading-[64px] whitespace-nowrap">
        {text}
      </div>
    </div>
  );
};
