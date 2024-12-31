import styled from 'styled-components'

const Wrapper = styled.section`
  background: var(--clr-grey-10);

  article {
    padding: 2rem 0;
  }

  .courses-text {
    color: var(--clr-grey-5);
    max-width: 20rem;
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: 1200px) {
    .courses-info {
      padding-top: 4rem;
      float: left;
      width: 30%;
    }
    .courses-inventory {
      float: left;
      width: 70%;
    }
  }
`

export default Wrapper
