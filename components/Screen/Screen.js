import React from "react";
export const Screen = ({children}) => {
  return <div className="flex flex-col bg-blue-200 h-screen w-screen overflow-y-scroll">{children}</div>;
};
