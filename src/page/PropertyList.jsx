import React from 'react'
import Property from '../section/Property'

const PropertyList = ({properties}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {properties.map(property=> (
            <Property key={property.id} property={property}/>
        ))}
    </div>
  )
}

export default PropertyList