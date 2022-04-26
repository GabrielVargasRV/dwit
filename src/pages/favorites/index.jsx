import React,{useState,useEffect} from 'react';
import {
    Container,
    Products as ProductsComp
} from './styledComponents';
import LoadingPage from '../loading/index';
import Product from '../../components/product/index';
import Products from "../../services/products.services";

import ProductModal from "../../components/modals/product/index"
import {motion,AnimatePresence} from "framer-motion";
import { connect } from "react-redux";
import styles from "./styles.module.css";

const Favorites = ({favorites}) => {
    const [loading,setLoading] = useState(true)
    const [products,setProducts] = useState([])
    const [selectedCard,setSelectedCard] = useState(null);

    useEffect(() => {
        Products.getByIds(favorites,(res) => {
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
            <ProductsComp>
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
            </ProductsComp>

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


const mapStateToProps = (state) => ({
    favorites: state.favorites
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps,mapDispatchToProps)(Favorites);


