import React, { useState, useContext } from 'react';
import {
    Container,
    SignupBox,
    Form,
    Input,
    SubmitBtn,
    Password
} from './styles'
import UserContext from '../../context/userState/Context'
import { toast } from 'react-toastify'
import { auth } from '../../firebase';
import {useNavigate} from 'react-router-dom'

const AVATAR_DEFAULT_PHOTO = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'


const Signup = () => {
    const navigate = useNavigate()
    const { logup } = useContext(UserContext)
    const [viewPassword, setViewPassword] = useState(false)

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
            const user = userCredential.user;
            const userObj = {
                email,
                uid:user.uid,
                name,
                photo: AVATAR_DEFAULT_PHOTO
            }
            logup(userObj).then((res) => navigate('/account'))
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error('Something went wrong, please try again later.',{position:'top-right'})
        });
    }

    return (
        <Container>
            <SignupBox>
                <h2>Register</h2>
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
            </SignupBox>
        </Container>
    )
}

export default Signup;
