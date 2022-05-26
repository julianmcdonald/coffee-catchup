const coffeeAddicts = [
  "Adam",
  "Betty",
  "Charles",
  "Debbie",
  "Earl",
  "Fiona",
  "Garry",
  "Hermione",
];

const Randomiser = (list: string[]): JSX.Element[] => {
  // list shuffler
  list = list.sort(() => (Math.random() > 0.5 ? 1 : -1));
  // This is the max group size, except for the last group, with an odd amount of names
  const chunkSize = 2;
  // These are going to be the groups we return
  let allChunks = [];
  // We are going to loop through the array, and pull out a `chunkSize` amount of objects from the list
  for (let i = 0; i < list.length; i += chunkSize) {
    // Pulling out the objects (and removing them), from the list so we don't accidentally assign the same individual to more than one group
    allChunks.push(list.slice(i, i + chunkSize));
  }
  // We will check to see if the list was originally an odd number.
  // If it is, we will combine the last 2 chunks as it will look something like this [["Adam", "Betty"], ["Charles"]].
  // As we can see, "Charles" is by himself, which is no fun.
  if (list.length % 2 !== 0) {
    allChunks[allChunks.length - 2].push(allChunks[allChunks.length - 1][0]);
    // Cleaning up the last group, because it currently looks like this:
    // [["Adam", "Betty", "Chares"], ["Charles"]]; As we can see, "Charles" is in two groups.
    delete allChunks[allChunks.length - 1];
  }
  // We are now returning all the objects.
  return allChunks.filter(Boolean).map((group: string[], index: number) => (
    <p>
      {index + 1}. {group.join(", ")}
    </p>
  ));
};

const Pairer = function () {
  return <div>{Randomiser(coffeeAddicts)}</div>;
};

export default Pairer;
