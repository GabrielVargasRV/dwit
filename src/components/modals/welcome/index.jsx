import React, { useContext, useState } from 'react';
import {
    Container,
    Header,
    CloseBtn,
    Content,
    Footer,
    Step,
    StepBar,
    StepBtn,
    Image,
} from './styles'
import ModalContext from '../../../context/modalState/Context'
import PaypalButtonImg from '../../../assets/payment-warning-dwit.png'

const First = () => {
    return (
        <Content>
            <h3>
                <i className="fas fa-exclamation-circle"></i>
                Disclaimer
            </h3>
            <p>
                None of the products you see on this page are for sale, when you proceed with the payment you will not be charged or asked for payment information and no shipment will be processed.
            </p>
        </Content>
    )
}

const Second = () => {
    return(
        <Content>
            <Image bg={PaypalButtonImg} />
        </Content>
    )
}


const Welcome = () => {
    const { closeModal } = useContext(ModalContext)
    const [steps, setSteps] = useState(0)
    const content = [<First/>, <Second/>]

    return (
        <Container>
            <Header>
                <h2>Welcome!</h2>
                <CloseBtn onClick={() => closeModal()} >
                    <i className="fas fa-times"></i>
                </CloseBtn>
            </Header>
                {content[steps]}
            <Footer>
                <Step>
                    <StepBtn step={steps >= 0 ? 1 : 0} onClick={() => setSteps(0)} >1</StepBtn>
                    <StepBar step={steps > 0 ? 1 : 0} />
                </Step>
                <Step>
                    <StepBtn step={steps === 1 ? 1 : 0} onClick={() => setSteps(1)} >2</StepBtn>
                </Step>
            </Footer>
        </Container>
    )
}

export default Welcome