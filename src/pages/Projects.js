import React from 'react'
import ProjectCard from '../components/ProjectCard'
export default function Projects({ content }) {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-2">{content.projects.title}</h2>
        <ul className="projects">
          {content.projects.project.map((n, index) => (
            <ProjectCard
              title={n.title}
              img={n.img}
              imgBig={n.cardImg}
              content={n.content}
              key={index}
              index={index}
            />
          ))}
        </ul>
      </div>
    </main>
  )
}
