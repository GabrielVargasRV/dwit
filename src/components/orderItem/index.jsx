import React, { useState } from 'react';
import {
    Container,
    Product,
    Info,
    ArrowsContainer,
    ButtonsContainer,
} from './styles'

const OrderItem = ({ data }) => {
    const [productIndex, setProductIndex] = useState(0)

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
                    {productIndex < data.cart.length -1 ? (
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
                    <h2>{data.cart.length} Products</h2>
                    <p>${data.total} USD</p>
                    <p style={{marginTop: '10px'}} >Status: {data.status}</p>
                </div>
                <ButtonsContainer>

                </ButtonsContainer>
            </Info>
        </Container>
    )
}

export default OrderItem