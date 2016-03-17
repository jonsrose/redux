export function fetchTodos(callback) {
  // Rather than immediately returning, we delay our code with a timeout to simulate asynchronous behavior
  //setTimeout(() => {
  //  callback(getRandomInt(1, 100))
  //}, 500)
  // In the case of a real world API call, you'll normally run into a Promise like this:
  // API.getUser().then(user => callback(user))
  fetch('http://0.0.0.0:3001/api/todos', {
    method: 'get',
    headers: new Headers({
      'Accept': 'application/json'
    })
  })
  .then(response => callback(response))
}
