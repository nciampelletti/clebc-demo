import styled from 'styled-components'
import {
  faLocationArrow,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center clearfix">
        <article className="contact-info">
          <div className="contact-item">
            <h4 className="contact-title">
              <span className="contact-icon">
                <FontAwesomeIcon icon={faLocationArrow} />
              </span>{' '}
              Address
            </h4>
            <h4 className="contact-text">
              500 – 1155 West Pender Street
              <br />
              Vancouver, BC, Canada V6E 2P4
            </h4>
          </div>

          <div className="contact-item">
            <h4 className="contact-title">
              <span className="contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>{' '}
              Email
            </h4>
            <h4 className="contact-text">info@cle.bc.ca</h4>
          </div>

          <div className="contact-item">
            <h4 className="contact-title">
              <span className="contact-icon">
                <FontAwesomeIcon icon={faPhone} />
              </span>{' '}
              Phone
            </h4>
            <h4 className="contact-text">604.669.3544</h4>
          </div>
        </article>

        <article className="contact-form">
          <h3>contact us</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                placeholder="name"
                className="form-control"
                name="name"
              />
              <input
                type="email"
                placeholder="email"
                className="form-control"
                name="email"
              />
              <textarea
                name="message"
                placeholder="message"
                className="form-control"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </div>
    </Wrapper>
  )
}

export default Contact

const Wrapper = styled.section`
  background: var(--clr-grey-10);

  .contact-form,
  .contact-info {
    margin: 1rem 0;
  }
  .contact-item {
    margin-bottom: 1.75rem;
  }
  .contact-title {
    color: var(--clr-primary);
    font-weight: 400;
  }
  .contact-text {
    text-transform: capitalize;
  }
  .contact-form {
    background: var(--clr-white);
    border-radius: var(--radius);
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
    max-width: 35rem;
  }
  .contact-form:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  .contact-form h3 {
    padding-top: 1.25rem;
    color: var(--clr-grey-5);
  }
  .form-group {
    padding: 1rem 1.5rem;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .form-control::placeholder {
    font-family: var(--ff-primary);
    color: var(--clr-grey-1);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }
  .submit-btn {
    display: block;
    width: 100%;
    padding: 1rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }
  @media screen and (min-width: 992px) {
    .contact-form,
    .contact-info {
      float: left;
      width: 50%;
    }
  }
  /*
=============== 
Footer
===============
*/
  .footer {
    background: #222;
    text-align: center;
  }
  .social-icon {
    color: var(--clr-white);
    font-size: 1.5rem;
    margin-right: 1rem;
    transition: var(--transition);
  }
  .social-icon:hover {
    color: var(--clr-primary);
  }
  .footer-text {
    margin-top: 1.25rem;
    text-transform: uppercase;
    color: var(--clr-white);
    font-weight: 400;
  }
  .company {
    color: var(--clr-primary);
  }
`
