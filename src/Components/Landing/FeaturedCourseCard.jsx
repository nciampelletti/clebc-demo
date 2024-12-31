import Wrapper from './Wrappers/FeaturedCourseCard'

const FeaturedCourseCard = ({ image, name, date }) => {
  return (
    <Wrapper>
      <div className="course-picture-container">
        <img src={image} alt={name} className="course-img" />
      </div>
      <h4 className="course-title">{name}</h4>
      <h4 className="course-date">{date}</h4>
    </Wrapper>
  )
}

export default FeaturedCourseCard
