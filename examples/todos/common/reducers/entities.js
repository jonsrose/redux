import { combineReducers } from 'redux'
import todos from './todos'
import subtasks from './subtasks'

const entities = combineReducers({
  todos,
  subtasks
})

export default entities
