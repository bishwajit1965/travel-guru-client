import React from "react";
import { Link } from "react-router-dom";

const DataCard = ({ destination }) => {
  const { id, image, name } = destination;
  return (
    <div className="md:relative">
      <Link to={`/booking/${id}`}>
        <img
          src={image}
          alt=""
          className="w-full h-56 object-cover img-fluid rounded-md"
        />

        <p className="absolute bottom-6 left-20 font-bold">{name}</p>
      </Link>
    </div>
  );
};

export default DataCard;
