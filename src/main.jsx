import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Shop from './Shop/Shop';
import Orders from './components/Orders';
import Inventory from './components/Inventory';
import Login from './components/Login';
import cartProductsLoader from './loader/cartProductsLoader';
import Checkout from './components/Checkout';
import Singup from './components/Singup';
import AuthProvider from './provider/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/order',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: '/checkout',
        element: <Checkout></Checkout>
      },
      {
        path: '/inventory',
        element: <Inventory></Inventory>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/singup',
        element: <Singup></Singup>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
