import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./components/Home";
import RQpage from "./components/RQPage";
import Navbar from "./Navbar";
import SuperPage from "./components/SuperPage";
import { QueryClient, QueryClientProvider } from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";


const queryClient = new QueryClient()

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
    <QueryClientProvider client={queryClient}>
      <main>
        <Navbar />
        <section className="pl-10">
          <Outlet />
        </section>
      </main>
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  );
}
