import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import GlobalStyle from './globalStyles';
import State from './context/State'


ReactDOM.render(
  <State>
    <GlobalStyle />
    <App />
  </State>,
  document.getElementById('root')
)
