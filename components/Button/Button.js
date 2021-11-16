import React from "react";
import PropTypes from "prop-types";

export const Button = ({text, onClick, variant = "primary"}) => {
  return (
    <button
      className={`${
        variant === "primary"
          ? "bg-burnt-sienna text-white hover:opacity-80 "
          : "bg-white border border-burnt-sienna hover:bg-burnt-sienna hover:text-white text-burnt-sienna"
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
