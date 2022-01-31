import React,{useEffect,useState,useContext} from 'react';
import  {
    Container,
    Image,
    Info,
    Title,
    Price,
    InfoTop,
    Heart
} from './styles'
import CartContext from '../../context/cartState/Context'

const Product = ({data}) => {
    const {addToFavorites,removeFromFavorites} = useContext(CartContext)
    const [isLiked,setIsLiked] = useState(false)

    const handleOnClick = () => {
        if(isLiked){
            removeFromFavorites(data.id)
            setIsLiked(false)
        }else {
            addToFavorites(data.id)
            setIsLiked(true)
        }
    }

    useEffect(() => {
        if(data.isLiked) setIsLiked(true)
    },[])

    return(
        <Container >
            <Image to={`/product/${data.id}`} bg={data.image} ></Image>
            <Info>
                <InfoTop>
                    <Title to={`/product/${data.id}`} >{data.title}</Title>
                    <Heart
                        onClick={handleOnClick}
                        isLiked={isLiked}
                        className={[isLiked ? "fas fa-heart" : "far fa-heart","heart-icon"]}
                    ></Heart>
                </InfoTop>
                <Price>${data.sizes[0].price}</Price>
            </Info>
        </Container>
    )
}

export default Product;