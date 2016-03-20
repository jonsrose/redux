const result = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.id
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'ADDED_TODO':
      let ids = state.filter(id =>
        id !== action.id
      )
      return [
        ...ids,
        action.todo.id
      ]
    default:
      let stateString = JSON.stringify(state)
      console.log(`default: state = ${stateString}`)
      return state
  }
}

export default result
