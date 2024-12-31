import Wrapper from '../Pages/Wrappers/ErrorPage'
import { Link, useRouteError } from 'react-router-dom'
import img from '../images/not-found.svg'

const ErrorPage = () => {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3> Ohh !</h3>
          <p>We cant seem to find the page you are looking</p>
          <Link to="/">back home</Link>
        </div>
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      <div>
        <img src={img} alt="not found" />
        <h3> Something went wrong !</h3>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  )
}

export default ErrorPage
