import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export const Card = ({title, date, priority, image, onClick}) => {
  return (
    <div
      className="h-64 w-full shadow-md rounded mb-8 cursor-pointer"
      onClick={onClick}>
      <div className="h-1/2 w-full relative">
        <Image objectFit="cover" src={image} alt="" layout="fill" />
      </div>
      <div className="h-1/2 w-full bg-white flex flex-col justify-around px-3 rounded">
        <div className='flex items-end'>
              <span className="text-xl font-bold">{title}</span>
              <Chip className='ml-28'  color="error" label="PRIORIDAD ALTA" />
        </div>
        <span className="text-l">Fecha: {date}</span>
        <span className="text-l">Localidad: Mejicanos</span>
       
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
