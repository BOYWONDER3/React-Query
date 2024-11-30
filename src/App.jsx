import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./components/Home";
import RQpage from "./components/RQPage";
import Navbar from "./Navbar";
import SuperPage from "./components/SuperPage";

export const App = createBrowserRouter([
  {
    element: <NavLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/rq-page", element: <RQpage /> },
      { path: "/super-page", element: <SuperPage /> },
    ],
  },
]);

function NavLayout() {
  return (
    <main>
      <Navbar />
      <section className="pl-10">
      <Outlet />
      </section>
      
    </main>
  )
}