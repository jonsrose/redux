const subtask = (state, action) => {
  switch (action.type) {
    case 'ADD_SUBTASK':
      console.log(`action.id ${action.id}`);
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_SUBTASK':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    case 'ADDED_SUBTASK':

      console.log(`state.id = ${state.id} action.id = ${action.id}`);
      if (state.id !== action.id) {
        return state
      }

      console.log(`set new state id = action.id = ${action.id}`);


      return Object.assign({}, state, {
        id: action.subtask.id
      })
    default:
      return state
  }
}

const subtasks = (state = {}, action) => {
  console.log("im in subtasks")
  let newSubtasks
  switch (action.type) {
    case 'ADD_SUBTASK':
      newSubtasks = Object.assign({}, state)
      newSubtasks[action.subtask.id] = subtask(undefined,action)
      return newSubtasks
    case 'TOGGLE_SUBTASK':
      return Object.keys(state).map(t =>
        subtask(t, action)
      )

      return Object.assign({}, state, {
        completed: !state.completed
      })

      newSubtasks = Object.assign({}, state)
      newSubtasks[action.subtask.id] = subtask(t, action)
      return newSubtasks
    case 'ADDED_SUBTASK':
      newSubtasks = Object.assign({}, state)
      newSubtasks[action.subtask.id] = subtask(t, action)
      return newSubtasks
    case 'RECEIVE_SUBTASKS':
      console.log("receive_subtasks");
      console.log(action.subtasks);
      const subtasks = action.subtasks;
      return Object.assign({}, subtasks)
    default:
      let stateString = JSON.stringify(state)
      console.log(`default: state = ${stateString}`)
      return state
  }
}

export default subtasks
