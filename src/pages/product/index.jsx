import React, { useEffect, useState } from 'react';
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
    RelatedProducts,
    Heart,
    SizeGuide
} from './styled-components'
import { useParams,Link } from 'react-router-dom';
import styles from "./styles.module.css";
// import { useGetProductById } from '../../hooks/useGetProductById'
// import { useGetProductsByCategory } from '../../hooks/useGetProductsByCategory'
import ReletedProduct from '../../components/product/index';
// import CartContext from '../../context/cartState/Context';
import CartServices from "../../services/cart.services";
import ProductsServices from "../../services/products.services";
import LoadingPage from '../loading/index'
import { toast } from 'react-toastify'
import Notification from '../../components/notification/index'
import LoadingSpinner from '../../components/loadingSpinner/index'
import SizeGuideModal from '../../components/modals/sizeGuide/index';
import { connect } from "react-redux";
// import ModalContext from '../../context/modalState/Context'


const Product = ({favorites}) => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [addingToCart, setAddingToCart] = useState(false)
    const [activeSize, setActiveSize] = useState(0)
    const [related, setRelated] = useState([]);
    const [modal,setModal] = useState(null);
    const [isLiked,setIsLiked] = useState(false)

    const handleOnClick = () => {
        if(isLiked){
            CartServices.removeFromFavorites(data.id)
            setIsLiked(false)
        }else {
            CartServices.addToFavorites(data.id)
            setIsLiked(true)
        }
    }

    const handleAddProductToCart = async () => {
        if (!loading) {
            setAddingToCart(true)
            await CartServices.addToCart(id, data.sizes[activeSize].size);
            toast(<Notification ImgUrl={data.image} text="Added to cart" theme="#06BC0B" />, {
                hideProgressBar: true,
                autoClose: 3000,
                pauseOnHover: true,
                draggable: false,
            })
            setAddingToCart(false)
        }
    }

    const getData = async () => {
        const productById = await ProductsServices.getById(id);
        const productsByCategory = await ProductsServices.getByCategory(productById.category[0],null,4);
        setData(productById);
        setRelated([...productsByCategory]);
        setLoading(false);
    }

    useEffect(() => {
        setActiveSize(0)
        if(favorites.includes(id)) setIsLiked(true)
        getData();
    }, [id])


    if (loading) return <LoadingPage />

    return (
        <Container>
            <Content>
                <Center>
                    <Photo bg={data.image} >
                        <Heart
                            onClick={handleOnClick}
                            isLiked={isLiked}
                            className={[isLiked ? "fas fa-heart" : "far fa-heart", "heart-icon"]}
                        ></Heart>
                    </Photo>
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
                            <SizeGuide onClick={() => setModal(<SizeGuideModal/>)} >
                                <i className="fas fa-ruler"></i> 
                                <span>Size guide</span>
                            </SizeGuide>
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
                    <Link key={product.id} to={`/product/${product.id}`} style={{textDecoration: 'none'}} >
                        <ReletedProduct data={product} />
                    </Link>
                ))}
            </RelatedProducts>

            {modal && (
                <div className={styles.modal}>
                    <SizeGuideModal close={() => setModal(null)} />
                </div>
            )}

        </Container>
    )
}

const mapStateToProps = (state) => ({
    favorites: state.favorites
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps,mapDispatchToProps)(Product);