import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://www.linkedin.com/in/abir-hasnat-2395b4175/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
      </a>
      <a href="https://github.com/Abir0248" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw"
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
      </a>
      <a
        href="skype:live:.cid.6d83006a41a302c5"
        rel="noreferrer"
        target="_blank"
      >
        <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
      </a>
    </footer>
  )
}

export default Footer
