import React, { useEffect,useState } from 'react';
import {
    Container,
    Content,
    Products,
    Info,
    GoBackBtn,
    PaymentButton,
    Warning
} from './styled-components';
import styles from "./styles.module.css";
import PaymentServices from "../../services/payment.services";
import Product from '../../components/checkoutItem/index'
import { useNavigate } from 'react-router-dom';
import PaymentSuccess from '../../components/modals/paymentSuccess/index'
import {toast} from 'react-toastify'
import LoadingSpinner from '../../components/loadingSpinner/index';
import { connect } from "react-redux";

const Payment = ({cart,cartFullInfo,buyer,subTotal,isLogged,user}) => {
    const navigate = useNavigate();
    const [modal,setModal] = useState(null);
    const [loadingPayment,setLoadingPayment] = useState(false);

    const handleSuccess = (success) => {
        try{
            setLoadingPayment(false);
            setModal(<PaymentSuccess/>)
            navigate('/account')
        }catch(e){
            toast.error('Something went wrong!');
        }
    }

    const handleError = (error) => {
        setLoadingPayment(false)
        toast.error(error.message)
    }

    const handlePayment = async () => {
        setLoadingPayment(true)
        PaymentServices.pay(user,subTotal,cartFullInfo)
        .then((success) => handleSuccess(success))
        .catch((error) => handleError(error));
    }


    useEffect(() => {
        if (!buyer && cartFullInfo.length > 0) navigate('/checkout/information');
        if (!isLogged) navigate('/account');
    }, [])

    return (
        <Container>
            <Content>
                <Products>
                    {cart.map((product) => {
                        return <Product key={product.idInCart} id={product.id} s={product.size} idInCart={product.idInCart} />
                    })}
                </Products>
                <Info>
                    <h3>Subtotal: ${subTotal}</h3>
                    <hr />
                    {cartFullInfo.map((product, index) => (
                        <p key={index} >
                            <strong>{product.title}: </strong>
                            ${product.price}
                        </p>
                    ))}
                    <Warning>
                        <i className="fas fa-exclamation-circle"></i>
                        <span>this is a test payment only, you will not be charged and no purchase will be processed.</span>
                    </Warning>
                    <PaymentButton onClick={handlePayment} >Payment test {loadingPayment ? <LoadingSpinner/> : <></>} </PaymentButton>
                    <GoBackBtn to="/checkout/information" >Go Back</GoBackBtn>
                </Info>
            </Content>

            {modal && (
                <div className={styles.modal}>
                    <PaymentSuccess close={() => setModal(null)} setModal={setModal} />
                </div>
            )}

        </Container>
    )
}


const mapStateToProps = (state) => ({
    cart: state.cart,
    cartFullInfo: state.cartFullInfo,
    subTotal: state.subTotal,
    buyer: state.buyer,
    isLogged: state.isLogged, 
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({});


export default connect(mapStateToProps,mapDispatchToProps)(Payment);
