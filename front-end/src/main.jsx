import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {About,Contact,Webinar,UGNEET,PGNEET} from './Pages'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "Contact",
    element: <Contact/>,
  },
  {
    path: "Webinar",
    element: <Webinar/>,
  },
  {
    path: "UGNEET",
    element: <UGNEET/>,
  },
  {
    path: "PGNEET",
    element: <PGNEET/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
