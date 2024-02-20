import LoginPage from '../pages/LoginPage'
import LandingPage from '../pages/LandingPage'
import InventoryPage from '../pages/InventoryPage'
import RegisterPage from '../pages/RegisterPage'
import AdminPage from '../pages/AdminPage'
import StaffPage from '../pages/StaffPage'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage />
//   }, {
//     path: "/api/login",
//     element: <LoginPage />
//   }, {
//     path: "/api/register",
//     element: <RegisterPage />
//   }, {
//     path: "/admin",
//     element: <AdminPage />
//   }, {
//     path: "/staff",
//     element: <StaffPage />
//   }
// ])

function App() {
  //element={<LandingPage/>}

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' >
        <Route index element={<LandingPage/>}></Route>
        <Route path='/api/login' element={<LoginPage/>} ></Route>
        <Route path='/api/register' element={<RegisterPage/>}></Route>
        <Route path='/admin/:id/:username' element={<AdminPage />}>
        </Route>

        <Route path='/admin/:id/:username/api/inventory' element={<InventoryPage/>}></Route>
        <Route path='/staff' element={<StaffPage/>}></Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
