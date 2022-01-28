import React, { useContext, useEffect } from 'react';
import {
    Container,
    Content,
    Products,
    Info,
    GoBackBtn,
    PaymentButton
} from './styles'
import CartContext from '../../context/cartState/Context'
import ModalContext from '../../context/modalState/Context'
import UserContext from '../../context/userState/Context'
import Product from '../../components/checkoutItem/index'
import { useNavigate } from 'react-router-dom';
import PaymentSuccess from '../../components/modals/paymentSuccess/index'
import {toast} from 'react-toastify'

const Payment = () => {
    const navigate = useNavigate()
    const { cart, cartFullInfo, subTotal, buyer,addNewOrder,clearCart,payment } = useContext(CartContext)
    const {setModal} = useContext(ModalContext)
    const {isLogged} = useContext(UserContext)


    const handleSuccess = (success) => {
        addNewOrder(buyer,cartFullInfo,subTotal)
        clearCart()
        setModal(<PaymentSuccess/>)
        navigate('/account')
    }

    const handleError = (error) => {
        toast.error(error.message)
    }

    const handlePayment = async () => {
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
                        return <Product key={index} id={product.id} s={product.size} idInCart={product.idInCart} />
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
                    <PaymentButton onClick={handlePayment} >Pay</PaymentButton>
                    <GoBackBtn to="/checkout/information" >Go Back</GoBackBtn>
                </Info>
            </Content>
        </Container>
    )
}


export default Payment;
