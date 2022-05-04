import React from "react";

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

let group = 1;

const Randomiser = function (list: Array<string>) {
  if (list.length > 0 && list.length % 2 === 0) {
    const firstIndex: number = Math.floor(Math.random() * list.length);
    const firstParticipant: string = list[firstIndex];
    list.splice(firstIndex, 1);
    const secondIndex: number = Math.floor(Math.random() * list.length);
    const secondParticipant: string = list[secondIndex];
    list.splice(secondIndex, 1);
    console.log(group)
    group++;
    return `${firstParticipant} and ${secondParticipant}`;
  } else {
    while (list.length > 3) {
      const firstIndex: number = Math.floor(Math.random() * list.length);
      const firstParticipant: string = list[firstIndex];
      list.splice(firstIndex, 1);
      const secondIndex: number = Math.floor(Math.random() * list.length);
      const secondParticipant: string = list[secondIndex];
      list.splice(secondIndex, 1);
      console.log('are you sure you are not odd', group);
      group++;
      return `${firstParticipant} and ${secondParticipant}`;
    }
    return `${list[0]}, ${list[1]}, ${list[2]}`;
  }
};

const Pairer = function () {
  return (
    <div>
      <h3>Group {group}</h3>
      {Randomiser(coffeeAddicts)}
      <h3>Group {group}</h3>
      {Randomiser(coffeeAddicts)}
      <h3>Group {group}</h3>
      {Randomiser(coffeeAddicts)}
      <h3>Group {group}</h3>
      {Randomiser(coffeeAddicts)}
    </div>
  );
};

// export default Pairer;