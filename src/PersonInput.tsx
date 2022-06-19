import { useState } from "react";

interface IPersonInput {
    people: string[],
    setPeople: (arg0: string[]) => void
} 

export const PersonInput = ({ setPeople, people }: IPersonInput) => {
  const [ringIn, setRingIn] = useState("");
  return (
    <form>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={ringIn}
          onChange={(event) => setRingIn(event.target.value)}
        />
      </label>
      <input
        type="button"
        value="Submit"
        onClick={() => {
          setPeople([...people, ringIn]);
          setRingIn("");
        }}
      />
    </form>
  );
};
