import React from 'react'
import styled from 'styled-components'

const ContentDivider = () => {
  return <Wrapper></Wrapper>
}

export default ContentDivider

const Wrapper = styled.section`
  height: 0.5rem;
  background: linear-gradient(
    to left,
    var(--clr-primary),
    #e9b949,
    var(--clr-primary)
  );
`
