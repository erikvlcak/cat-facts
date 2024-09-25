import DisplayFacts from "./displayFacts";
import Controls from "./Controls";
import catReducer from "./catReducer";
import Dialog from "./Dialog";

import { useEffect, useReducer, useState } from "react";

export default function App() {
  const [fact, setFact] = useState("Let's learn some cool facts!");
  const [dialogState, setDialogState] = useState(false);
  const [list, dispatch] = useReducer(catReducer, []);

  async function handleFetch() {
    try {
      let response = await fetch("https://catfact.ninja/fact");
      if (!response.ok) {
        throw new Error(
          `Something went horribly wrong when getting new facts - ${response.status} ${response.statusText}`
        );
      }
      let data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error(`There has been some unexpected network error: ${error.message}`);
    }
  }

  useEffect(() => handleFetch, []);

  return (
    <div className="flex flex-col items-center justify-start gap-2 h-full">
      <DisplayFacts fact={fact} />
      <Controls
        fact={fact}
        setFact={setFact}
        fetch={handleFetch}
        setDialogState={setDialogState}
        openDialog={dialogState}
        list={list}
        dispatch={dispatch}
      />
      <Dialog setDialogState={setDialogState} dialogState={dialogState} list={list} />
    </div>
  );
}
