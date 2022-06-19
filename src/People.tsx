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

export const People = ({ setPeople, people }: any) => {
  const Person = coffeeAddicts.map((name, index) => (
    <button key={index} onClick={() => setPeople([...people, name])}>
      {name}
    </button>
  ));
  return <div>{Person}</div>;
};