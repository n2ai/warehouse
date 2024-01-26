import LoginPage from '../pages/LoginPage'
import LandingPage from '../pages/LandingPage'
import RegisterPage from '../pages/RegisterPage'
import AdminPage from '../pages/AdminPage'
import StaffPage from '../pages/StaffPage'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:"/",
    element: <LandingPage/>
  },{
    path:"/api/login",
    element:<LoginPage/>
  },{
    path:"/api/register",
    element:<RegisterPage/>
  },{
    path:"/admin",
    element:<AdminPage/>
  },{
    path:"/staff",
    element:<StaffPage/>
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
