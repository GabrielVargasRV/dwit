import React from 'react';
import  {
    Container,
    Image,
    Info,
    Title,
    Price
} from './styles'

const Product = ({data}) => {
    return(
        <Container to={`/product/${data.id}`} >
            <Image bg={data.image} ></Image>
            <Info>
                <Title>{data.title}</Title>
                <Price>${data.sizes[0].price}</Price>
            </Info>
        </Container>
    )
}

export default Product;