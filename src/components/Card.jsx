import React from "react";

const Card = ({ countries }) => {
  return (
    <div className="flex flex-col items-center mx-10">
      {countries.map((country) => (
        <div
          key={country.name}
          className="w-full p-6 bg-gray-50 rounded-lg shadow-lg mt-10"
        >
          <h3 className="text-xl font-bold mb-4">{country.name}</h3>
          <p className="text-gray-700 font-medium mb-2">
            Region: {country.region}
          </p>
          <p className="text-gray-700 font-medium">Area: {country.area} km²</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
