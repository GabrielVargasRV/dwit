import React,{useState} from 'react';
import styles from "./styles.module.css";
import {motion} from 'framer-motion';
import {
    Photo,
    Heart,
    Content
} from "./styledComponents"
import SizeGuide from '../sizeGuide';
import useShare from "../../../hooks/useShare";
import Cart from "../../../services/cart.services";
import {toast} from "react-toastify";
import Notification from "../../notification/index";


const ProductModal = ({id,close,data}) => {
    const [isLiked,setIsLiked] = useState(data.isLiked)
    const [currentSize,setCurrentSize] = useState({...data.sizes[0],index: 0});
    const [sizeGuideOn,setSizeGuideOn] = useState(false);
    const share = useShare();

    const addToCart = () =>{
        Cart.addToCart(data.id,currentSize.size,(res) => {
            toast(<Notification ImgUrl={data.image} text="Added to cart" theme="#06BC0B" />, {
                hideProgressBar: true,
                autoClose: 3000,
                pauseOnHover: true,
                draggable: false,
            })
        })
    }

    const hadleLike = () => {
        if(isLiked){
            Cart.removeFromFavorites(data.id);
            setIsLiked(false);
        }else{
            Cart.addToFavorites(data.id);
            setIsLiked(true);
        }
    }

    return (<motion.div layoutId={id} >
        {sizeGuideOn ? (
            <SizeGuide close={() => setSizeGuideOn(false)} />
        ) : (
            <motion.div className={styles.container}>
                <motion.div className={styles.header} >
                    <motion.button 
                        animate={{x: [-50,5,0, -5,0], rotate: ['-45deg', '10deg', '0deg']}}
                        whileHover={{borderRadius: '20%',rotate: '90deg'}}
                        className={styles.close_btn}
                        onClick={() => close()} 
                    >
                        <i className="fas fa-times"></i>
                    </motion.button>
                </motion.div>
    
                <Content>
                    <div >
                        <Photo bg={data.image} >
                            <Heart                  
                                onClick={hadleLike}
                                isLiked={isLiked}
                                className={[isLiked ? "fas fa-heart" : "far fa-heart", "heart-icon"]}
                            >
                            </Heart>
                        </Photo>
                    </div>
    
                    <div className={styles.info} >
                        <div>
                            <h2>{data.title}</h2>
                            <p>{data.description}</p>
                            <div className={styles.size_container} >
                                {data.sizes.map((size,index) => (
                                    <button key={size.size} className={`${styles.size_btn} ${currentSize.index === index && styles.size_btn_active}`} onClick={() => setCurrentSize({...size,index: index})} >
                                        <p>
                                            {size.size.toUpperCase()}
                                            <span> ${size.price}</span>
                                        </p>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className={styles.price} >${currentSize.price}</p>
                            <div>
                                <button className={styles.add_btn} onClick={addToCart} >Add to cart</button>
                                <button onClick={() => setSizeGuideOn(true)} className={styles.size_guide_btn} >
                                    <i className="fas fa-ruler"></i>
                                    <span>
                                        Size guide
                                    </span>
                                </button>
                                <button 
                                    className={styles.share_btn}
                                    onClick={() => share(data.title,'',`https://donewithit-511d4.web.app/product/${id}`)}
                                >
                                    <i className="fas fa-share"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </Content>
            </motion.div>
        )}

    </motion.div>)
}

export default ProductModal;