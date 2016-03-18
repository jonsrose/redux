import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../common/store/configureStore'
import App from '../common/components/App'
import { fetchTodosAsync } from '../common/actions'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)
const rootElement = document.getElementById('app')

//store.dispatch(fetchTodosAsync()) // todo.jr take this out

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
