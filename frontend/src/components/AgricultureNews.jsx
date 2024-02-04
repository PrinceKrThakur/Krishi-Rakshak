import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ComponentCSS/AgricultureNews.css'; // Import the corresponding CSS file

function AgricultureNews() {
  const news = [
    { 
      id: 1, 
      title: 'Sustainable tomorrow', 
      content: 'How satellite data is bolstering precision farming in India', 
      image: '/news4.avif',
      link: 'https://www.thehindubusinessline.com/economy/agri-business/sustainable-tomorrow-how-satellite-data-is-bolstering-precision-farming-in-india/article67573391.ece' // Replace with actual news link
    },
    { 
      id: 2, 
      title: 'Keraleeyam 2023', 
      content: 'Use latest science and tech tools for building sustainability in agriculture', 
      image: '/news5.avif',
      link: 'https://example.com/news2' // Replace with actual news link
    },
    { 
      id: 3, 
      title: 'CULTIVATING A BETTER TOMORROW', 
      content: 'EMPOWERING FARMERS THROUGH PRECISION AGRICULTURE AND TECHNOLOGY INNOVATION', 
      image: '/news7.jpg',
      link: 'https://example.com/news3' // Replace with actual news link
    },
  ];

  const carouselStyle = {
    maxWidth: '800px',
    margin: 'auto',
    paddingTop: '20px',
  };

  return (
    <div style={carouselStyle}>
      <Carousel>
        {news.map(item => (
          <Carousel.Item key={item.id}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                className="d-block w-100"
                src={item.image} // Using local image from public folder
                alt={`News slide ${item.id}`}
              />
              <Carousel.Caption className="carousel-caption">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </Carousel.Caption>
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default AgricultureNews;
