import React, { useState } from 'react';

const coffeeAddicts = [
  "Adam",
  "Betty",
  "Charles",
  "Debbie",
  "Earl",
  "Fiona",
  "Garry",
  "Hermione"
];


const Randomiser = function (list: Array<string>) {
  const [group, setGroup] = useState(0);
  if (list.length % 2 === 0) {
    const firstIndex: number = Math.floor(Math.random() * list.length);
    const firstParticipant: string = list[firstIndex];
    list.splice(firstIndex, 1);
    const secondIndex: number = Math.floor(Math.random() * list.length);
    const secondParticipant: string = list[secondIndex];
    list.splice(secondIndex, 1);
    // setGroup(group + 1);
    console.log(coffeeAddicts)
    console.log(group);
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
      // setGroup(group + 1);
      return `${firstParticipant} and ${secondParticipant}`;
    }
    return `${list[0]}, ${list[1]}, ${list[2]}`;
  }
};

const Pairer = function() {
    return (
      <div>
        {Randomiser(coffeeAddicts)}
        {Randomiser(coffeeAddicts)}
        {Randomiser(coffeeAddicts)}
        {Randomiser(coffeeAddicts)}
      </div>
    );
}

export default Pairer;
