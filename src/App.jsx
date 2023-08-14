import { Link } from "react-router-dom";
import MainNavbar from "./components/Navabar/MainNavbar";

function App() {
  return (
    <>
      <div className="bg-yellow">
        <div className="w-9/12 mx-auto">
          <div className="bg-yello p-4 border-b border-black">
            <div className="mx-auto flex justify-between items-center">
              <h2 className="font-bold text-4xl">Medium</h2>
              <div className="flex gap-5 items-center">
                {/* <Link>Sign in</Link> */}
                <Link className="bg-black text-white rounded-full px-5 py-3">
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="h-[50vh]">
            <div className="">
              <h2>Stay Curious</h2>
              <p>
                Discover stories, thinking, and expertise from writers on any
                topic.
              </p>
              <Link>Start reading</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
