import React from 'react'
import Header from '../components/Header'
import photo01 from '../img/projects/01.jpg'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">
                Experienced SMM Specialist Ready to Grow Your Brand
              </h2>
              <p>
                I specialize in creating effective social media strategies that
                engage audiences and drive growth. My campaigns help brands
                stand out and build lasting relationships with their customers.
                Explore my successful case studies below.
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">
                Case Studies: Real Results for Real Brands
              </h2>
              <p>
                From launching social media campaigns to managing content, each
                project was tailored to achieve specific client goals. See how I
                helped businesses grow their audience, increase sales, and
                strengthen their online presence.
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">
                A Personalized Approach for Every Client
              </h2>
              <p>
                Every brand is unique, and I create custom strategies based on
                the client’s objectives and target audience. Whether it's
                promoting new products, enhancing brand image, or growing
                followers, my solutions are driven by data analysis and the
                latest trends.
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">
                Transparency and Reporting: Tangible Results Every Month
              </h2>
              <p>
                I provide detailed reports with key metrics for every project so
                you can see real progress—from increased reach to improved
                conversions. This analytics-driven approach allows for
                continuous adjustments to ensure the best possible outcomes.
              </p>
            </li>
            <li className="project">
              <img src={photo01} alt="Project img" className="project__img" />
              <h3 className="project__title">Nice to meet you</h3>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}
