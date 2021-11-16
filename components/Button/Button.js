import React from "react";
import PropTypes from "prop-types";

export const Button = ({text, onClick, variant = "primary"}) => {
  return (
    <button
      class={`${
        variant === "primary"
          ? "bg-blue-500 text-white hover:bg-blue-700"
          : "bg-transparent border border-blue-500 hover:bg-blue-500 text-blue-700"
      } font-bold py-2 px-4 rounded`}
      onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "outlined"]),
};
