import { Navigate, createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Status } from "./pages/Status";
import App from "./App";
import { PageNotFound } from "./pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: '/masterclass-react',
    element: <App />,
    children: [
      {
        path: '',
        element: <Timeline />
      },
      {
        path: 'status',
        element: <Status />
      },
      {
        path: '404',
        element: <PageNotFound />
      },
      {
        path: '*',
        element: <Navigate replace to='/masterclass-react/404' />
      }
    ]
  },
])