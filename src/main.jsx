import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import GlobalStyle from './globalStyles';
import State from './context/cartState/State'
import ModalState from './context/modalState/State'
import UserState from './context/userState/State'

ReactDOM.render(
  <State>
    <UserState>
      <ModalState>
        <GlobalStyle />
        <App />
      </ModalState>
    </UserState>
  </State>,
  document.getElementById('root')
)
