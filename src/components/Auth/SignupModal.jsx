import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useStateValue } from "../../store";
import * as actionTypes from "../../store/actionTypes";
import { signup } from "../../services/auth";
import { toast } from "react-toastify";
import { BiLoaderAlt } from "react-icons/bi";
import { redirect } from "react-router-dom";

function SignupModal() {
  const [state, dispatch] = useStateValue();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);
    try {
      const res = await signup({ name, email, password });
      localStorage.setItem("token", res.data.accessToken);
      dispatch({
        type: actionTypes.SET_USER_DATA,
        payload: { ...res.data.user },
      });
      redirect("/");
      dispatch({
        type: actionTypes.SET_OPEN_SIGNUP_MODAL,
        payload: false,
      });
    } catch (error) {
      console.log(error);
      toast.error("Error signing up!!!");
    } finally {
      setLoading(false);
    }
  };

  const openLoginModal = () => {
    dispatch({
      type: actionTypes.SET_OPEN_LOGIN_MODAL,
      payload: true,
    });
    dispatch({
      type: actionTypes.SET_OPEN_SIGNUP_MODAL,
      payload: false,
    });
  };

  return (
    <Dialog
      open={state.openSignupModal}
      onClose={() => {
        dispatch({
          type: actionTypes.SET_OPEN_SIGNUP_MODAL,
          payload: false,
        });
      }}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto w-4/12 rounded-md bg-white px-10 py-10">
          <Dialog.Title className="font-bold text-2xl">Sign Up</Dialog.Title>
          <div className="mt-5 space-y-5">
            <div className="flex flex-col gap-1">
              <label>Name</label>
              <input
                type="text"
                className="border border-black outline-none rounded-md p-2"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Email</label>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                className="border border-black outline-none rounded-md p-2"
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
              disabled={
                email.length === 0 || name.length === 0 || password.length < 5
              }
              onClick={handleSignup}
            >
              Sign Up
              {loading && <BiLoaderAlt className="animate-spin text-xl" />}
            </button>
          </div>
          <div className="mt-5 text-gray-500">
            <p>
              Already have an account?{" "}
              <button className="underline" onClick={openLoginModal}>
                Login
              </button>
            </p>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default SignupModal;
