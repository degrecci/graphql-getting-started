const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return 'Hello World'
  },
};

graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});