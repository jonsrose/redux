require('es6-promise').polyfill();
require('isomorphic-fetch');

export function fetchTodos(callback) {
  // Rather than immediately returning, we delay our code with a timeout to simulate asynchronous behavior
  //setTimeout(() => {
  //  callback(getRandomInt(1, 100))
  //}, 500)
  // In the case of a real world API call, you'll normally run into a Promise like this:
  // API.getUser().then(user => callback(user))
  return fetch('http://0.0.0.0:3001/api/todos', {
    method: 'get',
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => response.json())
  .then(json => callback(json));
}
