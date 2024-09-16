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
              <h2 class="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM,
                BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
              </p>
            </li>
            <li class="content-list__item">
              <h2 class="title-2">Backend</h2>
              <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
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
                    src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000"
                    alt="Link"
                  />
                </a>
              </li>
              <li class="social__item">
                <a href="https://www.tiktok.com/@dilmoonmondi?_t=8pmEFkdqucy&_r=1">
                  <img
                    src="https://img.icons8.com/?size=100&id=118640&format=png&color=000000"
                    alt="Link"
                  />
                </a>
              </li>
              <li class="social__item">
                <a href="https://t.me/dilmoonn">
                  <img
                    src="https://img.icons8.com/?size=100&id=63306&format=png&color=000000"
                    alt="Link"
                  />
                </a>
              </li>
              <li class="social__item">
                <a href="!">
                  <img
                    src="https://img.icons8.com/?size=100&id=114452&format=png&color=000000"
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
/*    <nav class="nav">
        <div class="container">
            <div class="nav-row">
                <a href="./index.html" class="logo"><strong>Freelancer</strong> portfolio</a>

                <button class="dark-mode-btn">
                    <img src="./img/icons/sun.svg" alt="Light mode" class="dark-mode-btn__icon">
                    <img src="./img/icons/moon.svg" alt="Dark mode" class="dark-mode-btn__icon">
                </button>

                <ul class="nav-list">
                    <li class="nav-list__item"><a href="./index.html" class="nav-list__link nav-list__link--active">Home</a></li>
                    <li class="nav-list__item"><a href="./projects.html" class="nav-list__link">Projects</a></li>
                    <li class="nav-list__item"><a href="./contacts.html" class="nav-list__link">Contacts</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <header class="header">
        <div class="header__wrapper">
            <h1 class="header__title">
                <strong>Hi, my name is <em>Yuri</em></strong><br>
                a frontend developer
            </h1>
            <div class="header__text">
                <p>with passion for learning and creating.</p>
            </div>
            <a href="#!" class="btn">Download CV</a>
        </div>
    </header>

    <main class="section">
        <div class="container">

                <ul class="content-list">
                    <li class="content-list__item">
                        <h2 class="title-2">Frontend</h2>
                        <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
                    </li>
                    <li class="content-list__item">
                        <h2 class="title-2">Backend</h2>
                        <p>NodeJS, MySQL, MongoDB, PHP, Laravel</p>
                    </li>
                </ul>

        </div>
    </main>

    <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <ul class="social">
                    <li class="social__item"><a href="#!"><img src="./img/icons/vk.svg" alt="Link"></a></li>
                    <li class="social__item"><a href="#!"><img src="./img/icons/instagram.svg" alt="Link"></a></li>
                    <li class="social__item"><a href="#!"><img src="./img/icons/twitter.svg" alt="Link"></a></li>
                    <li class="social__item"><a href="#!"><img src="./img/icons/gitHub.svg" alt="Link"></a></li>
                    <li class="social__item"><a href="#!"><img src="./img/icons/linkedIn.svg" alt="Link"></a></li>
                </ul>
                <div class="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>*/
