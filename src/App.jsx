import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import Read from './pages/Read';
import Delete from './pages/Delete';
import Update from './pages/Update';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "/create",
          element: <Create />,
        },
        {
          path: "/read",
          element: <Read />,
        },
        {
          path: "/update",
          element: <Update />,
        },
        {
          path: "/delete",
          element: <Delete />,
        },
      ]
    },
  ]);
  return (
    <RouterProvider router={router}>
      <Navbar />
      <Outlet />
    </RouterProvider>
  );
}

export default App;
