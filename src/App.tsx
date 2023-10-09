import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Battle } from "@/features/Battle";
import { ErrorPage } from "@/components/Error/page";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Battle />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
