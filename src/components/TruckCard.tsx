'use client';

import React from 'react';

interface TruckCardProps {
  title: string;
  imageSrc: string;
  details: string;
}

const TruckCard: React.FC<TruckCardProps> = ({ title, imageSrc, details }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md border border-gray-200
                    max-w-full md:max-w-[789px] p-8 md:px-8 md:py-11 mb-4 gap-8">
      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{details}</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          Go Next →
        </button>
      </div>

      {/* Image Container */}
      <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-4 w-full md:w-1/3 flex justify-center items-center">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-lg object-cover w-full h-auto max-w-xs md:max-w-none"
          onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/E0E0E0/333333?text=Image+Not+Found"; }}
        />
      </div>
    </div>
  );
};

export default TruckCard;