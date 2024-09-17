import React from 'react'

export default function Navbar() {
  return (
    <div>
      {' '}
      <nav class="nav">
        <div class="container">
          <div class="nav-row">
            <a href="./index.html" class="logo">
              <strong>SMM specialist</strong> portfolio
            </a>
            <ul class="languages">
              {' '}
              <button class="rus-language">
                <img
                  src="https://img.icons8.com/?size=30&id=dHLUcDM_MwLT&format=png&color=000000"
                  alt="rus"
                />
              </button>
              <button class="eng-language">
                <img
                  src="https://img.icons8.com/?size=30&id=ShNNs7i8tXQF&format=png&color=000000"
                  alt="eng"
                />
              </button>
              <button class="cz-language">
                <img
                  src="https://img.icons8.com/?size=30&id=PJS8tczBqyAi&format=png&color=000000"
                  alt="cz"
                />
              </button>
            </ul>

            <ul class="nav-list">
              <li class="nav-list__item">
                <a
                  href="./index.html"
                  class="nav-list__link nav-list__link--active"
                >
                  Home
                </a>
              </li>
              <li class="nav-list__item">
                <a href="./projects.html" class="nav-list__link">
                  Projects
                </a>
              </li>
              <li class="nav-list__item">
                <a href="./contacts.html" class="nav-list__link">
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
