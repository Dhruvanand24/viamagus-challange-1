import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
]);

export default router;
