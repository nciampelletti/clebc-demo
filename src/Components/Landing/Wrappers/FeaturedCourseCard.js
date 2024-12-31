import styled from 'styled-components'

const Wrapper = styled.section`
  margin-bottom: 2rem;

  @media screen and (min-width: 768px) {
    float: left;
    width: 50%;
    padding-right: 2rem;
  }
  @media screen and (min-width: 992px) {
    width: 33.3%;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
    padding: 0 1rem;
  }

  .course-img {
    border-radius: var(--radius);
    height: 15rem;
    object-fit: cover;
    transition: var(--transition);
    overflow: hidden;
  }

  .course-picture-container {
    border-radius: var(--radius);
    max-width: 30rem;
    /* max-height: 15rem; */
    overflow: hidden;
    margin-bottom: 1.5rem;
    box-shadow: var(--shadow-3);
  }

  .course-picture-container:hover .course-img {
    opacity: 0.5;
    transform: scale(1.2);
  }

  .course-date {
    color: var(--clr-primary);
  }
`

export default Wrapper
