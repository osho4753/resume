import React from 'react'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <a href="./index.html" className="logo">
            <strong>SMM specialist</strong> portfolio
          </a>
          <ul className="languages">
            {' '}
            <button className="rus-language">
              <img
                src="https://img.icons8.com/?size=30&id=dHLUcDM_MwLT&format=png&color=000000"
                alt="rus"
              />
            </button>
            <button className="eng-language">
              <img
                src="https://img.icons8.com/?size=30&id=ShNNs7i8tXQF&format=png&color=000000"
                alt="eng"
              />
            </button>
            <button className="cz-language">
              <img
                src="https://img.icons8.com/?size=30&id=PJS8tczBqyAi&format=png&color=000000"
                alt="cz"
              />
            </button>
          </ul>

          <ul className="nav-list">
            <li className="nav-list__item">
              <a
                href="./index.html"
                className="nav-list__link nav-list__link--active"
              >
                Home
              </a>
            </li>
            <li className="nav-list__item">
              <a href="./projects.html" className="nav-list__link">
                Projects
              </a>
            </li>
            <li className="nav-list__item">
              <a href="./price.html" className="nav-list__link">
                Price
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
