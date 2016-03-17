import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import todoApp from './reducers'
import App from './components/App'
import { fetchTodos } from './actions'

let store =  applyMiddleware(thunk)(createStore)(todoApp);

store.dispatch(fetchTodos())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
