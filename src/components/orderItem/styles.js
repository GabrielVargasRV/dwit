import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #c1c1c1;
    display: grid;
    grid-template-columns: 210px auto;
    grid-gap: 10px;
    padding: 10px;
    margin-bottom: 10px;

    @media(max-width: 500px){
        grid-template-columns: 150px auto;
    }
`

export const Product = styled.div`
    width: 210px;
    height: 210px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-image: ${(props) => `url(${props.bg})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: 0px -200px 82px -75px rgba(0,0,0,0.80) inset;
    border: 1px solid #ececec;
    padding: 10px;
    border-radius: 5px;
    & p{
        color: #ffffff;
        font-size: 18px;
    }

    @media(max-width: 500px){
        width: 150px;
        height: 150px;
    }
`

export const ArrowsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    & button{
        background-color: transparent;
        border-style: none;
        cursor: pointer;
        & i{
            font-size: 28px;
            color: #000;
            text-shadow: 0px 0px 1px #fff;
        }
    }
`

export const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

export const CancelBtn = styled.button`
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FF3C3C;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
    font-weight: bold;
    color: #ffffff;
    border: 1px solid #f20000;
    &:hover{
        opacity: 0.8;
    }

    @media (max-width: 440px){
        width: 100px;
        height: 30px;
    }
`

export const Title = styled.h2`
   @media (max-width: 440px){
        font-size: 18px;
    }
`

export const Status = styled.p`
    margin-top: 10px;
    @media (max-width: 440px){
        font-size: 14px;
    }
`

export const RepurchaseBtn = styled.button``