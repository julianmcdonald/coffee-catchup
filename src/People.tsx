import { useState } from "react";

const coffeeAddicts = [
  "Anton",
  "Betty",
  "Charles",
  "Debbie",
  "Earl",
  "Fiona",
  "Garry",
  "Hermione",
];

interface IButtonProps {
  name: string;
  setPeople: any;
}

const MyButton = ({ name, setPeople }: IButtonProps) => {
  const [alreadyAdded, setalreadyAdded] = useState(false);

  const onClick = () => {
    if (alreadyAdded) {
      return;
    }
    setalreadyAdded(true);
    setPeople((previousList: []) => [...previousList, name]);
  };
  return <button onClick={onClick}>{name}</button>;
};

export const People = ({ setPeople }: any) => {
  const Person = coffeeAddicts.map((name, index) => (
    <MyButton key={index} name={name} setPeople={setPeople} />
  ));
  return <div>{Person}</div>;
};
