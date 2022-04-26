import React, { useEffect,useState } from 'react';
import {
    Container,
    Content,
    Form,
    Info,
    ContinueBtn,
    GoBackBtn
} from './styled-components';
import styles from "./styles.module.css";
import Payment from "../../services/payment.services";
import {useNavigate} from 'react-router-dom';
import SigninModal from '../../components/modals/signin/index';
import { connect } from "react-redux";

const Information = ({cartFullInfo,subTotal,isLogged}) => {
    const [modal,setModal] = useState(false);
    const navigate = useNavigate();


    const handleOnSubmit = (e) => {
        e.preventDefault();
        Payment.setBuyer({
            email:e.target.email.value,
            address:e.target.address.value,
            apto:e.target.apto.value,
            city:e.target.city.value,
            country: e.target.country.value,
            state: e.target.state.value,
            cp: e.target.cp.value,
            phone: e.target.phone.value
        });
        if(!isLogged) setModal(<SigninModal/>)
        else{
            navigate('/checkout/payment')
        }
    }

    useEffect(() => {
        if(!isLogged) setModal(<SigninModal/>)
    },[])

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

            {modal && (
                <div className={styles.modal}>
                    <SigninModal close={() => setModal(null)} setModal={setModal} />
                </div>
            )}
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = (state) => ({
    cartFullInfo: state.cartFullInfo,
    subTotal: state.subTotal,
    isLogged: state.isLogged
})

export default connect(mapStateToProps,mapDispatchToProps)(Information);