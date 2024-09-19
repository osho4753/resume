import React from 'react'
import { NavLink } from 'react-router-dom'
export default function ProjectCard({ img, title, imgBig, index }) {
  return (
    <div>
      <li className="project">
        <NavLink to={`/project/${index}`}>
          <img src={img} key={index} alt={title} className="project__img" />
          <h3 className="project__title">{title}</h3>
        </NavLink>
      </li>
    </div>
  )
}
