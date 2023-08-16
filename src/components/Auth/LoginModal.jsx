import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useStateValue } from "../../store";
import * as actionTypes from "../../store/actionTypes";
import { login } from "../../services/auth";
import { toast } from "react-toastify";
import { BiLoaderAlt } from "react-icons/bi";
import { redirect } from "react-router-dom";

function LoginModal() {
  const [state, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const res = await login({ email, password });
      localStorage.setItem("token", res.data.accessToken);
      dispatch({
        type: actionTypes.SET_USER_DATA,
        payload: { ...res.data.user },
      });
      redirect("/");
      dispatch({
        type: actionTypes.SET_OPEN_LOGIN_MODAL,
        payload: false,
      });
    } catch (error) {
      console.log(error);
      toast.error("Invalid credentials!");
    } finally {
      setLoading(false);
    }
  };

  const openSignUpModal = () => {
    dispatch({
      type: actionTypes.SET_OPEN_LOGIN_MODAL,
      payload: false,
    });
    dispatch({
      type: actionTypes.SET_OPEN_SIGNUP_MODAL,
      payload: true,
    });
  };

  return (
    <Dialog
      open={state.openLoginModal}
      onClose={() =>
        dispatch({
          type: actionTypes.SET_OPEN_LOGIN_MODAL,
          payload: false,
        })
      }
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto w-4/12 rounded-md bg-white px-12 py-10">
          <Dialog.Title className="font-bold text-2xl">Login</Dialog.Title>
          <div className="mt-5 space-y-5">
            <div className="flex flex-col gap-1">
              <label>Email</label>
              <input
                type="email"
                className="border border-black outline-none rounded-md p-2"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Password</label>
              <input
                type="password"
                className="border border-black outline-none rounded-md p-2"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="bg-yellow rounded-lg px-8 py-3 font-bold disabled:cursor-not-allowed disabled:bg-gray-400 flex items-center gap-2"
              onClick={handleLogin}
              disabled={email.length === 0 || password.length === 0}
            >
              Login{" "}
              {loading && <BiLoaderAlt className="animate-spin text-xl" />}
            </button>
          </div>

          <div className="mt-5 text-gray-500">
            <p>
              Don't have an account?{" "}
              <button className="underline" onClick={openSignUpModal}>
                Sign Up
              </button>
            </p>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default LoginModal;
