import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 120px);
`

export const Content = styled.div`
    grid-area: content;
    width: 940px;
    margin: 0 auto;
`


export const Center = styled.div`
    width: 100%;
    height: 500px;
    display: grid;
    grid-template-columns: 600px auto;
    grid-template-rows: 100%;
    /* margin: 0 auto; */
    margin-top: 20px;
`

export const Photo = styled.div`
    width: 100%;
    height: 100%;
    background-image: ${(props) => `url(${props.bg})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border: 1px solid #c1c1c1;
    border-radius: 5px;
`

export const Info = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px 10px;
`

export const InfoTop = styled.div``

export const Tittle = styled.h2``

export const Description = styled.p``

export const Price = styled.p`
    font-size: 24px;
    color: #010101;
`

export const AddToCartBtn = styled.button`
    width: 120px;
    height: 40px;
    border-style: none;
    background-color: #000000;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
`

export const Sizes = styled.div`
    width: 240px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3,1fr);
    margin-top: 15px;
`

export const Size = styled.button`
    height: 30px;
    width: 100%;
    border-style: none;
    border-radius: 5px;
    background-color: transparent;
    border: ${(props) => props.active ? 'solid 3px #000000' : 'solid 1px #c1c1c1'};
    font-size: 16px;
    font-weight: bold;
    & span{
        margin-left: 5px;
        font-size: 12px;
        font-weight: 300;
    }
`

export const RelatedProducts = styled.div`
    width: 940px;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 20px;
    margin: 0 auto;
`

