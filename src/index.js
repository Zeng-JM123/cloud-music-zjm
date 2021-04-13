import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import rootReducer from './store/reducer'
import { createStore } from 'redux'
const store = createStore(rootReducer)

// 会被编译成React.createElement()
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
