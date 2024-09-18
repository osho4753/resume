import React from 'react'
import { useParams } from 'react-router-dom'
import { project } from '../components/helpers/projectsList'
export default function ProjectPage() {
  const { id } = useParams()
  const file = project[id]
  console.log(file)
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-2">{file.title}</h1>
          <img src={file.img} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>{file.content}</p>
          </div>

          <a href="#!" className="btn-outline">
            Link to instagram
          </a>
        </div>
      </div>
    </main>
  )
}
