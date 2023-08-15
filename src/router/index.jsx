import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profile from "../pages/profile";
import Layout from "../components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
    element: (
      <Layout>
        <Profile />
      </Layout>
    ),
  },
  {
    path: "/posts",
    element: <App />,
  },
]);

export default router;
