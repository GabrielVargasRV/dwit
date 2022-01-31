import React, { useEffect, useState, useContext } from 'react'
import {
    Container,
    Products
} from './styles'
import Product from '../../components/product/index'
import { useParams } from 'react-router-dom'
import { useGetProductsByCategory } from '../../hooks/useGetProductsByCategory'
import LoadingPage from '../loading/index'
import CartContext from '../../context/cartState/Context'

const Home = () => {
    const {favorites,cartLoading} = useContext(CartContext)
    const { category } = useParams()
    const [items, setItems] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        if(!cartLoading){
            useGetProductsByCategory(category, (res) => {
                if(res.length){
                    const array = res.map((product,index) => {
                        let isLiked = false;
                        if(favorites.includes(product.id)) isLiked = true;
                        return {...product,isLiked};
                    })
                    setItems([...array]);
                    setLoading(false);
                }
            })
        }
    }, [category,cartLoading]);

    if(loading) return <LoadingPage/>

    return (
        <Container>
            <Products>
                {items.length > 0 && items.map((item) => (
                    <Product key={item.id} data={item} ></Product>
                ))}
            </Products>
        </Container>
    )
}

export default Home