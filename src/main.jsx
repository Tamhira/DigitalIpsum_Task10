import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './routes/App.jsx'
import Dashboard from "./components/Dashboard.jsx"
import Navigation from './components/Navigation.jsx';
import Market from './components/Market.jsx';
import Active from './components/Active.jsx';
import Portfolio from './components/Portfolio.jsx';
import Favourite from './components/Favourite.jsx';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/market",
    element: <Market/>,
  },
  {
    path: "/active",
    element: <Active/>,
  }, 
  {
    path: "/portfolio",
    element: <Portfolio/>,
  },
  {
    path: "/favourite",
    element: <Favourite/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
