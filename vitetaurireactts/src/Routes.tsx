import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./path";

function Routes() {
  const router = createBrowserRouter([
    { id: "root", path: "/", element: <Index /> },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
