import { NavLink } from 'react-router-dom'
import { content } from './helpers/en'
export default function Navbar({ language, changeLanguage }) {
  const active = 'nav-list__link nav-list__link--active'
  const normal = 'nav-list__link'
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>{content[language].home.portfolio}</strong>
          </NavLink>

          <ul className="languages">
            <button
              className="rus-language"
              onClick={() => changeLanguage('rus')}
            >
              <img
                src="https://img.icons8.com/?size=30&id=dHLUcDM_MwLT&format=png&color=000000"
                alt="rus"
              />
            </button>
            <button
              className="eng-language"
              onClick={() => changeLanguage('en')}
            >
              <img
                src="https://img.icons8.com/?size=30&id=ShNNs7i8tXQF&format=png&color=000000"
                alt="eng"
              />
            </button>
            <button
              className="cz-language"
              onClick={() => changeLanguage('cz')}
            >
              <img
                src="https://img.icons8.com/?size=30&id=PJS8tczBqyAi&format=png&color=000000"
                alt="cz"
              />
            </button>
          </ul>

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? active : normal
                }}
              >
                {content[language].home.home}
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/projects"
                className={({ isActive }) => {
                  return isActive ? active : normal
                }}
              >
                {content[language].home.projects}
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="/price"
                className={({ isActive }) => {
                  return isActive ? active : normal
                }}
              >
                {content[language].home.price}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
