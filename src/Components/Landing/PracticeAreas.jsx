import styled from 'styled-components'
import SectionTitle from '../Common/SectionTitle'
import { practice } from '../../data'
import PracticeAreaCard from './PracticeAreaCard'
const PracticeAreas = () => {
  return (
    <Wrapper>
      <div className="centered-title ">
        <SectionTitle sub="explore our" main="Practice Areas" />
      </div>
      <div className="section-center clearfix">
        {practice.map((item) => {
          const { image, name, icon, description } = item

          return (
            <PracticeAreaCard
              key={name}
              name={name}
              icon={icon}
              image={image}
              description={description}
            />
          )
        })}
      </div>
    </Wrapper>
  )
}

export default PracticeAreas

const Wrapper = styled.section``
