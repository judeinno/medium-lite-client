import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profile from "../pages/profile";
import Layout from "../components/Layout/Layout";
import Post from "../pages/Posts/index";
import AuthGuard from "../components/Auth/AuthGuard";

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
    element: (
      <Layout>
        <Post />
      </Layout>
    ),
  },
]);

export default router;
