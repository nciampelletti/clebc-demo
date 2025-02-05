import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ImageBgr from '../../images/main-bcg3.jpeg'

const Header = () => {
  return (
    <Wrapper>
      <div className="banner">
        <h2>The Continuing Legal Education Society of British Columbia</h2>
        <h4 className="banner-text">
          is the most respected and most often relied upon source of continuing
          professional education for British Columbia lawyers and their support
          staff.
        </h4>
        {/* <a href="products.html" className="btn banner-btn">
          explore customers
        </a> */}
        <Link to="/customer" className="btn banner-btn">
          explore
        </Link>
      </div>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.section`
  min-height: calc(70vh - 5rem);
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),
    url(${ImageBgr}) center/cover no-repeat fixed;
  position: relative;

  .banner {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .banner h2 {
    font-family: var(--ff-secondary);
    color: var(--clr-primary);
    font-size: clamp(1.5rem, 5vw, 2.5rem);
  }
  .banner h4 {
    text-transform: uppercase;
    color: var(--clr-white);
    margin-top: 1.25rem;
    margin-bottom: 2rem;
  }
  .banner-btn {
    outline: 0.125rem solid var(--clr-primary);
    outline-offset: 0.25rem;
    font-size: clamp(1rem, 5vw, 1.25rem);
    padding: 0.5rem 1.75rem;
  }

  @media screen and (min-width: 1200px) {
    .banner-btn {
      padding: 1rem 1.75rem;
    }
  }
`
