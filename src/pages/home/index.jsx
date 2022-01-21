import React, { useEffect, useState } from 'react'
import {
    Container,
    Products
} from './styles'
import Product from '../../components/product/index'
import Header from '../../components/header/index'
import { useParams } from 'react-router-dom'
import { useGetProductsByCategory } from '../../hooks/useGetProductsByCategory'
import LoadingPage from '../loading/index'

const Home = () => {
    const { category } = useParams()
    const [items, setItems] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        useGetProductsByCategory(category, (res) => {
            if(res.length){
                setItems([...res])
                setLoading(false)
            }
        })
    }, [])

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