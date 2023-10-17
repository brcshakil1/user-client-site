import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import Users from "../components/Users";
import UpdateUser from "../components/UpdateUser";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("http://localhost:4000/users"),
      },
      {
        path: "/updateUser/:id",
        element: <UpdateUser />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/users/${params.id}`),
      },
    ],
  },
]);

export default Router;
