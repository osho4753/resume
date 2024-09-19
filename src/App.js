import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Price from './pages/Price'
import ProjectPage from './pages/ProjectPage'
import { content } from './components/helpers/en'
import './styles/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
function App() {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const storedLang = localStorage.getItem('language') || 'en'
    setLanguage(storedLang)
  }, [])

  const changeLanguage = (lang) => {
    localStorage.setItem('language', lang)
    setLanguage(lang)
  }
  return (
    <div className="App">
      <Router>
        <Navbar language={language} changeLanguage={changeLanguage} />{' '}
        <Routes>
          <Route
            path="/"
            element={<Home language={language} content={content[language]} />}
          />
          <Route
            path="/price"
            element={<Price language={language} content={content[language]} />}
          />
          <Route
            path="/projects"
            element={
              <Projects language={language} content={content[language]} />
            }
          />
          <Route
            path="/project/:id"
            element={
              <ProjectPage language={language} content={content[language]} />
            }
          />
        </Routes>
        <Footer language={language} content={content[language]} />
      </Router>
    </div>
  )
}

export default App
