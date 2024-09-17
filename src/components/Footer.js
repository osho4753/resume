import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <ul className="social">
              <li className="social__item" data-hover-text="Instagram">
                <a href="https://www.instagram.com/_dilmoon/?igsh=MTUxODc1cnc2OWY4NA%3D%3D">
                  <img
                    src="https://img.icons8.com/?size=60&id=32292&format=png&color=ffffff"
                    alt="Link"
                  />
                </a>
              </li>
              <li className="social__item" data-hover-text="Tiktok">
                <a href="https://www.tiktok.com/@dilmoonmondi?_t=8pmEFkdqucy&_r=1">
                  <img
                    src="https://img.icons8.com/?size=60&id=84521&format=png&color=ffffff"
                    alt="Link"
                  />
                </a>
              </li>
              <li className="social__item" data-hover-text="Telegram">
                <a href="https://t.me/dilmoonn">
                  <img
                    src="https://img.icons8.com/?size=60&id=85428&format=png&color=ffffff"
                    alt="Link"
                  />
                </a>
              </li>
              <li className="social__item" data-hover-text="Vk">
                <a href="!">
                  <img
                    src="https://img.icons8.com/?size=60&id=60453&format=png&color=ffffff"
                    alt="Link"
                  />
                </a>
              </li>
              <li className="social__item" data-hover-text="Email">
                <a href="mailto:shakenovadilya@gmail.com">
                  <img
                    src="https://img.icons8.com/?size=60&id=12580&format=png&color=ffffff"
                    alt="Link"
                  />
                </a>
              </li>
            </ul>
            <div className="copyright">
              <p>Welcome to my social media</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
