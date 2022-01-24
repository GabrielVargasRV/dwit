import React,{useContext,useEffect,useState} from 'react';
import {
    Container,
    Content,
    Products,
    Info,
    GoBackBtn
} from './styles'
import CartContext from '../../context/cartState/Context'
import Product from '../../components/checkoutItem/index'
import { useNavigate } from 'react-router-dom';
import {PayPalButton} from 'react-paypal-button-v2'

const Payment = () => {
    const {cart,cartFullInfo,subTotal,buyer} = useContext(CartContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!buyer) navigate('/checkout/information')
    },[])

    return (
        <Container>
            <Content>
                <Products>
                    {cart.map((product, index) => {
                        return <Product key={index} id={product.id} s={product.size} idInCart={product.idInCart} />
                    })}
                </Products>
                <Info>
                    <h3>Subtotal: ${subTotal}</h3>
                    <hr />
                    {cartFullInfo.map((product, index) => (
                        <p key={index} >
                            <strong>{product.title}: </strong>
                            ${product.price}
                        </p>
                    ))}
                    <PayPalButton
                        amount={0}
                    />
                    <GoBackBtn to="/checkout/information" >Go Back</GoBackBtn>
                </Info>
            </Content>
        </Container>
    )
}


export default Payment;
