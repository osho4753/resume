import './styles/main.css'

function App() {
  return (
    <div>
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
      <header class="header">
        <div class="header__wrapper">
          <h1 class="header__title">
            <strong>
              Hi, my name is <em>Dilnaz </em>
            </strong>
            SMM specialist from Prague
          </h1>
          <div class="header__text">
            <p>with passion for learning and creating.</p>
          </div>
        </div>
      </header>
      <main class="section">
        <div class="container">
          <ul class="content-list">
            <li class="content-list__item">
              <h2 class="title-2">
                Experienced SMM Specialist Ready to Grow Your Brand
              </h2>
              <p>
                I specialize in creating effective social media strategies that
                engage audiences and drive growth. My campaigns help brands
                stand out and build lasting relationships with their customers.
                Explore my successful case studies below.
              </p>
            </li>
            <li class="content-list__item">
              <h2 class="title-2">
                Case Studies: Real Results for Real Brands
              </h2>
              <p>
                From launching social media campaigns to managing content, each
                project was tailored to achieve specific client goals. See how I
                helped businesses grow their audience, increase sales, and
                strengthen their online presence.
              </p>
            </li>
            <li class="content-list__item">
              <h2 class="title-2">A Personalized Approach for Every Client</h2>
              <p>
                Every brand is unique, and I create custom strategies based on
                the client’s objectives and target audience. Whether it's
                promoting new products, enhancing brand image, or growing
                followers, my solutions are driven by data analysis and the
                latest trends.
              </p>
            </li>
            <li class="content-list__item">
              <h2 class="title-2">
                Transparency and Reporting: Tangible Results Every Month
              </h2>
              <p>
                I provide detailed reports with key metrics for every project so
                you can see real progress—from increased reach to improved
                conversions. This analytics-driven approach allows for
                continuous adjustments to ensure the best possible outcomes.
              </p>
            </li>
          </ul>
        </div>
      </main>
      <footer class="footer">
        <div class="container">
          <div class="footer__wrapper">
            <ul class="social">
              <li class="social__item">
                <a href="https://www.instagram.com/_dilmoon/?igsh=MTUxODc1cnc2OWY4NA%3D%3D">
                  <img
                    src="https://img.icons8.com/?size=60&id=32292&format=png&color=ffffff"
                    alt="Link"
                  />
                </a>
              </li>
              <li className="social__item">
                <a href="https://www.tiktok.com/@dilmoonmondi?_t=8pmEFkdqucy&_r=1">
                  <img
                    src="https://img.icons8.com/?size=60&id=84521&format=png&color=ffffff"
                    alt="Link"
                  />
                </a>
              </li>
              <li class="social__item">
                <a href="https://t.me/dilmoonn">
                  <img
                    src="https://img.icons8.com/?size=60&id=85428&format=png&color=ffffff"
                    alt="Link"
                  />
                </a>
              </li>
              <li class="social__item">
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

export default App
