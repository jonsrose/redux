let nextTodoId = 0
export const addTodoOptimistic = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

// the async action creator uses the name of the old action creator, so
// it will get called by the existing code when a new todo item should
//  be added
export function addTodo(text) {
  return function(dispatch) {
    dispatch(addTodoOptimistic(text));
    var headers = new Headers();
    fetch('http://0.0.0.0:3001/api/todos', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }),
      body: JSON.stringify({
        text,
        completed: false
      })
    }).then(response => {
      // you should probably get a real id for your new todo item here,
      // and update your store, but we'll leave that to you
      console.log(`response: ${response}`);
    }).catch(err => {
      // Error: handle it the way you like, undoing the optimistic update,
      //  showing a "out of sync" message, etc.
      console.log('error')
    });
    // what you return here gets returned by the dispatch function that
    // used this action creator
    return null;
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const receiveTodos = (json) => {
  console.log(json);
  return {
    type: 'RECEIVE_TODOS',
    todos: json
  }
}

export const fetchTodos = () => {
  return dispatch => {
    return fetch('http://0.0.0.0:3001/api/todos', {
      method: 'get',
      headers: new Headers({
        'Accept': 'application/json'
      })
    })
    .then(response => response.json())
    .then(json => dispatch(receiveTodos(json)));
  }
}


