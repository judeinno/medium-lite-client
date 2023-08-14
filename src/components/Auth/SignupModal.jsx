import React from "react";

function SignupModal() {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto w-4/12 rounded-md bg-white px-10 py-10">
          <Dialog.Title className="font-bold text-2xl">Login</Dialog.Title>
          <div className="mt-5 space-y-5">
            <div className="flex flex-col gap-1">
              <label>Email</label>
              <input
                type="text"
                className="border border-black outline-none rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Password</label>
              <input
                type="text"
                className="border border-black outline-none rounded-md p-2"
              />
            </div>

            <button className="bg-yellow rounded-lg px-8 py-3 font-bold">
              Login
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default SignupModal;
