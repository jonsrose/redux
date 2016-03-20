import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (state) => {
  console.log(`getVisibleTodos: state: ${JSON.stringify(state)}`)
  const result = state.result
  console.log(`getVisibleTodos: result: ${JSON.stringify(result)}`)
  let todoList =  result.map(id => state.entities.todos[id]);
  console.log(`todoList: ${JSON.stringify(todoList)}`)
  switch (state.visibilityFilter) {
    case 'SHOW_ALL':
      return todoList
    case 'SHOW_COMPLETED':
      return todoList.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todoList.filter(t => !t.completed)
  }
}


const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
