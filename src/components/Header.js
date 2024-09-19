import React from 'react'

export default function Header({ content }) {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            {content.home.title} <em>{content.home.em} </em>
          </strong>
          {content.home.strong}
        </h1>
        <div className="header__text">
          <p>{content.home.underTitle}</p>
        </div>
      </div>
    </header>
  )
}
