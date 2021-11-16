import React from "react";
export const Screen = ({children}) => {
  return <div className="flex flex-col bg-bdazzled-blue h-screen w-screen overflow-y-scroll">{children}</div>;
};
