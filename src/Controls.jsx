/* eslint-disable react/prop-types */
export default function Controls({ fetch, setDialogState, dialogState }) {
  return (
    <div className="flex flex-col items-stretch justify-between w-1/2 gap-10">
      <button onClick={() => fetch()} className="p-4 bg-green-500">
        Give me another cool fact!
      </button>
      <div className="flex flex-row items-center gap-10">
        <button className="flex-1 p-2 bg bg-yellow-500">Save this fact to memory</button>
        <button className="p-2 bg-red-500">Reset memory</button>
      </div>
      <button onClick={() => setDialogState(!dialogState)} className="flex-1 p-2 bg-gray-400">
        Show saved facts
      </button>
    </div>
  );
}
