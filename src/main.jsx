import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Slider from './components/Slider/Slider.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import Private from './components/Private/Private.jsx'
import Equipments from './components/Equipments/Equipments.jsx'
import EquipmentD from './components/EquipmentD/EquipmentD.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import AuthProvider from './components/AuthProvider/AuthProvider.jsx'
import AddEqp from './components/AddEqp/AddEqp.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        index: true,
        element: <Slider />,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/equipments',
        element: <Private><Equipments></Equipments></Private>
      },
      {
        path: '/equipments/:id',
        element: <Private> <EquipmentD></EquipmentD></Private>
      },
      {
        path : 'addEqp',
        element : <Private> <AddEqp></AddEqp></Private>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router}> </RouterProvider>
      </AuthProvider>
    </StrictMode>,
  </StrictMode>,
)
