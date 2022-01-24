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
import { googleAuthProvider, auth } from '../../firebase/index'
import UserContext from '../../context/userState/Context'
import { toast } from 'react-toastify'

const Signin = () => {
    const { login } = useContext(UserContext)

    const handleSigninWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider).then((success) => {
            const u = success.user;
            const obj = {
                name: u.displayName,
                email: u.email,
                uid: u.uid,
                photo: u.photoURL,
            };
            login(obj);
        }).catch((error) => {
            toast.error('Something went wrong, please try again later.', { position: 'top-right' })
        })
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                const userObj = {
                    email,
                    uid: user.uid,
                    name: user.displayName,
                    photo: AVATAR_DEFAULT_PHOTO
                }
                login(userObj)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                if(errorCode === 'auth/user-not-found') toast.error('User not found.', { position: 'top-right' })
                else toast.error('Something went wrong, please try again later.', { position: 'top-right' })
            });
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