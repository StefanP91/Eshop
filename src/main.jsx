import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { CartProvider } from './utilities/CartContext'

// Main Pages
import Root from './Root'
import ErrorPage from './pages/errorPage'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'
import Cart from './pages/Cart'


// Sub Pages
import Automotive from './pages/subpages/Automotive'
import Electronics from './pages/subpages/Electronics'
import HealthAndHousehold from './pages/subpages/HealthAndHousehold'
import HomeAndLifestyle from './pages/subpages/HomeAndLifestyle'
import MansFashion from './pages/subpages/MansFashion'
import PetsSupplies from './pages/subpages/PetsSupplies'
import SpotsAndOutdoor from './pages/subpages/SpotsAndOutdoor'
import ToysAndGames from './pages/subpages/ToysAndGames'
import WomansFashion from './pages/subpages/WomansFashion'
import ProductPage from './pages/subpages/ProductPage'
import AllProducts from './pages/subpages/AllProducts'
import Checkout from './pages/subpages/Checkout'



import './index.css'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },

      {
        path: '/logout',
        element: <Logout />,
      },

      {
        path: '/automotive',
        element: <Automotive />,
      },

      {
        path: '/electronics',
        element: <Electronics />,
      },

      {
        path: '/health&household',
        element: <HealthAndHousehold />,
      },

      {
        path: '/home&lifestyle',
        element: <HomeAndLifestyle />,
      },

      {
        path: '/mansFashion',
        element: <MansFashion />,
      },

      {
        path: '/petsSupplies',
        element: <PetsSupplies />,
      },

      {
        path: '/sports&outdoor',
        element: <SpotsAndOutdoor />,
      },

      {
        path: '/toys&games',
        element: <ToysAndGames />,
      },

      {
        path: '/womansFashion',
        element: <WomansFashion />,
      },
      {
        path: '/productPage/:product_id',
        element: <ProductPage/>,
      },
      {
        path: '/allProducts',
        element: <AllProducts />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },


    ]
  },
])

createRoot(document.getElementById('root')).render(

    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>

)
