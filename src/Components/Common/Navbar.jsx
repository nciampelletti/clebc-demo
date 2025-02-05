import React from 'react'
import logo from '../../images/cle-logo.webp'
import { FaBars } from 'react-icons/fa'
import { social } from '../../data'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../Context'
import NavLinks from './NavLinks'
import styled from 'styled-components'

const toggleLinks = () => {
  //setShowLinks(!showLinks)
}

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext()

  const handleSubmenu = (e) => {
    // console.log(e.target);
    if (!e.target.classList.contains('nav-link')) {
      setPageId(null)
    }
  }

  return (
    <Wrapper onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to={`/`}>
            <img src={logo} className="nav-logo" alt="logo" />
          </Link>

          <button className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>

        <NavLinks />

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
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
  height: 5rem;
  background: var(--clr-grey-10);
  /* padding: 1rem 0; */
  position: sticky;
  top: 0;
  z-index: 9;
  box-shadow: var(--shadow-1);

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .nav-logo {
    height: 50px;
  }

  .nav-social-icons {
    display: none;
  }

  .nav-toggle {
    font-size: 1.5rem;
    color: var(--clr-primary);
    background: transparent;
    border-color: transparent;
    transition: var(--transition);
    cursor: pointer;
  }
  .nav-toggle:hover {
    color: var(--clr-primary-light);
    transform: rotate(90deg);
  }

  @media screen and (min-width: 800px) {
    .nav-toggle {
      display: none;
    }
    .nav-header {
      padding: 0;
    }
    .nav-center {
      width: var(--fluid-width);
      max-width: var(--max-width);
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem;
    }

    .nav-social-icons {
      display: flex;
      gap: 0.5rem;
    }
    .nav-social-icons a {
      color: var(--clr-primary);
      transition: var(--transition);
      font-size: 1.25rem;
    }
    .nav-social-icons a:hover {
      color: var(--clr-primary-light);
    }
  }
`
