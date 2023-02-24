import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "../pages/Timeline";
import { Status } from "../pages/Status";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Timeline />
      },
      {
        path: 'status',
        element: <Status />
      },
    ]
  },
])