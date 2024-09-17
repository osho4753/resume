import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="footer__wrapper">
            <ul class="social">
              <li class="social__item" data-hover-text="Instagram">
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
              <li class="social__item" data-hover-text="Telegram">
                <a href="https://t.me/dilmoonn">
                  <img
                    src="https://img.icons8.com/?size=60&id=85428&format=png&color=ffffff"
                    alt="Link"
                  />
                </a>
              </li>
              <li class="social__item" data-hover-text="Vk">
                <a href="!">
                  <img
                    src="https://img.icons8.com/?size=60&id=60453&format=png&color=ffffff"
                    alt="Link"
                  />
                </a>
              </li>
            </ul>
            <div class="copyright">
              <p>Welcome to my social media</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
