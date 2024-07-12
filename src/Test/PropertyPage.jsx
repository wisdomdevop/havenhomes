import React from 'react'
import SearchHero from '../components/SearchHero'

import PropertyList from '../components/ProperList'
import { listData } from '../constants/dummydata'
const PropertyPage = () => {
      const [filteredProperties, setFilteredProperties] = useState(properties); // State for filtered properties

  const handleSearch = ({ searchTerm, city, price }) => {
    let filtered = properties;

    // Filter by search term (title or type)
    if (searchTerm) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by city
    if (city) {
      filtered = filtered.filter(property =>
        property.city.toLowerCase().includes(city.toLowerCase())
      );
    }

    // Filter by max price
    if (price) {
      filtered = filtered.filter(property =>
        property.price <= parseFloat(price)
      );
    }

    setFilteredProperties(filtered); // Update the state with filtered properties
  };
  return (
       <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">HavenHomes</h1>
      <SearchHero onSearch={handleSearch} /> {/* Render the SearchHero component */}
      <PropertyList properties={filteredProperties} /> {/* Render the PropertyList component */}
    </div>
  )
}

export default PropertyPage