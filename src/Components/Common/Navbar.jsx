import React from 'react'
import logo from '../../images/cle-logo.webp'
import { FaBars } from 'react-icons/fa'
import { social } from '../../data'
import { Link } from 'react-router-dom'

const toggleLinks = () => {
  //setShowLinks(!showLinks)
}

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to={`/`}>
            <img src={logo} className="nav-logo" alt="logo" />
          </Link>

          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        {/* social links */}
        <ul className="nav-social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
