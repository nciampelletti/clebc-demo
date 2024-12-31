import { Outlet, useNavigation } from 'react-router-dom'
import { Navbar, Loading } from '../Components/Common'

const MasterLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  return (
    <main>
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section>
          <Outlet />
        </section>
      )}
    </main>
  )
}

export default MasterLayout
