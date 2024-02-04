import React from 'react';
import Navbar from '../components/Navbar';
import FilterOptions from '../components/FilterProduct';
import Products from '../components/Products'; // Import the Products component

function Marketplace() {
  // Assuming products data is available
  const products = [
    // Array of products
  ];

  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <FilterOptions />
        <div style={{ marginLeft: '20px', flex: 1 }}>
          
          <Products products={products} /> {/* Render the Products component */}
        </div>
      </div>
    </>
  );
}

export default Marketplace;
