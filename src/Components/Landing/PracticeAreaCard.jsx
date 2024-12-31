import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PracticeAreaCard = ({ image, name, icon, description }) => {
  return (
    <Wrapper>
      <div className="practice-area-img-container">
        <img src={image} className="practice-area-img" alt={name} />

        <span className="practice-area-icon">
          <FontAwesomeIcon icon={icon} />
        </span>
      </div>

      <div className="practice-area-info">
        <h4>{name}</h4>
        <p>{description}</p>
        <a href="# " className="btn practice-area-btn">
          read more
        </a>
      </div>
    </Wrapper>
  )
}

export default PracticeAreaCard

const Wrapper = styled.section`
  margin: 2rem 0;
  background: var(--clr-grey-10);
  border-radius: var(--radius);
  box-shadow: var(--shadow-5);
  transition: var(--transition);

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .practice-area-img-container {
    position: relative;
  }

  .practice-area-icon {
    position: absolute;
    left: 50%;
    bottom: 0;
    font-size: 2rem;
    color: var(--clr-primary);
    background: var(--clr-primary-light);
    padding: 0.25rem 0.6rem;
    border-radius: 50%;
    transform: translate(-50%, 50%);
    border: 0.375rem solid var(--clr-grey-10);
  }

  .practice-area-img {
    height: 17rem;
    object-fit: cover;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }

  @media screen and (min-width: 768px) {
    float: left;
    width: 45%;
    margin-right: 5%;
  }
  @media screen and (min-width: 992px) {
    width: 30%;
    margin-right: 3.333%;
  }

  .practice-area-info {
    text-align: center;
    padding: 3rem 1rem 2.5rem 1rem;
  }
  .practice-area-info p {
    max-width: 20rem;
    color: var(--clr-grey-5);
    margin: 0 auto;
  }

  .practice-area-btn {
    font-size: 0.75rem;
    text-transform: capitalize;
    padding: 0.375rem 0.5rem;
    border-radius: var(--radius);
    font-weight: 400;
    margin-top: 1.25rem;
  }
`
