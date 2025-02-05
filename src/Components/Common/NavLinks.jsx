import { useGlobalContext } from '../../Context'
import subLinks from '../../data'
import styled from 'styled-components'
const NavLinks = () => {
  const { setPageId } = useGlobalContext()
  return (
    <Wrapper>
      {subLinks.map((item) => {
        const { pageId, page } = item
        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={() => setPageId(pageId)}
          >
            {page}
          </button>
        )
      })}
    </Wrapper>
  )
}
export default NavLinks

const Wrapper = styled.section`
  display: none;

  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: center;
    align-self: stretch;

    .nav-link {
      padding: 0 1rem;
      color: var(--white);
      background: transparent;
      border-color: transparent;
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: var(--spacing);
      text-transform: capitalize;
      line-height: 1.25;
      //font-family: var(--ff-secondary);
      text-transform: capitalize;

      cursor: pointer;
    }
  }
`
