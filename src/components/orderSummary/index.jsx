import React,{useContext} from 'react';
import {
    Container,
} from './styles'
import Context from '../../context/Context'

const OrderSummary = () => {
    const {cartFullInfo,subTotal} = useContext(Context)

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