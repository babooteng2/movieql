const babooteng2 = {
    name: "babooteng2",
    age: 18,
    gender: "female"
}

const resolvers = {
    Query: {
        name: () => "babooteng2",
        person: () => babooteng2
    }
};

export default resolvers;