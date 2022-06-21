import "./App.css";
import { useState } from "react";
import { Pairer } from "./Pairer";
import { People } from "./People";
import { PersonInput } from "./PersonInput";

function App() {
  const [people, setPeople] = useState([] as string[]);
  const [clicked, setClicked] = useState<number>(0);

  return (
    <div className="App">
      <People setPeople={setPeople} people={people} />
      <PersonInput setPeople={setPeople} people={people}/>
      <button onClick={() => setClicked((i) => i+=1)}>
        <h1>Pair 'em up!</h1>
      </button>
      {clicked !==0 && <Pairer people={people} />}
    </div>
  );
}

export default App;
