const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(`action.id ${action.id}`);
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    case 'ADDED_TODO':

      console.log(`state.id = ${state.id} action.id = ${action.id}`);
      if (state.id !== action.id) {
        return state
      }

      console.log(`set new state id = action.id = ${action.id}`);


      return Object.assign({}, state, {
        id: action.todo.id
      })
    default:
      return state
  }
}

const todos = (state = {}, action) => {
  console.log("im in todos");
  let newTodos
  switch (action.type) {
    case 'ADD_TODO':
      newTodos = Object.assign({}, state)
      newTodos[action.todo.id] = todo(undefined,action)
      return newTodos
    case 'TOGGLE_TODO':
      return Object.keys(state).map(t =>
        todo(t, action)
      )

      return Object.assign({}, state, {
        completed: !state.completed
      })

      newTodos = Object.assign({}, state)
      newTodos[action.todo.id] = todo(t, action)
      return newTodos
    case 'ADDED_TODO':
      newTodos = Object.assign({}, state)
      newTodos[action.todo.id] = todo(t, action)
      return newTodos
    case 'RECEIVE_TODOS':
      console.log("receive_todos");
      console.log(action.todos);
      const todos = action.todos;
      return Object.assign({}, todos)
    default:
      let stateString = JSON.stringify(state)
      console.log(`default: state = ${stateString}`)
      return state
  }
}

export default todos
