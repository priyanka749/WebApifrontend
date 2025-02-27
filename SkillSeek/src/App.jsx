// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import './index.css';
// import About from "./public/about"; // Import the Service component
// import AddService from "./public/addservice";
// import AllProviderRequests from "./public/allrequest";
// import PlumberList from "./public/available";
// import HomePage from "./public/home";
// import Login from "./public/login";
// import Request from "./public/request";
// import Dashboard from "./public/servicedash";
// import ServiceDetail from "./public/servicedetail"; // Import the ServiceDetail component
// import ProfilePage from "./public/serviceprofile";
// import Service from "./public/services";
// import SingUp from "./public/signup";
// import TokenLogin from "./public/token";
// import UserProfile from "./public/userprofile";

// function App() {
//   const routes = [
//     // { path: "/", element: <SingUp /> },
//     // { path: "/home", element: <HomePage /> },
    
//     { path: "/service", element: <Service /> },
//     {path:"/about",element:<About/>} , // Add the Service route
//     { path: "/service-detail", element: <ServiceDetail /> },  // Add the ServiceDetail route
//     { path: "*", element: <>Unauthorized</> },
//     {path:"/available",element:<PlumberList/>},
//     {path:"/serviceprofile",element:<ProfilePage/>},
//     {path:"/userprofile/:userId",element:<UserProfile/>},
//     {path:"/login",element:<Login/>},
//     {path:"/token",element:<TokenLogin/>},
//     {path:"/servicedash",element:<Dashboard/>},
//     {path:"/addservice",element:<AddService/>},
//     {path:"/request",element:<Request/>},
//     {path:"/allrequests",element:<AllProviderRequests/>}

    
    
//     // Add the PlumberList route
//   ];

//   return <RouterProvider router={createBrowserRouter(routes)} />;
// }

// export default App;
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import './index.css';
import About from "./public/about";

import NotificationFetcher from "./components/notification";
import Dashboard from "./private/servicedash";
import AddService from "./public/addservice";
import AllProviderRequests from "./public/allrequest";
import PlumberList from "./public/available";
import HomePage from "./public/home";
import Login from "./public/login";
import Request from "./public/request";
import ServiceDetail from "./public/servicedetail";
import ProfilePage from "./public/serviceprofile";
import Service from "./public/services";
import Signup from "./public/signup"; // Fixed incorrect spelling
import TokenLogin from "./public/token";
import UserProfile from "./public/userprofile";

const routes = createBrowserRouter([
    { path: "/", element: <Navigate replace to="/home" /> },  // Redirect to /home
    { path: "/home", element: <HomePage /> },
    { path: "/signup", element: <Signup /> },  // Fixed signup route
    { path: "/service", element: <Service /> },
    { path: "/about", element: <About /> },  
    { path: "/service-detail", element: <ServiceDetail /> },  
    { path: "/available", element: <PlumberList /> },
    { path: "/serviceprofile", element: <ProfilePage /> },
    { path: "/userprofile/:userId", element: <UserProfile /> },
    { path: "/login", element: <Login /> },
    { path: "/token", element: <TokenLogin /> },
    { path: "/servicedash", element: <Dashboard /> },
    { path: "/addservice", element: <AddService /> },
    { path: "/request", element: <Request /> },
    { path: "/notification", element: <NotificationFetcher /> },
    { path: "/allrequests", element: <AllProviderRequests /> },
    { path: "*", element: <>Unauthorized</> },
   // Catch-all for undefined routes
]);

function App() {
    return <RouterProvider router={routes} />;
}

export default App;
