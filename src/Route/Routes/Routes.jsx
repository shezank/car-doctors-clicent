import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import BookingServices from "../../Pages/BookingServices/BookingServices";
import PrivateRoute from "../../Shard/PrivateRoute/PrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/',
            element: <Home></Home>
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
          path: '/bookings',
          element: <PrivateRoute><BookingServices></BookingServices></PrivateRoute>
        },
        {
          path: '/services/:id',
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:4000/services/${params.id}`)
        }
      ]
    },
  ]);

export default router;