import { useState } from "react";
import "./App.css";
import Pairer from "./Pairer";
import { PeopleComponent } from "./PeopleComponent";

function App() {
  const [people, setPeople] = useState([] as string[]);
  const [clicked, setClicked] = useState(false);

  return (
    <div className="App">
      <PeopleComponent setPeople={setPeople} people={people} />
      <button onClick={() => setClicked(true)}>
        <h1>Pair 'em up!</h1>
      </button>
      {clicked && <Pairer people={people} />}
    </div>
  );
}

export default App;
