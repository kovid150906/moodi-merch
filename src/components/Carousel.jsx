import React, { useState, useEffect, useRef } from 'react'

export default function Carousel({ items = [], visibleCount = 3, renderItem }) {
  const [index, setIndex] = useState(0)
  const total = items.length
  const timeoutRef = useRef(null)

  useEffect(() => {
    // auto-advance every 4s
    timeoutRef.current = setInterval(() => setIndex((i) => (i + 1) % total), 4000)
    return () => clearInterval(timeoutRef.current)
  }, [total])

  function prev() {
    setIndex((i) => (i - 1 + total) % total)
  }

  function next() {
    setIndex((i) => (i + 1) % total)
  }

  // calculate visible slice (circular)
  const visible = []
  for (let i = 0; i < Math.min(visibleCount, total); i++) {
    visible.push(items[(index + i) % total])
  }

  return (
    <div className="carousel">
      <div className="carousel-track">
        {visible.map((it) => (
          <div className="carousel-item" key={it.id}>
            {renderItem ? renderItem(it) : <img src={it.image} alt={it.title} />}
          </div>
        ))}
      </div>

      <div className="dots">
        {items.map((_, i) => (
          <button key={i} className={i === index ? 'dot active' : 'dot'} onClick={() => setIndex(i)} />
        ))}
      </div>
    </div>
  )
}
