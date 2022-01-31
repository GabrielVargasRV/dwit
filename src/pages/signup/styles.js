import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 120px);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SignupBox = styled.div`
    width: 340px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ececec;
    border-radius: 5px;
    background-color: #ececec;
    padding: 20px 0px;

    @media (max-width: 340px){
        width: 310px;
    }
`

export const Form = styled.form`
    width: 300px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media (max-width: 340px){
        width: 280px;
    }
`

export const Input = styled.input`
    width: 100%;
    height: 40px;
    outline: none;
    border-style: none;
    border: 1px solid #c1c1c1;
    padding:0px 5px;
`

export const Password = styled.div`
    width:100%;
    height: 40px;
    display: grid;
    grid-template-columns: auto 40px;
    background-color: #ffffff;
    border: 1px solid #c1c1c1;
    border-radius: 3px;
    & input{
        width: 100%;
        height: 100%;
        border-style: none;
        background-color: transparent;
        outline: none;
        padding:0px 5px;
    }
    & button{
        width: 100%;
        height: 100%;
        border-style: none;
        background-color: transparent;
        outline: none;
    }
`

export const SubmitBtn = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 3px;
    background-color: #000000;
    border-style: none;
    color: #ffffff;
    font-weight: bold;
    margin-top: 20px
    cursor: pointer;
`

export const AlreadyHaveAnAccountBtn = styled.button`
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
