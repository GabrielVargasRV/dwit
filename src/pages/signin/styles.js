import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 120px);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SigninBox = styled.div`
    width: 340px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ececec;
    border-radius: 5px;
    background-color: #ececec;
    padding: 20px 0px;
`

export const SigninWithGoogleBtn = styled.button`
    width: 300px; 
    height: 40px;
    border-style:none;
    border-radius: 3px;
    background-color: #339AF0;
    color: #ffffff;
    margin-top: 10px;
    cursor: pointer;
    & i{
        margin-left: 5px;
    }
`

export const SigninWithEmail = styled.form`
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 50px;
`

export const SigninWithEmailInput = styled.input`
    width: 100%;
    height: 40px;
    background-color: #ffffff;
    color: #000000;
    border-style: none;
    border-radius: 3px;
    border: 1px solid #c1c1c1;
    padding: 3px;
`

export const SigninWithEmailBtn = styled.button`
    width: 100%;
    height: 40px;
    border-style: none;
    border-radius: 3px;
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;
`

export const SigninWithEmailRegisterBtn = styled(Link)`
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-style: none;
    color: #000000;
    cursor: pointer;
    text-decoration: none;
    & strong{
        text-decoration: none;
        color: #339AF0;
        margin-left: 5px;
    }
`