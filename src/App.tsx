import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
import ProblemDetails from "./pages/ProblemDetails";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/problem/:id",
        element: <ProblemDetails />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
