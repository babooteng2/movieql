import { getById, people } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id),
  },
};

export default resolvers;

/* 
    ctrl + enter : playground 재생버튼
    resolver: (root, args, context, info)
    https://graphql.org/learn/execution/#root-fields-resolvers
*/
