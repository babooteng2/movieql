import { getById, people } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (id) => getById(id),
  },
};

export default resolvers;

/* 
    ctrl + enter : playground 재생버튼
*/
