import React, { useState, useContext } from 'react';
import {
    Container,
    Product,
    Info,
    ArrowsContainer,
    ButtonsContainer,
    CancelBtn,
    Title,
    Status
} from './styles'
import CartContext from '../../context/cartState/Context'

const OrderItem = ({ data }) => {
    const [productIndex, setProductIndex] = useState(0)
    const { cancelOrder } = useContext(CartContext)

    return (
        <Container>
            <Product bg={data.cart[productIndex].image} >
                <div></div>
                <ArrowsContainer>
                    {productIndex > 0 ? (
                        <button onClick={() => setProductIndex(productIndex - 1)} >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                    ) : (<div></div>)}
                    {productIndex < data.cart.length - 1 ? (
                        <button onClick={() => setProductIndex(productIndex + 1)} >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    ) : (<div></div>)}
                </ArrowsContainer>
                <div>
                    <p>Size: {data.cart[productIndex].size}</p>
                    <p>${data.cart[productIndex].price} USD</p>
                </div>
            </Product>
            <Info>
                <div>
                    <Title>{data.cart.length} Products</Title>
                    <p>${data.total} USD</p>
                    <Status >Status: {data.status}</Status>
                </div>
                {data.status !== 'delivered' ? (
                    <ButtonsContainer>
                        {data.status !== 'canceled' ? (
                            <CancelBtn onClick={() => cancelOrder(data.id)} >Cancel Order</CancelBtn>
                        ) : (<></>)}
                    </ButtonsContainer>
                ) : (<></>)}
            </Info>
        </Container>
    )
}

export default OrderItem