import React from 'react';
import  { Image } from './styled-components';
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import {useNearScreen} from "../../hooks/useNearScreen";

const Product = ({data}) => {
    const [show, element] = useNearScreen()


    return(
        <Link className={styles.container} ref={element} to={`/product/${data.id}`} >
            {show ? (
                <>
                    <Image bg={data.image} ></Image>
                    <div className={styles.info} >
                        <div className={styles.infoTop} >
                            <p className={styles.title} >{data.title}</p>
                        </div>
                        <p className={styles.price} >${data.sizes[0].price}</p>
                    </div>
                </>
            ): (
                <></>
            )}
        </Link>
    );
}

export default Product;