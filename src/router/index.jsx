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
    element: (
      <AuthGuard>
        <App />
      </AuthGuard>
    ),
  },
  {
    path: "/profile",
    element: (
      <AuthGuard>
        <Layout>
          <Profile />
        </Layout>
      </AuthGuard>
    ),
  },
  {
    path: "/posts",
    element: (
      <AuthGuard>
        <Layout>
          <Post />
        </Layout>
      </AuthGuard>
    ),
  },
  {
    path: "posts/:postId",
    element: (
      <AuthGuard>
        <Layout>
          <PostDetail />
        </Layout>
      </AuthGuard>
    ),
  },
]);

export default router;
