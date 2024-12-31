import {
  Header,
  ContentDivider,
  Areas,
  About,
  FeaturedCourses,
  PracticeAreas,
  Contact,
} from '../Components/Landing'

const LandingPage = () => {
  return (
    <main>
      {/* <Navbar /> */}
      <Header />
      <ContentDivider />
      <Areas />
      <About />
      <FeaturedCourses />
      <PracticeAreas />
      <Contact />
    </main>
  )
}

export default LandingPage
