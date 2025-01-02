import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import HomePage from "./public/home";
import SingUp from "./public/signup";

function App() {
  const routes = [
    { path: "/", element: <SingUp /> },
    { path: "/home", element: <HomePage /> },
    { path: "*", element: <>Unauthorized</> },
  ];

  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App;
