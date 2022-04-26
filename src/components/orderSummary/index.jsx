import React, {useEffect,useState} from 'react';
import {
    Container,
} from './styles';
import { connect } from "react-redux";

const OrderSummary = ({cartFullInfo}) => {
    const [subTotal,setSubTotal] = useState(0);

    useEffect(() => {
        let sum = 0;
        cartFullInfo.forEach((i) => sum+=i.price);
        setSubTotal(sum);
    },[cartFullInfo])

    return (
        <Container>
            <h3>Subtotal: ${subTotal}</h3>
            <hr />
            {cartFullInfo.map((product, index) => (
                <p key={index} >
                    <strong>{product.title}: </strong>
                    ${product.price}
                </p>
            ))}
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = (state) => ({
    cartFullInfo: state.cartFullInfo
});


export default connect(mapStateToProps,mapDispatchToProps)(OrderSummary);