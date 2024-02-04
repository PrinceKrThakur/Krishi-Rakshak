import React, { useState } from 'react';

function FilterOptions({ onFilterChange }) {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [categories, setCategories] = useState([]);
  const [packageSizes, setPackageSizes] = useState([]);

  // Function to handle filter changes and trigger sorting
  const handleFilterChange = () => {
    // Logic to apply filters and sort items
    const filters = {
      priceRange,
      categories,
      packageSizes
    };
    onFilterChange(filters);
  };

  return (
    <div style={{ backgroundColor: '#FFFFFF', color: '#333', padding: '10px', borderRadius: '5px', border: '2px solid #4C9A2A', width: '250px', marginLeft: '20px' }}>
      <h2 style={{ color: '#4C9A2A', marginBottom: '10px', borderBottom: '1px solid #4C9A2A', paddingBottom: '5px', fontSize: '1rem' }}>Filters</h2>
      <div style={{ marginBottom: '10px', fontSize: '0.9rem' }}>
        <h3 style={{ marginBottom: '5px', fontSize: '0.8rem' }}>Price Range:</h3>
        <label style={{ display: 'block', marginBottom: '5px' }}>Min: {priceRange[0]}</label>
        <input type="range" min="0" max="100" value={priceRange[0]} onChange={e => setPriceRange([parseInt(e.target.value), priceRange[1]])} style={{ width: '100%', background: '#4C9A2A', height: '5px', borderRadius: '3px' }} />
        <label style={{ display: 'block', marginBottom: '5px' }}>Max: {priceRange[1]}</label>
        <input type="range" min="0" max="100" value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])} style={{ width: '100%', background: '#4C9A2A', height: '5px', borderRadius: '3px' }} />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <h3 style={{ marginBottom: '5px', fontSize: '0.8rem' }}>Categories:</h3>
        <div>
          <input type="checkbox" value="Insecticides" onChange={e => setCategories([...categories, e.target.value])} /> Insecticides
        </div>
        <div>
          <input type="checkbox" value="Herbicides" onChange={e => setCategories([...categories, e.target.value])} /> Herbicides
        </div>
        <div>
          <input type="checkbox" value="Fungicides" onChange={e => setCategories([...categories, e.target.value])} /> Fungicides
        </div>
        <div>
          <input type="checkbox" value="Spreaders" onChange={e => setCategories([...categories, e.target.value])} /> Spreaders
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '5px', fontSize: '0.8rem' }}>Available Package Size:</h3>
        <div>
          <input type="checkbox" value="1litre" onChange={e => setPackageSizes([...packageSizes, e.target.value])} /> 1 Litre
        </div>
        <div>
          <input type="checkbox" value="500ml" onChange={e => setPackageSizes([...packageSizes, e.target.value])} /> 500ml
        </div>
        <div>
          <input type="checkbox" value="1kg" onChange={e => setPackageSizes([...packageSizes, e.target.value])} /> 1kg
        </div>
      </div>

      <button style={{ backgroundColor: '#4C9A2A', color: '#FFF', padding: '8px 15px', border: 'none', borderRadius: '3px', cursor: 'pointer', fontSize: '0.9rem', marginTop: '10px' }} onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
}

export default FilterOptions;
