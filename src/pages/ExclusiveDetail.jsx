// src/pages/DetailPage.jsx
import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
// import { mockData } from '../data/mockData';

const DetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  // Get product from location state or find from mockData
  const product = location.state?.product || mockData.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="detail-page">
        <button onClick={() => navigate('/')} className="back-button">
          ← Back to Search
        </button>
        <div className="not-found">
          <p>Product not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <button onClick={() => navigate('/')} className="back-button">
        ← Back to Search
      </button>

      <div className="detail-container">
        <div className="detail-image-section">
          <img src={product.image} alt={product.title} className="detail-image" />
        </div>

        <div className="detail-content-section">
          <h1 className="detail-title">{product.title}</h1>
          <p className="detail-category">{product.category}</p>
          <p className="detail-price">{product.price}</p>

          <div className="detail-section">
            <h2>Description</h2>
            <p>{product.description}</p>
          </div>

          <div className="detail-section">
            <h2>Details</h2>
            <p>{product.details}</p>
          </div>

          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;