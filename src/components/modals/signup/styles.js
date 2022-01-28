import styled from 'styled-components'

export const CloseBtn = styled.button`
    width: 40px;
    height: 40px;
    font-size: 24px;
    border-style: none;
    border-radius: 50%;
    color: #c1c1c1;
    background-color: #ececec;
    cursor: pointer;
    transition: all 0.5s;
    /* border: 1px solid #c1c1c1; */
    &:hover{
        color: red;
    }
`

export const Top = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const SignupBox = styled.div`
    width: 340px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ececec;
    border-radius: 5px;
    background-color: #ffffff;
    padding: 20px 0px;
    `

export const Form = styled.form`
    width: 300px;
    height: 240px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 10px;
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
    font-size: 16px;
    & strong{
        text-decoration: none;
        color: #339AF0;
        margin-left: 5px;
    }
`