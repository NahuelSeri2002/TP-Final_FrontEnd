import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/styles.css'
import Layout from './Pages/Layout'
import Index from './Pages/Index'
import Puntuacion from './Pages/Puntuacion'
import Registrarse from './Pages/Registrarse'
import IniciarSesion from './Pages/IniciarSesion'
import Galeria from './Pages/Galeria'
import { AuthProvider } from './context/AuthContext';

const mapasRutas = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {index: true, element: <Index/>},
      {path: "puntuacion", element: <Puntuacion/>},
      {path: "registrarse", element: <Registrarse/>},
      {path: "iniciar-sesion", element: <IniciarSesion/>},
      {path: "galeria", element: <Galeria/>}
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={mapasRutas}/>
    </AuthProvider>
  </StrictMode>,
)
