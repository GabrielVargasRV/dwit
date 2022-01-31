import React, { useContext } from 'react';
import {
    SigninBox,
    SigninWithGoogleBtn,
    SigninWithEmail,
    SigninWithEmailInput,
    SigninWithEmailBtn,
    SigninWithEmailRegisterBtn,
    Top,
    CloseBtn
} from './styles'
import UserContext from '../../../context/userState/Context'
import ModalContext from '../../../context/modalState/Context'
import SignupModal from '../signup/index'

const Signin = () => {
    const { signinWithGoogle, signinWithEmailAndPassword} = useContext(UserContext)
    const {closeModal,setModal} = useContext(ModalContext)

    const handleSigninWithGoogle = async () => {
        await signinWithGoogle()
        closeModal()
        return
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await signinWithEmailAndPassword(email,password)
        closeModal()
        return
    }

    return (
        <SigninBox>
            <Top>
                <h2>Sign in</h2>
                <CloseBtn onClick={() => closeModal()} >
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
                <SigninWithEmailRegisterBtn onClick={() => setModal(<SignupModal/>)} >Don't have an account? <strong> register</strong></SigninWithEmailRegisterBtn>
            </SigninWithEmail>
        </SigninBox>
    )
}

export default Signin