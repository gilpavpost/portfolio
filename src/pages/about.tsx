import React from 'react'

import Layout from '../components/layouts/home-layout'
import Contact from '../components/sections/contact'
import SEO from '../components/seo'

import '../styles/about.scss'

const About: React.FC = () => (
  <Layout>
    <SEO title="About Me" />
    <div className="about-route">
      <h1 className="section-title">About me</h1>
      <div className="about-cont">
        <h2>Background</h2>
        <p className="info">
        My name is Pavel. I am a software developer who became a student at an
          institute from Kirov. I discovered my passion for studying computer
          science at the age of 12 and have been programming ever since. The
          ability to teach myself effectively is what I am most proud of. Over
          the course of my life, I have developed active work ethic and
          disciplinary skills. Strong creative and critical thinking skills have
          helped me excel in areas such as web development and functional and
          object oriented programming. In my free time, I immerse myself in
          learning new programming technologies and learning how to improve
          myself as a programmer, but I also find joy in athletics, swimming,
          music, and walking the dog.
        </p>
        <h2>Education</h2>
        <ul>
          <li>
            <p>Vyatka Institute of Technology</p>
            <p>Higher education</p>
          </li>
        </ul>
        <h2 >Experience</h2>
        <ul>
          <li>
            <p>Under 1 year</p>
            <p>Design, build, and support client-side web applications.</p>
          </li>
          <li>
            <p>Over 2 years</p>
            <p>Learning and practicing modern web development.</p>
          </li>
        </ul>
      </div>
      <Contact />
    </div>
  </Layout>
)

export default About
