import React from 'react'
import ReactDOM from 'react-dom/client'
/* import { createBrowserRouter,   RouterProvider } from "react-router-dom";
 */
import './index.css'
import App from './App'
/* import Home from "./pages/Home/Home";

import ErrorPage from "./pages/Error/Error"; */
//importer toutes les pages


/* const router = createBrowserRouter([
 
  {
    path: "/",
    element: <Home />,
  },

  
  {
    path: "*",
    element: <ErrorPage />,
  },

]);
 */


/* ajouter navbar avant router 
et footer apres le main*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

