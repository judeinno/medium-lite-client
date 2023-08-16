import { IoTrendingUpSharp } from "react-icons/io5";
import Trending from "./components/Post/Trending";
import BlogPost from "./components/Post/BlogPost";
import CategoryTag from "./components/Tags/CategoryTag";
import LoginModal from "./components/Auth/LoginModal";
import { useStateValue } from "./store";
import * as actionTypes from "./store/actionTypes";
import SignupModal from "./components/Auth/SignupModal";
import { Link, useNavigate } from "react-router-dom";
import ProfileButton from "./components/Navabar/ProfileButton";
import hero from "../src/assets/hero.svg";
import { Typewriter } from "react-simple-typewriter";
import { words } from "../src/lib/constants";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { getAllPost } from "../src/services/blog";
import FakePost from "./components/Post/FakePost";
import WritePostModal from "./components/Post/WritePostModal";

function App() {
  const [state, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const res = await getAllPost();
      setPosts(res.data.blogs);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="bg-yello p-4 bg-yellow">
        <div className="w-8/12 mx-auto flex justify-between items-center">
          <h2 className="font-bold text-4xl font-sora">StuBlog</h2>
          <div className="flex items-center gap-5">
            <div className="text font-semibold">
              <Link to="/posts">All Posts</Link>
            </div>
            <div className="relative">
              {state.user ? (
                <ProfileButton />
              ) : (
                <button
                  className="bg-black text-white rounded-full px-5 py-2 text-sm"
                  onClick={() =>
                    dispatch({
                      type: actionTypes.SET_OPEN_LOGIN_MODAL,
                      payload: true,
                    })
                  }
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[60vh] bg-yellow flex flex-col justify-center border-b border-t border-black">
        <div className="flex w-8/12 mx-auto justify-between items-center">
          <div className="space-y-8">
            <h2 className="text-6xl 2xl:text-8xl font-serif">
              <Typewriter words={words} loop="1" typeSpeed={30} />
            </h2>
            <p className="text-2xl max-w-lg leading-6 font-garamond">
              Discover stories, thinking, and expertise from writers on any
              topic.
            </p>
            <p>
              <button
                className="bg-black text-white rounded-full px-12 py-3 hover:scale-110 duration-200"
                onClick={() => {
                  navigate("/posts");
                }}
              >
                Start reading
              </button>
            </p>
          </div>
          <div>
            <img src={hero} className="w-64 h-64 s2xl:w-96 2xl:h-96" />
          </div>
        </div>
      </div>

      <section className="border-b mt-10 ">
        <div className="w-8/12 mx-auto">
          <div className="flex items-center gap-3">
            <IoTrendingUpSharp className="border rounded-full text-xl border-black" />
            <p className="text-lg">Trending today</p>
          </div>
          <div className="trending mt-5 bg-grey grid grid-cols-3 gap-10 pb-10">
            <Trending />
            <Trending />
            <Trending />
            <Trending />
            <Trending />
            <Trending />
          </div>
        </div>
      </section>

      <section className="w-8/12 mx-auto mb-10 mt-10 pb-5">
        <div className="mx-auto flex gap-20">
          <div className="space-y-12 flex-[0.6]">
            {posts.map((post) => {
              return <BlogPost post={post} key={post._id} />;
            })}
            {/* {Array(10)
              .fill(0)
              .map((fake, idx) => {
                return <FakePost key={idx} />;
              })} */}
          </div>
          <div className="flex-[0.4]">
            <h3 className="font-bold">Discover more of what matters to you</h3>
            <div className="mt-5 flex gap-2 flex-wrap">
              <CategoryTag name="Computer science" />
              <CategoryTag name="Data Science" />
              <CategoryTag name="Javascript" />
              <CategoryTag name="Python" />
              <CategoryTag name="Mathematics" />
              <CategoryTag name="Node" />
              <CategoryTag name="Typescript" />
            </div>
          </div>
        </div>
      </section>
      <LoginModal />
      <SignupModal />
      <WritePostModal />
      <Footer />
    </>
  );
}

export default App;
