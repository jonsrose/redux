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

      return Object.assign({}, state, {
        id: action.todo.id
      })
    default:
      return state
  }
}

const todos = (state = [], action) => {
  console.log("im in todos");
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'ADDED_TODO':
      console.log("todos ADDED_TODO");

      return state.map(t =>
        todo(t, action)
      )
    case 'RECEIVE_TODOS':
      console.log("receive_todos");
      console.log(action.todos);
      return action.todos;
    default:
      console.log(`default: state = ${state}`)
      return state
  }
}

export default todos
