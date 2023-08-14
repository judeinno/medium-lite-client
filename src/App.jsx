import { IoTrendingUpSharp } from "react-icons/io5";
import Trending from "./components/Post/Trending";
import BlogPost from "./components/Post/BlogPost";
import CategoryTag from "./components/Tags/CategoryTag";
import LoginModal from "./components/Auth/LoginModal";
import { useStateValue } from "./store";
import * as actionTypes from "./store/actionTypes";

function App() {
  const [state, dispatch] = useStateValue();
  return (
    <>
      <div className="bg-yello p-4 bg-yellow">
        <div className="w-8/12 mx-auto flex justify-between items-center">
          <h2 className="font-bold text-4xl">Medium</h2>
          <div className="flex gap-5 items-center">
            {/* <Link>Sign in</Link> */}
            <button
              className="bg-black text-white rounded-full px-5 py-2 text-sm hover:scale-125 duration-200"
              onClick={() =>
                dispatch({
                  type: actionTypes.SET_OPEN_LOGIN_MODAL,
                  payload: true,
                })
              }
            >
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="h-[50vh] bg-yellow flex flex-col justify-center border-b border-t border-black">
        <div className="w-8/12 mx-auto space-y-10">
          <h2 className="text-8xl">Stay Curious.</h2>
          <p className="text-2xl max-w-lg leading-6">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <p>
            <button className="bg-black text-white rounded-full px-12 py-3 hover:scale-110 duration-200">
              Start reading
            </button>
          </p>
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

      <section className="w-8/12 mx-auto border-b mt-10 pb-5">
        <div className="mx-auto flex gap-20">
          <div className="space-y-12 flex-[0.6]">
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
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
    </>
  );
}

export default App;
