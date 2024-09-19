import React from 'react'
import Header from '../components/Header'
import photo01 from '../img/projects/01.jpg'

export default function Home({ content }) {
  return (
    <div>
      <Header content={content} />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <ul>
              {content.home.li.map((item, index) => (
                <li className="content-list__item" key={index}>
                  <h2 className="title-2">{item}</h2>
                  {content.home.p[index] && <p>{content.home.p[index]}</p>}
                </li>
              ))}
            </ul>
            <li className="project">
              <img src={photo01} alt="Project img" className="project__img" />
              <h3 className="project__title">{content.home.homeimg}</h3>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
