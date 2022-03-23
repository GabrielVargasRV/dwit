import React, { useContext, useEffect,useState } from 'react';
import {
    Container,
    Content,
    Products,
    Info,
    GoBackBtn,
    PaymentButton,
    Warning
} from './styles'
import CartContext from '../../context/cartState/Context'
import ModalContext from '../../context/modalState/Context'
import UserContext from '../../context/userState/Context'
import Product from '../../components/checkoutItem/index'
import { useNavigate } from 'react-router-dom';
import PaymentSuccess from '../../components/modals/paymentSuccess/index'
import {toast} from 'react-toastify'
import LoadingSpinner from '../../components/loadingSpinner/index'

const Payment = () => {
    const navigate = useNavigate()
    const { cart, cartFullInfo, subTotal, buyer,addNewOrder,clearCart,payment } = useContext(CartContext)
    const {setModal} = useContext(ModalContext)
    const {isLogged} = useContext(UserContext)
    const [loadingPayment,setLoadingPayment] = useState(false);

    const handleSuccess = (success) => {
        setLoadingPayment(false)
        addNewOrder(cartFullInfo,subTotal)
        clearCart()
        setModal(<PaymentSuccess/>)
        navigate('/account')
    }

    const handleError = (error) => {
        setLoadingPayment(false)
        toast.error(error.message)
    }

    const handlePayment = async () => {
        setLoadingPayment(true)
        payment()
        .then((success) => handleSuccess(success))
        .catch((error) => handleError(error))
    }


    useEffect(() => {
        if (!buyer && cartFullInfo.length > 0) navigate('/checkout/information')
        if (!isLogged) navigate('/account')
    }, [])

    return (
        <Container>
            <Content>
                <Products>
                    {cart.map((product, index) => {
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
        </Container>
    )
}


export default Payment;
