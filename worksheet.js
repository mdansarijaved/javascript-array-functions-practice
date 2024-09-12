const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names

const allName = [];
characters.map((char, index) => {
  allName.push(char.name);
});
console.log(allName.join(" ->"));

//2. Get array of all heights

const allHeights = [];
characters.map((char, index) => allHeights.push(char.height));
console.log(allHeights.join(" ->"));

//3. Get array of objects with just name and height properties
const allNameAndHeights = [];
characters.map((char, index) =>
  allNameAndHeights.push({
    name: char.name,
    height: char.height,
  })
);
console.log(allNameAndHeights);

//4. Get array of all first names
const allfirstName = [];
characters.map((char, index) => allfirstName.push(char.name.split(" ")[0]));
console.log(allfirstName.join(" ->"));

//***REDUCE***
//1. Get total mass of all characters

const totalMass = characters.reduce((acc, char) => acc + char.mass, 0);
console.log(totalMass);

//2. Get total height of all characters

const totalHeight = characters.reduce((acc, char) => acc + char.height, 0);
console.log(totalHeight);

//3. Get total number of characters by eye color
const charactersByEyeColor = characters.reduce((acc, char) => {
  //   (acc[char.eye_color] = acc[char.eye_color] || []).push(char);
  const color = char.eye_color;
  if ((acc[color] = acc[color] || [])) {
    acc[color].push(char);
  }
  return acc;
}, {});
console.log(charactersByEyeColor);

//4. Get total number of characters in all the character names
const totalNumberofCharsinCharaters = characters.reduce((acc, char) => {
  //
  const name = char.name;
  if (acc[name]) {
    acc[name]++;
  } else {
    acc[name] = 1;
  }
  return acc;
}, {});
console.log(totalNumberofCharsinCharaters);

//***FILTER***
//1. Get characters with mass greater than 100
const massGreater = characters.filter((char, index) => char.mass > 100);
console.log(massGreater);

//2. Get characters with height less than 200
const heightGreater = characters.filter((char, index) => char.height < 200);
console.log(heightGreater);

//3. Get all male characters
const allMale = characters.filter((char, index) => char.gender === "male");
console.log(allMale);

//4. Get all female characters
const allFemale = characters.filter((char, index) => char.gender === "female");
console.log(allFemale);

//***SORT***
//1. Sort by mass

comparebymass = (a, b) => {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
};
const byMass = characters.sort((char) => comparebymass(char.mass));
console.log(byMass);
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?
