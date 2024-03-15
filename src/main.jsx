import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,   RouterProvider, } from "react-router-dom";
import './index.css'
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import Footer from './components/Footer/Footer';
import ErrorPage from "./pages/Error/Error";
import Banner from './components/Banner/Banner';



const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Home />,
  },

  
  {
    path: "*",
    element: <ErrorPage />,
  },

]);



/* ajouter navbar avant router 
et footer apres le main*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    

    <RouterProvider router={router} />

  </React.StrictMode>,
)
