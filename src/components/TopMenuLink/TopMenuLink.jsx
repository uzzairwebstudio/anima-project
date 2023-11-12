/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const TopMenuLink = ({ topMenuLinkTitle = "Top Menu Link Title", property1, className, divClassName }) => {
  return (
    <div className={`w-[247px] h-[23px] relative ${className}`}>
      <div
        className={`w-[363px] left-0 tracking-[0] text-[24px] -top-px text-black leading-[normal] whitespace-nowrap absolute ${
          property1 === "active"
            ? "[font-family:'Satoshi_Variable-Bold',Helvetica]"
            : "[font-family:'Satoshi_Variable-Medium',Helvetica]"
        } ${property1 === "active" ? "font-bold" : "font-medium"} ${divClassName}`}
      >
        {topMenuLinkTitle}
      </div>
    </div>
  );
};
