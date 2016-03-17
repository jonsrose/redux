import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import todoApp from './common/reducers'
import App from './common/components/App'
import { fetchTodos } from './common/actions'

let store =  applyMiddleware(thunk)(createStore)(todoApp);

store.dispatch(fetchTodos())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
