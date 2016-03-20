import { combineReducers } from 'redux'
import entities from './entities'
import result from './result'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  entities,
  result,
  visibilityFilter
})


export default todoApp
