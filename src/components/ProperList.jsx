// PropertyList.jsx
import React from 'react';

const PropertyList = ({ properties }) => {
  return (
    <div>
      {properties.map(property => (
        <div key={property.id} className="border p-4 mb-4 rounded shadow-sm">
          <h2 className="text-xl font-bold">{property.title}</h2>
          <p className="text-gray-600">{property.city}</p>
          <p className="text-gray-600">${property.price}</p>
          <p className="text-gray-600">{property.type}</p>
          <p className="text-gray-600">{property.status}</p>
          <img src={property.image} alt={property.title} className="w-full h-auto mt-2 rounded" />
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
