import React from 'react';
import {
    Container,
    Top,
    Center,
    CloseBtn
} from './styles';

const PaymentSuccess = ({close}) => {

    const handleClose = () => {
        close()
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
            </Center>
        </Container>
    )
}

export default PaymentSuccess;