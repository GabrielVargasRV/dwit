import React from 'react';
import {
    SigninBox,
    SigninWithGoogleBtn,
    SigninWithEmail,
    SigninWithEmailInput,
    SigninWithEmailBtn,
    SigninWithEmailRegisterBtn,
    Top,
    CloseBtn
} from './styles';
import UserServices from "../../../services/user.services";
import SignupModal from '../signup/index';

const Signin = ({close,setModal}) => {
    const handleSigninWithGoogle = async () => {
        await UserServices.signInWithGoogle()
        close()
        return
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await UserServices.signInWithEmailAndPassword(email,password);
        close()
        return
    }

    return (
        <SigninBox>
            <Top>
                <h2>Sign in</h2>
                <CloseBtn onClick={() => close()} >
                    <i className="fas fa-times"></i>
                </CloseBtn>
            </Top>
            <SigninWithGoogleBtn onClick={handleSigninWithGoogle} >
                Sign in with
                <i className="fab fa-google"></i>
            </SigninWithGoogleBtn>
            <SigninWithEmail onSubmit={handleOnSubmit} >
                <SigninWithEmailInput type="email" placeholder="Email" name="email" required />
                <SigninWithEmailInput type="password" placeholder="Password" name="password" required />
                <SigninWithEmailBtn type="submit" >Sign in</SigninWithEmailBtn>
                <SigninWithEmailRegisterBtn onClick={() => setModal(<SignupModal close={close} setModal={setModal} />)} >Don't have an account? <strong> register</strong></SigninWithEmailRegisterBtn>
            </SigninWithEmail>
        </SigninBox>
    )
}

export default Signin;