import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { useStateValue } from "../../store";
import * as actionTypes from "../../store/actionTypes";

function LoginModal() {
  const [state, dispatch] = useStateValue();

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
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Password</label>
              <input
                type="password"
                className="border border-black outline-none rounded-md p-2"
              />
            </div>

            <button className="bg-yellow rounded-lg px-8 py-3 font-bold">
              Login
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
