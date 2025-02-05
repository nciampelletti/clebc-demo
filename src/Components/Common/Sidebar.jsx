import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from '../../Context'
import sublinks from '../../data'
import styled from 'styled-components'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()

  return (
    <SidebarWrapper isSidebarOpen={isSidebarOpen}>
      <SidebarContainer>
        <CloseButton onClick={closeSidebar}>
          <FaTimes />
        </CloseButton>
        <SidebarLinks>
          {sublinks.map((item) => {
            const { links, page, pageId } = item
            return (
              <Article key={pageId}>
                <h3 className="title-sub">{page}</h3>
                <SubLinks>
                  {links.map((link) => {
                    const { url, icon, label, id } = link
                    return (
                      <LinkItem key={id} href={url}>
                        {icon}
                        {label}
                      </LinkItem>
                    )
                  })}
                </SubLinks>
              </Article>
            )
          })}
        </SidebarLinks>
      </SidebarContainer>
    </SidebarWrapper>
  )
}

export default Sidebar

// Styled components
const SidebarWrapper = styled.aside`
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: grid;
  place-items: center;
  transition: all 0.3s ease-in-out;
  transform: ${({ isSidebarOpen }) =>
    isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)'};
  overflow-y: auto;

  @media screen and (min-width: 800px) {
    display: none;
  }
`

const SidebarContainer = styled.div`
  width: 95vw;
  max-width: var(--fixed-width);
  background: white;
  border-radius: var(--radius);
  padding: 4rem 2rem;
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: var(--clr-grey-5);
`

const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Article = styled.article`
  background: var(--clr-grey-10);
  padding: 1rem;
  border-radius: var(--radius);
`

const SubLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const LinkItem = styled.a`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--clr-grey-5);
  text-decoration: none;
  padding: 0.5rem;
  border-radius: var(--radius);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--clr-primary-10);
    color: var(--clr-primary-5);
  }
`
