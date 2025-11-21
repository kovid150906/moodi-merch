import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ title, price, image, onExplore }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image || '/image 130.png'} alt={title} />
      </div>
      <div className="product-meta">
        <div className="price">{price}</div>
        <Link to="/explore" className="btn small">EXPLORE</Link>
      </div>
    </div>
  )
}
