import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Home() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [nextIndex, setNextIndex] = React.useState(1)
  const [animating, setAnimating] = React.useState(false)

  const startTransition = React.useCallback((targetIndex) => {
    if (animating || targetIndex === currentIndex) return
    setNextIndex(targetIndex)
    setAnimating(true)
    setTimeout(() => {
      setCurrentIndex(targetIndex)
      setAnimating(false)
      setNextIndex((targetIndex + 1) % products.length)
    }, 600)
  }, [animating, currentIndex])

  React.useEffect(() => {
    const interval = setInterval(() => {
      startTransition((currentIndex + 1) % products.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [currentIndex, startTransition])

  const handleExplore = () => {
    console.log('Explore clicked')
  }

  return (
    <>
      <header className="hero">
        <div className="hero-left">
          <h1 className="logo-text-large">IIT BOMBAY</h1>
          <h2 className="big">MERCH</h2>
        </div>
        <div className="hero-right">
          <div className="hero-shirt">
            <div className="hero-slide-wrapper" aria-live="polite">
              <img
                key={currentIndex}
                src={products[currentIndex].image}
                alt="shirt"
                className={`shirt-img ${animating ? 'slide-out-left' : ''}`}
              />
              {animating && (
                <img
                  key={nextIndex}
                  src={products[nextIndex].image}
                  alt="next shirt"
                  className="shirt-img slide-in-right"
                />
              )}
            </div>
            <Link to="/explore" className="explore-btn">EXPLORE</Link>
            <div className="hero-dots">
              {products.map((_, i) => (
                <button
                  key={i}
                  className={i === currentIndex ? 'dot active' : 'dot'}
                  onClick={() => startTransition(i)}
                  aria-label={`Show shirt ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="carousel-section">
        
          <div className="products-grid">
            {products.slice(0, 3).map((item) => (
              <ProductCard key={item.id} {...item} onExplore={handleExplore} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
