import React,{useState,useEffect,useContext} from 'react';
import {
    Container,
    Products
} from './styledComponents'
import LoadingPage from '../loading/index'
import CartContext from '../../context/cartState/Context'
import Product from '../../components/product/index'
import {useGetProductsById} from '../../hooks/useGetProductsById'
import ProductModal from "../../components/modals/product/index"
import {motion,AnimatePresence} from "framer-motion";
import styles from "./styles.module.css";

const Favorites = () => {
    const {favorites} = useContext(CartContext)
    const [loading,setLoading] = useState(true)
    const [products,setProducts] = useState([])
    const [selectedCard,setSelectedCard] = useState(null);

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
                {products.length > 0 && products.map((item,index) => (
                    <motion.div 
                        initial={{opacity: 0}}
                        whileInView={{opacity: 1}}
                        layoutId={item.id}
                        key={item.id}
                        onClick={() => setSelectedCard({id:item.id,data:item})}
                    >
                        <Product data={item} />
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

export default Favorites;


