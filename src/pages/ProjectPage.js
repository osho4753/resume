import React from 'react'
import { useParams } from 'react-router-dom'
export default function ProjectPage({ content }) {
  const { id } = useParams()
  const file = content.projects.project[id]
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-2">{file.title}</h1>
          <div
            className={`project-details__images ${
              file.imgBefore && file.imgAfter ? 'has-before-after' : ''
            }`}
          >
            {file.imgAfter && (
              <img
                src={file.imgAfter}
                alt="Before"
                className="project-details__img-small"
              />
            )}
            <img
              src={file.cardImg}
              alt="Main"
              className="project-details__cover"
            />
            {file.imgBefore && (
              <img
                src={file.imgBefore}
                alt="After"
                className="project-details__img-small"
              />
            )}
          </div>
          <div className="project-details__desc">
            <p>{file.content}</p>
          </div>
          <a href={file.link} className="btn-outline">
            Instagram
          </a>
        </div>
      </div>
    </main>
  )
}
