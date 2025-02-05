import React, { useRef } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../Context'
import subLinks from '../../data'

const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext()
  const currentPage = subLinks.find((item) => item.pageId === pageId)
  const submenuContainer = useRef(null)

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current
    const { left, right, bottom } = submenu.getBoundingClientRect()
    const { clientX, clientY } = event

    if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null)
    }
  }

  return (
    <SubmenuContainer
      className={currentPage ? 'show-submenu' : ''}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
      linksLength={currentPage?.links?.length}
    >
      <h3 className="title-sub">{currentPage?.page}</h3>

      <div className="submenu-links">
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link
          return (
            <LinkItem key={id} href={url}>
              {icon}
              {label}
            </LinkItem>
          )
        })}
      </div>
    </SubmenuContainer>
  )
}

export default Submenu

const SubmenuContainer = styled.div`
  display: none;

  @media screen and (min-width: 992px) {
    display: block;
    position: fixed;
    top: 6rem;
    left: 50%;
    width: ${({ linksLength }) => (linksLength > 3 ? '100%' : '50%')};
    max-width: var(--max-width);
    background: var(--clr-white);
    padding: 2rem;
    transform: rotateX(-90deg) translateX(-50%);
    transform-origin: top;
    perspective: 1000px;
    border-radius: var(--radius);
    visibility: hidden;
    opacity: 0;
    transition: transform 0.3s ease-in-out, opacity 0.2s ease-in-out;
    z-index: -1;

    &.show-submenu {
      visibility: visible;
      opacity: 1;
      transform: rotateX(0deg) translateX(-50%);
      z-index: 10;
    }

    h5 {
      margin-bottom: 1rem;
      color: var(--primary-700);
    }

    .submenu-links {
      margin-top: 1.5rem;
      display: grid;
      row-gap: 0.5rem;
      grid-template-columns: ${({ linksLength }) =>
        linksLength > 3 ? '1fr 1fr' : '1fr'};
    }

    .submenu-links a {
      display: block;
      color: var(--clr-grey-5);
      text-transform: capitalize;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.3s ease-in-out;
      text-transform: capitalize;
      border-radius: var(--radius);
    }

    .submenu-links svg {
      color: var(--clr-grey-5);
    }
  }
`
const LinkItem = styled.a`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  /* color: var(--clr-grey-5); */
  text-decoration: none;
  padding: 0.5rem;
  border-radius: var(--radius);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--clr-primary-10);
    color: var(--clr-primary-5);
  }
`
