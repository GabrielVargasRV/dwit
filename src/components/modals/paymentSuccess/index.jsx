import React, { useContext } from 'react';
import {
    Container,
    Top,
    Center,
    CloseBtn
} from './styles'
import ModalContext from '../../../context/modalState/Context'

const PaymentSuccess = () => {
    const { closeModal } = useContext(ModalContext)

    const handleClose = () => {
        closeModal()
    }


    return (
        <Container>
            <Top>
                <CloseBtn onClick={handleClose} >
                    <i className="fas fa-times"></i>
                </CloseBtn>
            </Top>
            <Center>
                <i className="fas fa-check-circle"></i>
                <h3>Thanks for your purchase!</h3>
                {/* <p>See all your orders at <Strong >Account</Strong></p> */}
            </Center>
        </Container>
    )
}

export default PaymentSuccess;