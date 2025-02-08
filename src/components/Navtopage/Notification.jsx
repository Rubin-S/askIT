import React from 'react'
import './styles/Notification.css'

const Notification = () => {
  return (
    <div className="header-service-listing">
      <h3 className="header-title">Service & listing</h3>
      <ul className="header-list">
        <li className="header-list-item">Service categories</li>
        <li className="header-list-item">Pricing & plans</li>
      </ul>
    </div>
  )
}

export default Notification