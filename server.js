const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    quoteOfTheDay: String,
    random: Float!,
    rollDice(numDice: Int!, numSides: Int): [Int]
  }
`);

const root = {
  quoteOfTheDay: () => {
    return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
  },
  random: () => Math.random(),
  rollDice: ({ numDice, numSides}) => {
    let output = [];

    for (let i = 0; i < numDice; i++) {
      output.push(1 + Math.floor(Math.random() * (numSides || 6)))
    }

    return output;
  },
};

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/graphql')