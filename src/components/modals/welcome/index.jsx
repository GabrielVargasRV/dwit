import React, { useContext, useState } from 'react';
import {
    Container,
    Header,
    CloseBtn,
    Content,
    Strong,
    Footer,
    Step,
    StepBar,
    StepBtn,
    Image,
} from './styles'
import ModalContext from '../../../context/modalState/Context'
import PaypalButtonImg from '../../../assets/paypal-button-advise.jpg'

const First = () => {
    return (
        <Content>
            <h3>
                <i className="fas fa-exclamation-circle"></i>
                Disclaimer
            </h3>
            <p>
                This web application is not a real clothing store, this web application was developed by
                <Strong target="_blank" href="https://gabriel-vargas-cf193.web.app/" > Gabriel Vargas</Strong> (me) to practice my development skills
                and to gain more experience making applications. thanks for taking a look.
            </p>
        </Content>
    )
}

const Second = () => {
    return(
        <Content>
            <Image bg={PaypalButtonImg} />
            <p>As this is not a real store, the payment button will not charge you anything and no shipment will be processed.</p>
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