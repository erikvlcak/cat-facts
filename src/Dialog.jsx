/* eslint-disable react/prop-types */
"use client";

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { useReducer, useState } from "react";
import { useEffect } from "react";
import catHead from "./assets/cat-tuxedo-head.png";
import favoriteCatReducer from './favoriteCatReducer'

export default function Modal({ setDialogState, dialogState, list, dispatch }) {
  const [toggleSelectBtn, setToggleSlectBtn] = useState(false);
  const [numberOfSelected, setNumberOfSelected] = useState(0);
  const [displaySaved, setDisplaySaved] = useState(false);
  const [favoriteList, favoriteDispatch] = useReducer(favoriteCatReducer, []);


    useEffect(() => {
    setNumberOfSelected(list.filter(f => f.selected).length);
  }, [list]);

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
              <DialogTitle as="h3" className="text-xl font-semibold text-gray-900 text-center p-4">
                  Your favorite cat facts!
                </DialogTitle>
              <div className="flex flex-row justify-center items-center">
                <button onClick={() => setDisplaySaved(!displaySaved)} className={`${!displaySaved && 'bg-orange-300'} p-3`}>New favorite facts</button>
                <button onClick={() => {
                  setDisplaySaved(!displaySaved)
                  favoriteDispatch({type: 'remove selection from favorites'})
                }} className={`${displaySaved && 'bg-orange-300'} p-3`}>Saved favorite facts</button>
              </div>
              <div className="mt-3 text-center sm:mt-5">
                
                <div className="flex justify-start ">
                  {toggleSelectBtn ? (
                    <button
                      onClick={() => {
                        dispatch({ type: "deselect all" });
                        setToggleSlectBtn(!toggleSelectBtn);
                      }}
                    >
                      Clear selection
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch({ type: "select all" });
                        setToggleSlectBtn(!toggleSelectBtn);
                      }}
                    >
                      Select all
                    </button>
                  )}
                  
                </div>
                <div className="mt-2 overflow-scroll">
                  {!displaySaved ? list.map((item) => {
                    return (
                      <div key={item.id} onClick={() => {
                        dispatch({ type: 'select fact', payload: { clickedItem: item } })
                        
                        
                  } }
                  className={` ${item.selected && 'bg-gray-200'} flex flex-row items-center select-none justify-start text-left h-20 hover:bg-gray-300`}>
                        <div className="w-20 flex justify-center items-center">
                          {item.selected && <img className="h-14 w-14" src={catHead} alt="selected fact" />}
                          </div>
                          <div className="w-[90%]">{item.fact}</div>
                        
                      </div>
                    );
                  }) : 
                  favoriteList.map((item) => {
                    return (
                      <div key={item.id} onClick={() => {
                        dispatch({ type: 'select fact', payload: { clickedItem: item } })
                        
                        
                  } }
                  className={` ${item.selected && 'bg-gray-200'} flex flex-row items-center select-none justify-start text-left h-20 hover:bg-gray-300`}>
                        <div className="w-20 flex justify-center items-center">
                          {item.selected && <img className="h-14 w-14" src={catHead} alt="selected fact" />}
                          </div>
                          <div className="w-[90%]">{item.fact}</div>
                        
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="button"
                disabled = {!numberOfSelected}
                onClick={() => {
                  //localStorage.setItem("factsArray", JSON.stringify(list));
                  
                  favoriteDispatch({type: 'add selected to favorite list', payload: {list: list} })
                  
                }}
                className={` ${!numberOfSelected && 'disabled:opacity-50 disabled:bg-gray-500'} inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {numberOfSelected > 1 ? <span>Save ({numberOfSelected}) selected facts</span>  : numberOfSelected == 1 ? <span>Save ({numberOfSelected}) selected fact</span> : <span>No fact selected</span> }
              </button>
              <button
                type="button"
                onClick={() => {
                  //localStorage.clear();
                  console.log(favoriteList)
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
