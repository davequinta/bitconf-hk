import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

export const Card = ({title, date, priority, image}) => {
  return (
    <div className="h-64 w-full shadow-md rounded mb-8">
      <div className="h-1/2 w-full bg-green-100 relative">
        <Image objectFit="cover" src={image} alt="" layout="fill" />
      </div>
      <div className="h-1/2 w-full bg-white flex flex-col justify-around px-3 rounded">
        <span className="text-xl">{title}</span>
        <span className="text-l">Fecha: {date}</span>
        <span className="text-l">Prioridad: {priority}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  priority: PropTypes.string,
  image: PropTypes.string,
};
