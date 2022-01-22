import React, { useContext, useState } from 'react';
import {
    Container,
    Content,
    Form,
    Info,
    ContinueBtn,
    GoBackBtn
} from './styles'
import Context from '../../context/Context'
import {useNavigate} from 'react-router-dom'

const Information = () => {
    const {cartFullInfo,subTotal,setBuyer} = useContext(Context)
    const navigate = useNavigate()

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setBuyer({
            email:e.target.email.value,
            address:e.target.address.value,
            apto:e.target.apto.value,
            city:e.target.city.value,
            country: e.target.country.value,
            state: e.target.state.value,
            cp: e.target.cp.value,
            phone: e.target.phone.value
        })
        navigate('/checkout/payment')
    }

    return (
        <Container>
            <Content>
                <Form onSubmit={handleOnSubmit} >
                    <input type="text" placeholder="Email" name="email" required />
                    <input type="text" placeholder="Address" name="address" required />
                    <input type="text" placeholder="Apto" name="apto" required />
                    <input type="text" placeholder="City" name="city" required />
                    <input type="text" placeholder="Country" name="country" required />
                    <input type="text" placeholder="State" name="state" required />
                    <input type="text" placeholder="CP" name="cp" required />
                    <input type="text" placeholder="Phone number" name="phone" required />
                    <ContinueBtn type="submit" >Continue</ContinueBtn>
                </Form>
                <Info>
                    <h3>Subtotal: ${subTotal}</h3>
                    <hr />
                    {cartFullInfo.map((product, index) => (
                        <p key={index} >
                            <strong>{product.title}: </strong>
                            ${product.price}
                        </p>
                    ))}
                    <GoBackBtn to="/checkout" >Go Back</GoBackBtn>
                </Info>
            </Content>
        </Container>
    )
}

export default Information