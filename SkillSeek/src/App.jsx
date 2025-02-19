import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import About from "./public/about"; // Import the Service component
import PlumberList from "./public/available";
import HomePage from "./public/home";
import Login from "./public/login";
import Dashboard from "./public/servicedash";
import ServiceDetail from "./public/servicedetail"; // Import the ServiceDetail component
import ProfilePage from "./public/serviceprofile";
import Service from "./public/services";
import SingUp from "./public/signup";
import TokenLogin from "./public/token";
import UserProfile from "./public/userprofile";

function App() {
  const routes = [
    { path: "/", element: <SingUp /> },
    { path: "/home", element: <HomePage /> },
    { path: "/service", element: <Service /> },
    {path:"/about",element:<About/>} , // Add the Service route
    { path: "/service-detail", element: <ServiceDetail /> },  // Add the ServiceDetail route
    { path: "*", element: <>Unauthorized</> },
    {path:"/available",element:<PlumberList/>},
    {path:"/serviceprofile",element:<ProfilePage/>},
    {path:"/userprofile/:userId",element:<UserProfile/>},
    {path:"/login",element:<Login/>},
    {path:"/token",element:<TokenLogin/>},
    {path:"/dashboard",element:<Dashboard/>}

    
    
    // Add the PlumberList route
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
