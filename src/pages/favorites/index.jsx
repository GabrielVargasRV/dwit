import React,{useState,useEffect,useContext} from 'react';
import {
    Container,
    Products
} from './styles'
import LoadingPage from '../loading/index'
import CartContext from '../../context/cartState/Context'
import Product from '../../components/product/index'
import {useGetProductsById} from '../../hooks/useGetProductsById'

const Favorites = () => {
    const {favorites} = useContext(CartContext)
    const [loading,setLoading] = useState(true)
    const [products,setProducts] = useState([])

    useEffect(() => {
        useGetProductsById(favorites,(res) => {
            const array = res.map((product) => {
                let isLiked = false;
                if(favorites.includes(product.id)) isLiked = true;
                return {...product,isLiked};
            })
            setProducts([...array]);
            setLoading(false);
        })
    },[favorites]);

    if(loading) return <LoadingPage/>

    return(
        <Container>
            <Products>
                {products.length > 0 && products.map((product,index) => (
                    <Product data={product} key={index}  />
                ))}
            </Products>
        </Container>
    )
}

export default Favorites;


