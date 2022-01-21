import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Loading from './pages/loading/index'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header/index'
const Home = React.lazy(() => import('./pages/home'))
const Product = React.lazy(() => import('./pages/product/index'))
const Checkout = React.lazy(() => import('./pages/checkout/index'))
const Information = React.lazy(() => import('./pages/information/index'))
const Payment = React.lazy(() => import('./pages/payment/index'))
const Account = React.lazy(() => import('./pages/account/index'))

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={
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
          <React.Suspense fallback={<Loading/>} >
            <Account />
          </React.Suspense>
        } />
      </Routes>
      <ToastContainer theme="dark" position="bottom-left" />
    </BrowserRouter>
  )
}

export default App;