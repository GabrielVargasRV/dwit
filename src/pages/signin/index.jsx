import React, { useContext } from 'react';
import {
    Container,
    SigninBox,
    SigninWithGoogleBtn,
    SigninWithEmail,
    SigninWithEmailInput,
    SigninWithEmailBtn,
    SigninWithEmailRegisterBtn
} from './styles'
import UserContext from '../../context/userState/Context'


const Signin = () => {
    const { signinWithGoogle, signinWithEmailAndPassword} = useContext(UserContext)

    const handleSigninWithGoogle = async () => {
        await signinWithGoogle()
        return
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await signinWithEmailAndPassword(email,password)
        return
    }

    return (
        <Container>
            <SigninBox>
                <h2>Sign in</h2>
                <SigninWithGoogleBtn onClick={handleSigninWithGoogle} >
                    Sign in with
                    <i className="fab fa-google"></i>
                </SigninWithGoogleBtn>
                <SigninWithEmail onSubmit={handleOnSubmit} >
                    <SigninWithEmailInput type="email" placeholder="Email" name="email" required />
                    <SigninWithEmailInput type="password" placeholder="Password" name="password" required />
                    <SigninWithEmailBtn type="submit" >Sign in</SigninWithEmailBtn>
                    <SigninWithEmailRegisterBtn to="/register" >Don't have an account? <strong> register</strong></SigninWithEmailRegisterBtn>
                </SigninWithEmail>
            </SigninBox>
        </Container>
    )
}

export default Signin;