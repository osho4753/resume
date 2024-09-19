import React from 'react'

export default function Price({ content }) {
  return (
    <main className="section">
      <div className="pricing-container">
        <div className="card">
          <h3 className="card-title"> {content.price.title1}</h3>
          <ul className="card-features">
            {content.price.li1.map((n) => (
              <li class="card-item">{n}</li>
            ))}
          </ul>
          <p className="card-price">{content.price.price1}</p>
        </div>

        <div className="card">
          <h3 className="card-title">{content.price.title2}</h3>
          <ul className="card-features">
            {content.price.li2.map((n) => (
              <li class="card-item">{n}</li>
            ))}
          </ul>
          <p className="card-price">{content.price.price2}</p>
        </div>
      </div>
    </main>
  )
}
