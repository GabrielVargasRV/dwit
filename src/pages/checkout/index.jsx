import React, { useContext,useEffect } from 'react';
import {
    Container,
    Content,
    Products,
    Info,
    ContinueBtn
} from './styles'
import Header from '../../components/header';
import Context from '../../context/Context';
import Product from '../../components/checkoutItem/index';
import EmptyCart from '../emptyCart/index'
import OrderSummary from '../../components/orderSummary/index'

const Checkout = () => {
    const { cart } = useContext(Context)

    if(!cart.length) return <EmptyCart/>

    return (
        <Container>
            <Content>
                <Products>
                    {cart.map((product, index) => {
                        return <Product key={product.idInCart} id={product.id} s={product.size} idInCart={product.idInCart} />
                    })}
                </Products>
                <Info>
                    <OrderSummary/>
                    <ContinueBtn to="/checkout/information" >Continue</ContinueBtn>
                </Info>
            </Content>
        </Container>
    )
}


export default Checkout
