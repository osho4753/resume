import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Price from './pages/Price'
import ProjectPage from './pages/ProjectPage'

import './styles/main.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<Price />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
