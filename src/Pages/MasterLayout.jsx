import { Outlet, useNavigation } from 'react-router-dom'
import { Navbar, Loading, Sidebar, Submenu } from '../Components/Common'

const MasterLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'

  return (
    <main>
      <Navbar />
      <Sidebar />
      <Submenu />
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
