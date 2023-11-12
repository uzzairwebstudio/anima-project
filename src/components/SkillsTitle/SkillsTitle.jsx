/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const SkillsTitle = ({ text = "Skills Title" }) => {
  return (
    <div className="relative w-[176px] h-[64px]">
      <div className="absolute -top-px left-0 [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-black text-[32px] tracking-[0] leading-[64px] whitespace-nowrap">
        {text}
      </div>
    </div>
  );
};
