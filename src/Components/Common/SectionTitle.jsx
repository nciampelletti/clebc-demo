import Wrapper from './Wrappers/SectionTitle'

const SectionTitle = ({ sub, main }) => {
  return (
    <Wrapper>
      <h3 className="title-sub">{sub}</h3>
      {main !== null && <h3 className="title-main">{main}</h3>}
    </Wrapper>
  )
}

export default SectionTitle
