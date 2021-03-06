import React, { useState } from 'react';
import {
    SignupBox,
    Form,
    Input,
    SubmitBtn,
    Password,
    CloseBtn,
    Top,
    AlreadyHaveAnAccountBtn
} from './styles';
import UserServices from "../../../services/user.services";
import SigninModal from '../signin/index';

const Signup = ({close,setModal}) => {
    const [viewPassword, setViewPassword] = useState(false)

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        await UserServices.createUserWithEmailAndPassword(email, password, name)
        .then((res) => {
            close();
        });
    }

    return (
        <SignupBox>
            <Top>
                <h2>Register</h2>
                <CloseBtn onClick={() => closeModal()} >
                    <i className="fas fa-times"></i>
                </CloseBtn>
            </Top>
            <Form onSubmit={handleOnSubmit} >
                <Input type="email" name="email" placeholder="Email" required />
                <Input type="text" name="name" placeholder="Name" required />
                <Password>
                    <input type={viewPassword ? "text" : "password"} name="password" placeholder="Password" />
                    <button type="button" onClick={() => setViewPassword(!viewPassword)} >
                        {viewPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
                    </button>
                </Password>
                <SubmitBtn type="submit" >register</SubmitBtn>
            </Form>
            <AlreadyHaveAnAccountBtn onClick={() => setModal(<SigninModal close={close} setModal={setModal} />)} >Already hava a account ? <strong>sign in</strong></AlreadyHaveAnAccountBtn>
        </SignupBox>
    )
}

export default Signup;
