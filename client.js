const fetch = require('node-fetch');

fetch('http://localhost:4000/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({ query: "{ hello }"})
})
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err))