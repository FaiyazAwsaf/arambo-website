import React from 'react';
import TruckCard from '@/components/TruckCard';

const BookAtruck = () => {
  const trucksData = [
    {
      id: 't101', 
      title: "9 ft 1.5ton (Open)",
      imageSrc: "/trucks/Truck1.png", 
      details: "Toyota Towerenco, Toyota Dyna, Mahindra Big Bolero. Mini Pickup - Ideal for 1RK/Studio"
    },
    {
      id: 't102',
      title: "12 ft 2ton (Open)",
      imageSrc: "/trucks/Truck1.png",
      details: "JMC, JAC. Covered Van – Ideal for 1BHK – 2BHK"
    },
    {
      id: 't103',
      title: "12 ft 2ton (Open)",
      imageSrc: "/trucks/Truck1.png",
      details: "JMC, JAC. Covered Van – Ideal for 1BHK – 2BHK"
    },
    {
      id: 't104',
      title: "12 ft 2ton (Open)",
      imageSrc: "/trucks/Truck1.png",
      details: "JMC, JAC. Covered Van – Ideal for 1BHK – 2BHK"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div
          style={{
            background: 'linear-gradient(180deg, #000B26 0%, #00123C 19.69%, #032471 70.33%, #0C39A3 86.64%, #0041D9 100%)'
          }}
          className='relative h-[200px] flex flex-col justify-center items-center rounded-2xl text-Arambo-White p-5 mb-5'
        >
         <h1 className="text-center h1 mb-8">Book A Truck</h1>
      </div>

      <div className="max-w-3xl mx-auto mb-8">
        <h2 className="h2 mb-4">Choose a Trucks</h2>
        <p>
          If you have any confusions about truck size, you can book either option & then our team will reach out to for final confirmation
        </p>
      </div>
      
      <div className="flex flex-col items-center">
        {trucksData.map((truck) => (
          <TruckCard
            key={truck.id}
            title={truck.title}
            imageSrc={truck.imageSrc}
            details={truck.details}
          />
        ))}
      </div>
    </div>
  );
};

export default BookAtruck;