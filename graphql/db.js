export const people = [
  {
    id: 1,
    name: "babooteng2",
    age: 18,
    gender: "female",
  },
  {
    id: 2,
    name: "babooteng1",
    age: 18,
    gender: "female",
  },
  {
    id: 3,
    name: "babooteng3",
    age: 18,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
