/* eslint-disable react/prop-types */
export default function Controls({ fetch, setDialogState, dialogState, fact, dispatch, list, id, setId }) {
  return (
    <div className="flex flex-col items-stretch justify-between w-1/2 gap-10">
      <button onClick={() => fetch()} className="p-4 bg-green-500">
        Give me another cool fact!
      </button>
      <div className="flex flex-row items-center gap-10">
        <button
          onClick={() => dispatch({ type: "add to list", payload: { newFact: fact, newId: id, setNewId: setId } })}
          className="flex-1 p-2 bg bg-yellow-500"
        >
          Add to favorite facts
        </button>
      </div>
      <button
        onClick={() => {
          setDialogState(!dialogState);

          console.log(JSON.parse(localStorage.getItem("factsArray")));
        }}
        className="flex-1 p-2 bg-gray-400"
      >
        Show favorite facts
      </button>
    </div>
  );
}
