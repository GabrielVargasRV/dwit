import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #c1c1c1;
    display: grid;
    grid-template-columns: 310px auto;
    grid-gap: 10px;
    padding: 10px;
`

export const Product = styled.div`
    width: 310px;
    height: 310px;
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

export const CancelBtn = styled.button``

export const RepurchaseBtn = styled.button``