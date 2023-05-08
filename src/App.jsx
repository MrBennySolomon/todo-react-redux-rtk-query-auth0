import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Create from "./Pages/Create";
import Delete from "./Pages/Delete";
import Read from "./Pages/Read";
import Update from "./Pages/Update";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        { path: "/create", element: <Create /> },
        { path: "/read", element: <Read /> },
        { path: "/update", element: <Update /> },
        { path: "/delete", element: <Delete /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
