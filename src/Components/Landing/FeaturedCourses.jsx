import Wrapper from './Wrappers/FeaturedCourses'
import SectionTitle from '../Common/SectionTitle'
import { courses } from '../../data'
import FeaturedCourseCard from './FeaturedCourseCard'
const FeaturedCourses = () => {
  return (
    <Wrapper>
      <div className="section-center clearfix">
        <article className="courses-info">
          <SectionTitle sub="check out" main="upcoming courses" />

          <p className="courses-text">
            CLEBC courses provide in-depth coverage from a wide range of
            practice areas to help lawyers and legal professionals earn CPD
            credits. Attend courses in person, via webinar, or rebroadcast.
          </p>

          <a href="courses.html" className="btn">
            courses
          </a>
        </article>

        <article className="courses-inventory clearfix">
          {courses.map((course) => {
            const { image, name, date } = course
            return (
              <FeaturedCourseCard
                key={name}
                name={name}
                date={date}
                image={image}
              />
            )
          })}
        </article>
      </div>
    </Wrapper>
  )
}

export default FeaturedCourses
