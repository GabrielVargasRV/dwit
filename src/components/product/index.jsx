import React from 'react';
import  {
    Container,
    Image,
    Info,
    Title,
    Price,
    InfoTop,
} from './styles';

const Product = ({data}) => {

    return(
        <Container to={`/product/${data.id}`} >
            <Image bg={data.image} ></Image>
            <Info>
                <InfoTop>
                    <Title>{data.title}</Title>
                </InfoTop>
                <Price>${data.sizes[0].price}</Price>
            </Info>
        </Container>
    );
}

export default Product;