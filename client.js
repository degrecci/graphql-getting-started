const fetch = require('node-fetch');
const query = `mutation UpdateMessage($id: ID!, $input: MessageInput) {
  updateMessage(id: $id, input: $input) {
    id
  }
}`;

fetch('http://localhost:4000/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    query,
    variables: {
      id: "62295e8504959649b193",
      input: {
      author: "Neil Gaiman",
      content: "Sandman",
    } },
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))