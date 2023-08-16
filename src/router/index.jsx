import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profile from "../pages/profile";
import Layout from "../components/Layout/Layout";
import Post from "../pages/Posts/index";
import AuthGuard from "../components/Auth/AuthGuard";
import PostDetail from "../pages/Posts/postDetail";

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
  {
    path: "posts/:postId",
    element: (
      <Layout>
        <PostDetail />
      </Layout>
    ),
  },
]);

export default router;
