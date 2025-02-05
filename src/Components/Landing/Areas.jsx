import React from 'react'
import Area from './Area'
import { areas } from '../../data'
import styled from 'styled-components'

const Areas = () => {
  return (
    <Wrapper className=" clearfix">
      {areas.map((area, index) => {
        const { icon, title, text } = area
        return <Area key={index} icon={icon} title={title} text={text} />
      })}
    </Wrapper>
  )
}

export default Areas

const Wrapper = styled.section`
  background: var(--clr-grey-10);

  .area {
    background: var(--clr-grey-10);
    padding: 2.5rem 0;
    text-align: center;
    transition: var(--transition);
    min-height: calc(30vh - 0.6rem);
  }

  .area-icon {
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
    transition: var(--transition);
    display: inline-block;
    color: var(--clr-primary);
  }
  .area-text {
    color: var(--clr-grey-5);
    max-width: 17rem;
    margin: 0 auto;
  }
  .area:hover {
    background: var(--clr-white);
    box-shadow: 0 2px var(--clr-primary);
  }
  /* .area:hover .area-icon {
    transform: translateY(-5px);
  } */

  @media screen and (min-width: 576px) {
    .area {
      float: left;
      width: 50%;
    }
  }
  @media screen and (min-width: 1200px) {
    .area {
      width: 25%;
    }
  }
`
