import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={{ width: '200px', margin: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', marginBottom: '10px' }} />
      <h3>{product.name}</h3>
      <p>Quantity: {product.quantity}</p>
      <p>MRP: {product.mrp}</p>
      <button>Add to Cart</button>
    </div>
  );
}

function ProductsDemo() {
  const products = [
    { id: 1, name: "Product 1", image: "image1.jpg", quantity: "1 Litre", mrp: "$10" },
    { id: 2, name: "Product 2", image: "image2.jpg", quantity: "500ml", mrp: "$15" },
    { id: 3, name: "Product 3", image: "image3.jpg", quantity: "1kg", mrp: "$20" },
    { id: 4, name: "Product 4", image: "image4.jpg", quantity: "750ml", mrp: "$25" },
    { id: 5, name: "Product 5", image: "image5.jpg", quantity: "2 Litre", mrp: "$30" },
    { id: 6, name: "Product 6", image: "image6.jpg", quantity: "1kg", mrp: "$35" },
    { id: 7, name: "Product 7", image: "image7.jpg", quantity: "500ml", mrp: "$40" },
    { id: 8, name: "Product 8", image: "image8.jpg", quantity: "1 Litre", mrp: "$45" },
    { id: 9, name: "Product 9", image: "image9.jpg", quantity: "750ml", mrp: "$50" },
    { id: 10, name: "Product 10", image: "image10.jpg", quantity: "500ml", mrp: "$55" },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsDemo;
