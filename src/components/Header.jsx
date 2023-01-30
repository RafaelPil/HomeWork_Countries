import React from "react";

const Header = ({ sortBtn }) => {
  return (
    <div className="flex flex-col items-center mx-10">
      <div className="w-full text-center md:text-left text-4xl py-4 px-6 bg-gray-200">
        Homework Countries
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between rounded-b-lg py-4 px-6 bg-gray-200">
        <div className="flex flex-col md:flex-row justify-start">
          <button
            onClick={sortBtn}
            className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4 md:mb-0 mr-4"
          >
            Sort by name
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4 md:mb-0">
            button 2
          </button>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
          Button 3
        </button>
      </div>
    </div>
  );
};

export default Header;
