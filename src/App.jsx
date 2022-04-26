import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Loading from './pages/loading/index';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header/index';
import ModalContainer from './components/modalContainer/index';

import { connect } from "react-redux";


const Home = React.lazy(() => import('./pages/home'))
const Product = React.lazy(() => import('./pages/product/index'))
const Checkout = React.lazy(() => import('./pages/checkout/index'))
const Information = React.lazy(() => import('./pages/information/index'))
const Payment = React.lazy(() => import('./pages/payment/index'))
const Account = React.lazy(() => import('./pages/account/index'))
const Signin = React.lazy(() => import('./pages/signin/index'))
const Signup = React.lazy(() => import('./pages/signup/index'))
const Admin = React.lazy(() => import('./pages/admin/index'))
const Favorites = React.lazy(() => import('./pages/favorites/index'))


const App = ({isLogged,modal}) => {

  return (
    <BrowserRouter>
      <ModalContainer element={modal} />
      <Header />
      <Routes>
        <Route exact path="/" element={
          <React.Suspense fallback={<Loading />} >
            <Home />
          </React.Suspense>
        } />
        <Route exact path="/category/:category" element={
          <React.Suspense fallback={<Loading />} >
            <Home />
          </React.Suspense>
        } />
        <Route exact path="/product/:id" element={
          <React.Suspense fallback={<Loading />} >
            <Product />
          </React.Suspense>
        } />
        <Route exact path="/checkout" element={
          <React.Suspense fallback={<Loading />} >
            <Checkout />
          </React.Suspense>
        } />
        <Route exact path="/checkout/information" element={
          <React.Suspense fallback={<Loading />}>
            <Information />
          </React.Suspense>
        } />
        <Route exact path="/checkout/payment" element={
          <React.Suspense fallback={<Loading />} >
            <Payment />
          </React.Suspense>
        } />
        <Route exact path="/account" element={
          <React.Suspense fallback={<Loading />} >
            {isLogged ? <Account /> : <Signin />}
          </React.Suspense>
        } />

        <Route exact path="/register" element={
          <React.Suspense fallback={<Loading />} >
            <Signup />
          </React.Suspense>
        } />

        <Route exact path="/admin" element={
          <React.Suspense fallback={<Loading />} >
            <Admin />
          </React.Suspense>
        } />

        <Route exact path="/admin/:id" element={
          <React.Suspense fallback={<Loading />} >
            <Admin />
          </React.Suspense>
        } />

        <Route exact path="/favorites" element={
          <React.Suspense fallback={<Loading />} >
            <Favorites />
          </React.Suspense>
        } />
      </Routes>
      <ToastContainer theme="dark" position="bottom-left" />
    </BrowserRouter>
  )
}

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
  modal: state.modal
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps,mapDispatchToProps)(App);