import React from 'react'
import photo02 from '../img/projects/3.jpg'
import photo03 from '../img/projects/4.jpg'
import photo04 from '../img/projects/5.jpg'
import photo05 from '../img/projects/6.jpg'
import photo06 from '../img/projects/8.jpg'
import photo07 from '../img/projects/9.jpg'
import photo08 from '../img/projects/10.jpg'

export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          <li className="project">
            <a href="./project-page.html">
              <img src={photo02} alt="Project img" className="project__img" />
              <h3 className="project__title">Visual</h3>
            </a>
          </li>
          <li className="project">
            <a href="./project-page.html">
              <img src={photo03} alt="Project img" className="project__img" />
              <h3 className="project__title">Case(Face point)</h3>
            </a>
          </li>

          <li className="project">
            <img src={photo04} alt="Project img" className="project__img" />
            <h3 className="project__title">Case(barabans)</h3>
          </li>
          <li className="project">
            <img src={photo05} alt="Project img" className="project__img" />
            <h3 className="project__title">Visual with colors</h3>
          </li>
          <li className="project">
            <img src={photo06} alt="Project img" className="project__img" />
            <h3 className="project__title">Working progress(svečky)</h3>
          </li>
          <li className="project">
            <img src={photo07} alt="Project img" className="project__img" />
            <h3 className="project__title">Working progress(Face point)</h3>
          </li>
          <li className="project">
            <img src={photo08} alt="Project img" className="project__img" />
            <h3 className="project__title">Some results</h3>
          </li>
        </ul>
      </div>
    </main>
  )
}
