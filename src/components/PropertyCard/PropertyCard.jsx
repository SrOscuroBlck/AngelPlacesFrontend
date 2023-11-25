import React from "react";

function PropertyCard({ property }) {
  return (
    <div className="inline-block min-w-[300px] mr-6 bg-white shadow-md">
      <img src={property.image} alt="Property" className="h-64 object-cover mb-4 " />
      <div className="px-6 py-4">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{property.address}</h3>
      <p className="text-gray-600">{property.bedrooms}</p>
      <div className="flex justify-between items-center mt-4" >
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
          Book Now
        </button>
        <p className="text-sm font-bold">{property.price}</p>
      </div>
      </div>
    </div>
  );
}

export default PropertyCard;
