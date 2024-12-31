import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  AboutPage,
  LandingPage,
  MasterLayout,
  CustomersPage,
  SingleErrorPage,
  CustomerDetails,
  CustomerEditPage,
} from './Pages'
import ErrorPage from './Pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MasterLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        errorElement: <SingleErrorPage />,
      },
      {
        path: 'customer/:id',
        errorElement: <SingleErrorPage />,
        element: <CustomerDetails />,
      },
      {
        path: 'customer/:id/edit',
        errorElement: <SingleErrorPage />,
        element: <CustomerEditPage />, // Your EditCustomer component
      },
      {
        path: 'customer/',
        element: <CustomersPage />,
        errorElement: <SingleErrorPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
