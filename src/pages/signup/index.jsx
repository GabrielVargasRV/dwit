import React, { useState } from 'react';
import {
    Container,
    SignupBox,
    Form,
    Input,
    SubmitBtn,
    Password,
    AlreadyHaveAnAccountBtn
} from './styles';
import UserServices from "../../services/user.services";
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate()
    const [viewPassword, setViewPassword] = useState(false)

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        await UserServices.createUserWithEmailAndPassword(email,password,name).then((res) => res && navigate('/account'))
    }

    return (
        <Container>
            <SignupBox>
                <h2>Register</h2>
                <Form onSubmit={handleOnSubmit} >
                    <Input type="text" name="name" placeholder="Name" required />
                    <Input type="email" name="email" placeholder="Email" required />
                    <Password>
                        <input type={viewPassword ? "text" : "password"} name="password" placeholder="Password" />
                        <button type="button" onClick={() => setViewPassword(!viewPassword)} >
                            {viewPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}
                        </button>
                    </Password>
                    <SubmitBtn type="submit" >register</SubmitBtn>
                </Form>
                <AlreadyHaveAnAccountBtn onClick={() => navigate('/account')} >Already have an account? <strong>Sign In</strong> </AlreadyHaveAnAccountBtn>
            </SignupBox>
        </Container>
    )
}

export default Signup;
