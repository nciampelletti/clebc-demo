import { Link, useLoaderData } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="banner">
        <h2>The Continuing Legal Education Society of British Columbia</h2>
        <h4>
          is the most respected and most often relied upon source of continuing
          professional education for British Columbia lawyers and their support
          staff.
        </h4>
        {/* <a href="products.html" className="btn banner-btn">
          explore customers
        </a> */}
        <Link to="/customer" className="btn banner-btn">
          explore customers
        </Link>
      </div>
    </header>
  )
}

export default Header
