import React,{useContext} from 'react';
import {
    Container,
} from './styles'
import CartContext from '../../context/cartState/Context'

const OrderSummary = () => {
    const {cartFullInfo,subTotal} = useContext(CartContext)

    return (
        <Container>
            <h3>Subtotal: ${subTotal}</h3>
            <hr />
            {cartFullInfo.map((product, index) => (
                <p key={index} >
                    <strong>{product.title}: </strong>
                    ${product.price}
                </p>
            ))}
        </Container>
    )
}


export default OrderSummary;