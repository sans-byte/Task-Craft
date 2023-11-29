"use client";

import { useEffect } from "react";

function Alert({
  dialog,
  setDialog,
  setDecision,
  message,
  buttonText,
  performTask,
}) {
  const closeDialog = (decision) => {
    if (decision === false) {
      setDialog(false);
    } else {
      performTask();
      setDecision(true);
      setDialog(false);
    }
  };

  useEffect(() => {
    if (dialog) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [dialog]);

  return (
    <>
      <div className="fixed inset-0 z-50 h-full w-full overflow-hidden">
        <div
          className={`${
            !dialog ? "opacity-0 pointer-events-none" : "opacity-100"
          } apply-transition absolute h-screen w-screen backdrop-blur-lg bg-slate/70 flex justify-center items-center cursor-pointer transition ease`}
        >
          <div className="h-[180px] w-[500px] bg-slate-950 rounded-md flex flex-col p-6 border-[0.01px] border-slate-700 relative z-1">
            <div className="grow text-white">
              <div className="text-lg mb-2">Are you absolutely sure?</div>
              <div className="text-sm text-slate-400">{message}</div>
            </div>
            <div className="flex justify-end text-sm">
              <button
                className="rounded-md p-2 px-3 bg-slate-950 hover:bg-slate-900 border-[0.01px] border-slate-700  m-1 text-white"
                onClick={() => closeDialog(false)}
              >
                Cancel
              </button>
              <button
                className="rounded-md p-2 px-3 bg-white hover:bg-slate-100 border-slate-500 m-1 "
                onClick={() => closeDialog(true)}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Alert;
