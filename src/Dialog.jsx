/* eslint-disable react/prop-types */
"use client";

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function Modal({ setDialogState, dialogState, list, dispatch }) {
  return (
    <Dialog open={dialogState} onClose={() => setDialogState(!dialogState)} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-[80%]  sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95" //sm:max-w-sm
          >
            <div>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <CheckIcon aria-hidden="true" className="h-6 w-6 text-green-600" />
              </div>
              <div className="mt-3 text-center sm:mt-5">
                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                  Your favorite cat facts!
                </DialogTitle>
                <div>
                  <button onClick={() => dispatch({ type: "select all" })}>Select all</button>
                  <button onClick={() => dispatch({ type: "deselect all" })}>Clear selection</button>
                </div>
                <div className="mt-2 overflow-scroll">
                  {list.map((item) => {
                    return (
                      <div key={item.id} className="flex flex-row items-center justify-between p-2">
                        {item.selected ? (
                          <input
                            type="checkbox"
                            name="select"
                            id="select"
                            checked
                            onChange={() => dispatch({ type: "click checkbox", payload: { clickedItem: item } })}
                          />
                        ) : (
                          <input
                            type="checkbox"
                            name="select"
                            id="select"
                            onChange={() => dispatch({ type: "click checkbox", payload: { clickedItem: item } })}
                          />
                        )}

                        {item.fact}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                onClick={() => {
                  localStorage.setItem("factsArray", JSON.stringify(list));
                }}
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save facts for later
              </button>
              <button
                type="button"
                onClick={() => {
                  localStorage.clear();
                }}
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Delete all saved facts
              </button>
              <button
                type="button"
                onClick={() => setDialogState(!dialogState)}
                className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
