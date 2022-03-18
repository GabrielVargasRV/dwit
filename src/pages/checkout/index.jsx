import React, { useContext } from 'react';
import {
    Container,
    Content,
    Products,
    Info,
    ContinueBtn,
} from './styles'
import CartContext from '../../context/cartState/Context';
import Product from '../../components/checkoutItem/index';
import EmptyCart from '../emptyCart/index'
import OrderSummary from '../../components/orderSummary/index'

const Checkout = () => {
    const { cart } = useContext(CartContext)

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
