import React, { useEffect, useState } from 'react'
import { Container, Products as ProductsComp } from './stylesComponents'
import Product from '../../components/product/index';
import { useParams } from 'react-router-dom';
import Products from "../../services/products.services";
import LoadingPage from '../loading/index';
import { connect } from "react-redux";

const Home = ({favorites,cartLoading}) => {
    const { category } = useParams()
    const [items, setItems] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        if(!cartLoading){
            Products.getByCategory(category, (res) => {
                if(res.length){
                    const array = res.map((product) => {
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
            <ProductsComp>
                {items.length > 0 && items.map((item) => (
                        <Product key={item.id} data={item} ></Product>
                ))}
            </ProductsComp>
        </Container>
    )
}

const mapStateToProps = (state) => ({
    favorites: state.favorites,
    cartLoading: state.cartLoading,
});

const mapDispatcoToProps = (dispatch) => ({});

export default connect(mapStateToProps,mapDispatcoToProps)(Home);