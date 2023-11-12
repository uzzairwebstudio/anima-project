/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Hashtag = ({ className, text = "#hashtag" }) => {
  return (
    <div className={`relative w-[103px] h-[64px] ${className}`}>
      <div className="absolute h-[64px] -top-px left-0 [font-family:'Satoshi_Variable-Medium',Helvetica] font-medium text-gray-600 text-[24px] tracking-[0] leading-[64px] whitespace-nowrap">
        {text}
      </div>
    </div>
  );
};
