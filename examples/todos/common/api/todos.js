import { normalize, Schema, arrayOf } from 'normalizr';
require('es6-promise').polyfill();
import 'isomorphic-fetch';

let todo = new Schema('todos',{ idAttribute: 'id' })
let subtask = new Schema('subtasks',{ idAttribute: 'id' })
let todoSchema

todo.define({
  subtasks: arrayOf(subtask)
});

todoSchema =
  arrayOf(todo)
;


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
  .then(response =>  response.json()
    .then(json => ({ json, response }))
  ).then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json)
    }
    //console.log(`response = ${JSON.stringify(response)}`)

    let jsonString = JSON.stringify(json);
    jsonString = jsonString.replace(/_subtasks/g,'subtasks');
    json = JSON.parse(jsonString)

    console.log(`json = ${JSON.stringify(json)}`)


    let normalizedJson = normalize(json, todoSchema)

    normalizedJson.visibilityFilter = 'SHOW_ALL'

    console.log(`normalizedJson =

    ${JSON.stringify(normalizedJson)}

    `)
    return callback(normalizedJson)
  })
}
