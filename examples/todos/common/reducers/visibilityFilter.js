const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      console.log(`visibilityFilter default state ${state}`)
      return state
  }
}

export default visibilityFilter
