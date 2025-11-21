import React from 'react'

export default function Navbar({ children }) {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">MOOD INDIGO</div>
        <ul className="nav-links">
          <li>MERCH</li>
          <li>MULTICITIES</li>
          <li>ACCOMODATION</li>
          <li>COMPETITIONS</li>
        </ul>
        <div className="nav-cta">55"</div>
      </div>
      {children}
    </nav>
  )
}
