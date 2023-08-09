import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            As a passionate Computer Science Engineering graduate, I've always
            been driven by the intricacies of software engineering and the
            transformative power of technology. My foundation in programming is
            coupled with a robust problem-solving acumen, ensuring that I can
            tackle complex challenges and contribute meaningfully to team-driven
            goals. Every line of code I write is a testament to my attention to
            detail, while my adaptability ensures I stay at the forefront of the
            ever-evolving landscape of Software Engineering.
          </p>
          <p align="LEFT">
            Specializing as a MERN-Stack developer, my ambition is not just to
            code but to innovate. I am on the lookout for a dynamic role within
            a forward-thinking IT firm, a place where I can harness the latest
            technologies and work on projects that push the boundaries of what's
            possible.
          </p>
          <p>
            Confidence and curiosity are the twin engines of my professional
            journey. With a ceaseless desire for improvement, I believe in
            refining my skills one design challenge at a time. If there's a
            challenge, you can count on me to be right there, rolling up my
            sleeves and diving in headfirst.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
