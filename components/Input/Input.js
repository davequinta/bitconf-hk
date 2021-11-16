import React from "react";
import PropTypes from "prop-types";

export const Input = ({
  label,
  type,
  onChange,
  value,
  placeholder,
  id,
  error,
  variant = "normal",
}) => {
  return (
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for={id}>
        {label}
      </label>
      {variant === "textarea" ? (
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          rows="8"
          id={id}
          value={value}
          onChange={onChange}></textarea>
      ) : (
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      <p className="text-red-500 text-xs italic">{error}</p>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  variant: PropTypes.oneOf(["normal", "textarea"]),
};
