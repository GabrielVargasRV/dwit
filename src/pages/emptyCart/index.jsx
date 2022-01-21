import React from 'react';
import {
    Container,
    Content,
    ShoppingCart,
    GoHome
} from './styles'
import Header from '../../components/header/index'
import {useNavigate} from 'react-router-dom'

const EmptyCart = () => {
    const navigate = useNavigate()

    return(
        <Container>
            <Content>
                <ShoppingCart className="fas fa-shopping-cart" >
                    <h3>:(</h3>
                </ShoppingCart>
                <p>Cart is empty</p>
                <GoHome onClick={() => navigate(-1)} >Go Back</GoHome>
            </Content>
        </Container>
    )
}

export default EmptyCart