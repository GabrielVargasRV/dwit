import React, { useEffect, useState, useContext } from 'react'
import {
    Container,
    Products
} from './stylesComponents'
import Product from '../../components/product/index'
import { useParams } from 'react-router-dom'
import { useGetProductsByCategory } from '../../hooks/useGetProductsByCategory'
import LoadingPage from '../loading/index'
import CartContext from '../../context/cartState/Context'
import styles from "./styles.module.css"
import ProductModal from "../../components/modals/product";
import {motion,AnimatePresence} from 'framer-motion';

const Home = () => {
    const {favorites,cartLoading} = useContext(CartContext)
    const [selectedCard,setSelectedCard] = useState(null);
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
                    <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} layoutId={item.id} key={item.id} onClick={() => setSelectedCard({id:item.id,data:item})}>
                        <Product data={item} ></Product>
                    </motion.div>
                ))}
            </Products>

            <AnimatePresence>
                {selectedCard && (
                    <motion.div className={styles.modal_container} >
                        <ProductModal id={selectedCard.id} data={selectedCard.data} close={() => setSelectedCard(null)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    )
}

export default Home