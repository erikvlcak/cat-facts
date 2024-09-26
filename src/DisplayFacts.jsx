/* eslint-disable react/prop-types */
export default function DisplayFacts({ fact }) {
  return (
    <div className="border-4 border-black w-1/2 h-1/3 p-4">
      <h1>Did you know that...</h1>
      <div>{fact}</div>
    </div>
  );
}
