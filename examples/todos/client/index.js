import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../common/components/App'
import { fetchTodos } from '../common/actions'
import configureStore from '../common/store/configureStore'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)

store.dispatch(fetchTodos()) // todo.jr take this out

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
