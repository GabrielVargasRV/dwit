import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import GlobalStyle from './globalStyles';
import CartState from './context/cartState/State'
import ModalState from './context/modalState/State'
import UserState from './context/userState/State'

ReactDOM.render(
  <UserState>
    <CartState>
      <ModalState>
        <GlobalStyle />
        <App />
      </ModalState>
    </CartState>
  </UserState>,
  document.getElementById('root')
)
