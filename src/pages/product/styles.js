import styled from 'styled-components'


export const Heart = styled.i`
    display: none;
    cursor: pointer;
    font-size: 24px;
    transition: all 0.5s;
    color: ${(props) => props.isLiked ? '#F70707' : '#FFFFFF'};
`

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 120px);
`

export const Content = styled.div`
    grid-area: content;
    width: 940px;
    margin: 0 auto;

    @media (max-width: 940px){
        width: 100%;
        padding: 0 10px;
    }
`


export const Center = styled.div`
    width: 100%;
    height: 500px;
    display: grid;
    grid-template-columns: 600px auto;
    grid-template-areas: "photo info";
    margin: 0 auto;
    margin-top: 20px;

    @media (max-width: 880px){
        grid-template-columns: 500px auto;
        height: 400px;
    }

    @media (max-width: 760px){
        grid-template-columns: 400px auto;
        height: 300px;
    }

    @media (max-width: 670px){
        height: 600px;
        grid-template-columns: 100%;
        grid-template-rows: 60% 40%;
        grid-template-areas: "photo"
                             "info";
    }
`

export const Photo = styled.div`
    grid-area: photo;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    background-image: ${(props) => `url(${props.bg})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border: 1px solid #c1c1c1;
    border-radius: 5px;
    transition: all 0.5s;
    padding: 10px;
    &:hover{
        box-shadow: 0px -66px 32px -21px rgba(0,0,0,0.69) inset;
    }
    &:hover ${Heart}{
        display: block;
    }
`

export const Info = styled.div`
    grid-area: info;
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

    @media (max-width: 940px) {
        width: 100%;
        padding: 0 10px;
        grid-template-columns: repeat(3,1fr);
    }

    @media (max-width: 740px) {
        padding: 0 10px;
        grid-template-columns: repeat(2,1fr);
    }
    @media (max-width: 530px) {
        padding: 0 10px;
        grid-template-columns: repeat(1,1fr);
    }
`

