import React from 'react';
import {
    Container,
    Content,
    Products,
    Info,
    ContinueBtn,
} from './styles';
import Product from '../../components/checkoutItem/index';
import EmptyCart from '../emptyCart/index'
import OrderSummary from '../../components/orderSummary/index'
import { connect } from "react-redux";

const Checkout = ({cart}) => {

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

const mapStateToProps = (state) => ({
    cart: state.cart
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps,mapDispatchToProps)(Checkout);
