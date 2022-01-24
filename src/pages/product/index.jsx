import React, { useEffect, useState, useContext } from 'react';
import {
    Container,
    Content,
    Center,
    Photo,
    Info,
    InfoTop,
    Tittle,
    Description,
    AddToCartBtn,
    Sizes,
    Size,
    Price,
    RelatedProducts
} from './styles'
import { useParams } from 'react-router-dom'
import { useGetProductById } from '../../hooks/useGetProductById'
import { useGetProductsByCategory } from '../../hooks/useGetProductsByCategory'
import ReletedProduct from '../../components/product/index'
import CartContext from '../../context/cartState/Context';
import LoadingPage from '../loading/index'
import { toast } from 'react-toastify'
import Notification from '../../components/notification/index'
import LoadingSpinner from '../../components/loadingSpinner/index'


const Product = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [addingToCart, setAddingToCart] = useState(false)
    const [activeSize, setActiveSize] = useState(0)
    const [related, setRelated] = useState([])
    const { addProductToCart } = useContext(CartContext)

    useEffect(() => {
        setActiveSize(0)
        useGetProductById(id, (res) => {
            if (res) {
                setData(res)
                useGetProductsByCategory(res.category[0], (response) => {
                    setRelated([...response])
                    setLoading(false)
                }, 4)
            }
        })
    }, [id])

    const handleAddProductToCart = () => {
        if (!loading) {
            setAddingToCart(true)
            addProductToCart(id, data.sizes[activeSize].size, (res) => {
                toast(<Notification ImgUrl={data.image} text="Added to cart" theme="#06BC0B" />, {
                    hideProgressBar: true,
                    autoClose: 3000,
                    pauseOnHover: true,
                    draggable: false,
                })
                setAddingToCart(false)
            })
        }
    }

    if (loading) return <LoadingPage />

    return (
        <Container>
            <Content>
                <Center>
                    <Photo bg={data.image} ></Photo>
                    <Info>
                        <InfoTop>
                            <Tittle>{data.title}</Tittle>
                            <Description>{data.description}</Description>
                            <Sizes>
                                {data.sizes.map((size, index) => (
                                    <Size key={index} active={activeSize === index} onClick={() => setActiveSize(index)} >
                                        {size.size}
                                        <span>${size.price}</span>
                                    </Size>
                                ))}
                            </Sizes>
                        </InfoTop>
                        <div>
                            <Price>${data.sizes[activeSize].price}</Price>
                            <AddToCartBtn onClick={() => { handleAddProductToCart() }} >
                                {addingToCart ? (
                                    <LoadingSpinner />
                                ) : (
                                    <p>Add To Cart</p>
                                )}
                            </AddToCartBtn>
                        </div>
                    </Info>
                </Center>
                <h2 style={{ marginTop: '10px' }} >Related Products</h2>
            </Content>
            <RelatedProducts>
                {related.map(product => (
                    <ReletedProduct key={product.id} data={product} >
                    </ReletedProduct>
                ))}
            </RelatedProducts>
        </Container>
    )
}

export default Product;
