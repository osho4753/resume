import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { project } from '../components/helpers/projectsList'
export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-2">Projects</h2>
        <ul className="projects">
          {project.map((n, index) => (
            <ProjectCard
              title={n.title}
              img={n.img}
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
