import React, { useEffect, useState } from 'react';
import {
    Container,
    Photo,
    Info,
    Title,
    Size,
    Price,
    RemoveBtn,
    Top,
    Bottom,
} from './styles'

import {
    ContainerLoading,
    PhotoLoading,
    InfoLoading,
    TitleLoading,
    SizeLoading,
    PriceLoading,
    RemoveBtnLoading,
    TopLoading,
    BottomLoading
} from './loadingStyles'

import Products from "../../services/products.services";
import Cart from "../../services/cart.services";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Notification from '../notification/index';
import LoadingSpinner from '../loadingSpinner/index';

const Loading = () => {

    return (
        <ContainerLoading>
            <PhotoLoading></PhotoLoading>
            <InfoLoading>
                <TopLoading>
                    <TitleLoading></TitleLoading>
                    <SizeLoading></SizeLoading>
                </TopLoading>
                <BottomLoading>
                    <PriceLoading></PriceLoading>
                    <RemoveBtnLoading></RemoveBtnLoading>
                </BottomLoading>
            </InfoLoading>
        </ContainerLoading>
    )
}



const CheckoutItem = (props) => {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [removing, setRemoving] = useState(false);

    const handleRemoveProductFromCart = () => {
        setRemoving(true)
        Cart.removeFromCart(props.idInCart,(res) => {
            toast(<Notification ImgUrl={data.image} text="Remove from cart" theme="#ff0000" />, {
                hideProgressBar: true,
                autoClose: 3000,
                pauseOnHover: true,
                draggable: false,
            })
        })
    }

    useEffect(() => {
        Products.getById(props.id, (res) => {
            if (res) {
                let price = res.sizes.filter(e => e.size === props.s)[0]
                setData({
                    ...res,
                    price: price.price
                })
                setLoading(false)
            }
        });
        return () => setLoading(false)
    }, [])

    if (loading) return <Loading />

    return (
        <Container>
            <Photo onClick={() => navigate(`/product/${props.id}`)} bg={data.image} ></Photo>
            <Info>
                <Top>
                    <Title>{data.title}</Title>
                    <Size>
                        <strong>size: </strong>
                        {props.s}
                    </Size>
                </Top>
                <Bottom>
                    <Price>
                        ${data.price}
                    </Price>
                    <RemoveBtn onClick={handleRemoveProductFromCart} >
                        {removing ? (
                            <LoadingSpinner />
                        ) : (
                            <p>Remove</p>
                        )}
                    </RemoveBtn>
                </Bottom>
            </Info>
        </Container>
    )
}

export default CheckoutItem