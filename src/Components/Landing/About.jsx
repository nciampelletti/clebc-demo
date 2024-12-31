import Img from '../../images/main-bcg1.jpeg'
import styled from 'styled-components'
import SectionTitle from '../Common/SectionTitle'
const About = () => {
  return (
    <Wrapper>
      <div className="section-center clearfix">
        <article className="about-img">
          <div className="about-picture-container">
            <img src={Img} alt="CLEBC" className="about-picture" />
          </div>
        </article>
        <article className="about-info">
          <SectionTitle sub="about" main="CLEBC" />
          <p className="about-text">
            CLEBC delivers the most reliable and practical BC-specific legal
            education and information direct from leading members of the legal
            community. The Continuing Legal Education Society of BC is governed
            by a Board of Directors appointed by the University of British
            Columbia, the University of Victoria, the Law Society of BC, and the
            BC Branch of the Canadian Bar Association. Our directors represent
            all facets of the profession and all regions of the province. We
            acknowledge their significant contribution.
          </p>
          <a href="##" className="btn">
            learn more
          </a>
        </article>
      </div>
    </Wrapper>
  )
}

export default About

const Wrapper = styled.section`
  .about-img,
  .about-info {
    padding: 2rem 0;
  }
  .about-picture-container {
    background: var(--clr-primary);
    outline: 0.125rem solid var(--clr-primary);
    outline-offset: 0.25rem;
    max-width: 30rem;
    /* extra stuff */
    overflow: hidden;
  }
  .about-picture {
    transition: var(--transition);
  }
  .about-picture-container:hover .about-picture {
    opacity: 0.5;
    transform: scale(1.2);
  }
  .about-text {
    max-width: 35rem;
    color: var(--clr-grey-5);
    margin-bottom: 1.5rem;
  }
  @media screen and (min-width: 992px) {
    .about-img,
    .about-info {
      float: left;
      width: 50%;
    }
    .about-info {
      padding-left: 2rem;
    }
  }
`
